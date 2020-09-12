var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// //doesnt work testing running php in node.js
// var execPHP = require('./execphp.js')();
// //maybe change to separate folder for just php files
// execPHP.phpFolder = 'C:\\Users\\Michael Mc Ferran\\Documents\\MSc SoftwareDev\\MastersProject\\queens-footfall-monitor\\views\\';

// app.use('*.php',function(request,response,next) {
// 	execPHP.parseFile(request.originalUrl,function(phpResult) {
// 		response.write(phpResult);
// 		response.end();
// 	});
// });

// app.listen(3000, function () {
// 	console.log('Node server listening on port 3000!');
// });

// DOESNT WORK hopefully should all conn.php to connect  https://www.npmjs.com/package/php
//var php = require('php');

//connection to db test
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "eu-cdbr-west-03.cleardb.net",
//   user: "b357da7f3209b9",
//   password: "f1318198",
//   database : 'heroku_58f73cf4b46766d'
// });

// con.connect(function(err) {
//     if (err) throw err;
//     var log = "SELECT * FROM FMusers"
//     con.query(log, function (err, result, fields) {
//       if (err) throw err;
//       var resultLo = result;
//       console.log(resultLo);
//     });
//   });

//unused atm
  // //check connection
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

//pointless, works with test.js
// module.exports  = {
//     select: function (callback) {
//         var log = "SELECT * FROM FMusers";
//         con.query(log, function (err, result, fields) {
//         if (err) throw err;
//         var resultLo = result;
//         console.log(resultLo);
//         });
//     }
// }





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setup php templating engine https://www.npmjs.com/package/php doesn't work
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'php');
// app.engine('php', php.__express);

app.use(favicon());
//fix to get favicon working https://stackoverflow.com/questions/15463199/how-to-set-custom-favicon-in-express
app.use("/public", express.static('public'));  //public is web root
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
