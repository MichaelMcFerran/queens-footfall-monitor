// heroku, change to url connecting to
var socket = require("socket.io-client")("https://footfalldemo3.herokuapp.com");
//local host 
//var socket = require("socket.io-client")("http://localhost:3000"); //change from 3000 if errors in local testing 
const Gpio = require('pigpio').Gpio; //library for US module
const delay = require('delay'); //delay reading first measurement to second for direction detection

var count = 0; //initalise person count at zero

var dist = 0; //initialise US1 distance 
var dist2 = 0; //initialise US2 distance

// The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
const MICROSECONDS_PER_CM = 1e6 / 34321;
//set Ultrasonic module vars
const triggerUS1 = new Gpio(23, { mode: Gpio.OUTPUT });
const echoUS1 = new Gpio(24, { mode: Gpio.INPUT, alert: true });
const triggerUS2 = new Gpio(17, { mode: Gpio.OUTPUT });
const echoUS2 = new Gpio(27, { mode: Gpio.INPUT, alert: true });
//set distance across entrance so if person walks past then triggers a count increase message 
const distmin = 12; //slightly less than test obstacle distance for tolerance ( test distance is around 14.9-15.3cm)
triggerUS1.digitalWrite(0); // Make sure trigger is low
triggerUS2.digitalWrite(0); // Make sure trigger is low



//function to measure US1 distance
const watchUS = () => {
  let startTick;

  echoUS1.on('alert', (level, tick) => {

    if (level == 1) {
      startTick = tick;
    } else {
      const endTick = tick;
      const diff = (endTick >> 0) - (startTick >> 0); // Unsigned 32 bit arithmetic
      dist = diff / 2 / MICROSECONDS_PER_CM;
      console.log("Entrance: ", dist);
      //checks if US1 passed first
      if (dist <= distmin && dist2 >= distmin) {
        console.log("first US passed ", dist);
        //passing in delay
        (async () => {

          await delay(100);
          console.log("delayed");

          // Executed 100 milliseconds later
          // watchUS2();
          while (dist <= 17) { //originally distance min
            console.log("inside while US1:", dist, "US2", dist2);
            //check second passed just after first
            if (dist <= distmin && dist2 <= distmin) {
              // if (dist2 <= distmin) {
              count++;
              console.log("person entered. Total : ", count);
              socket.emit("counter", count); //pass count to server each time
              return;
            } return; //bring back returns if stuck in, need as infinite loop otherwise
            // }
          } //console.log("outside while");//end of while

        })(); //o riginally while was below
      }
      else {
        return;
      }
    }
  });
};

//function to measure US2 distance
const watchUS2 = () => {
  let startTick2;

  echoUS2.on('alert', (level2, tick2) => {

    if (level2 == 1) {
      startTick2 = tick2;
    } else {
      const endTick2 = tick2;
      const diff2 = (endTick2 >> 0) - (startTick2 >> 0); // Unsigned 32 bit arithmetic
      dist2 = diff2 / 2 / MICROSECONDS_PER_CM;
      console.log("Exit: ", dist2);
      //checks if US2 passed first
      if (dist >= distmin && dist2 <= distmin) {
        console.log("2nd US passed ", dist2);
        //passing in delay
        (async () => {

          await delay(100);
          console.log("delayed");

          // Executed 100 milliseconds later
          // watchUS2();
          while (dist2 <= 17) { //originally distance min
            console.log("inside while2 US1:", dist, "US2", dist2);
            //check second passed just after first
            if (dist2 <= distmin && dist <= distmin) {
              // if (dist <= distmin) {
              count--;
              console.log("person left. Total : ", count);
              socket.emit("counter", count); //pass count to server each time
              return;
            } return; //bring back returns if stuck in, need as infinite loop otherwise
            // }
          } //console.log("outside while");//end of while

        })(); //o riginally while was below
      }
      else {
        return;
      }
    }
  });
};

//connect to server
socket.on("connect", function () {
  console.log("Connected to server");

  watchUS(echoUS1, triggerUS1); //start function to measure distance of US1
  watchUS2(echoUS2, triggerUS2); //start function to measure distance of US2

  // Trigger a 10ms pulse once per second for each US
  setInterval(() => {
    triggerUS1.trigger(10, 1); // Set trigger high for 10 microseconds
    triggerUS2.trigger(10, 1); // Set trigger high for 10 microseconds
  }, 1000); // 1 second interval

});

//this is used for qol when program ends, turn off US modules
process.on("SIGINT", function () {
  triggerUS1.unexport();//free resources
  echoUS1.unexport();
  triggerUS2.unexport();//free resources
  echoUS2.unexport();
  triggerUS1.digitalWrite(0, function () {
    Gpio.destroy(function () {
      process.exit();
    });
  });
  triggerUS2.digitalWrite(0, function () {
    Gpio.destroy(function () {
      process.exit();
    });
  });
});
