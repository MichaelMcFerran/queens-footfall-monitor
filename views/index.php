<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>HomePage</title>

  <!-- CSS -->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

  <!-- Custom styles -->
  <link href="/stylesheets/style.css" rel="stylesheet">

 <!-- Queens logo fix -->
    <!-- ****** faviconit.com favicons ****** -->
  <link rel="shortcut icon" href="../img/favicon.ico">
  <link rel="icon" sizes="16x16 32x32 64x64" href="../img/faviconit/favicon.ico">
  <link rel="icon" type="image/png" sizes="196x196" href="../img/faviconit/favicon-192.png">
  <link rel="icon" type="image/png" sizes="160x160" href="../img/faviconit/favicon-160.png">
  <link rel="icon" type="image/png" sizes="96x96" href="../img/faviconit/favicon-96.png">
  <link rel="icon" type="image/png" sizes="64x64" href="../img/faviconit/favicon-64.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../img/faviconit/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../img/faviconit/favicon-16.png">
  <link rel="apple-touch-icon" href="../img/faviconit/favicon-57.png">
  <link rel="apple-touch-icon" sizes="114x114" href="../img/faviconit/favicon-114.png">
  <link rel="apple-touch-icon" sizes="72x72" href="../img/faviconit/favicon-72.png">
  <link rel="apple-touch-icon" sizes="144x144" href="../img/faviconit/favicon-144.png">
  <link rel="apple-touch-icon" sizes="60x60" href="../img/faviconit/favicon-60.png">
  <link rel="apple-touch-icon" sizes="120x120" href="../img/faviconit/favicon-120.png">
  <link rel="apple-touch-icon" sizes="76x76" href="../img/faviconit/favicon-76.png">
  <link rel="apple-touch-icon" sizes="152x152" href="../img/faviconit/favicon-152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../img/faviconit/favicon-180.png">
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <meta name="msapplication-TileImage" content="../img/faviconit/favicon-144.png">
  <meta name="msapplication-config" content="../img/faviconit/browserconfig.xml">
  <!-- ****** faviconit.com favicons ****** -->

</head>

  <body>

    <div class="site-wrapper">
      <div class="site-wrapper-inner">
        <div class="cover-container">
          <div class="inner cover">
            <h1 class="cover-heading">Person Count</h1>
            <div class="alert alert-success" role="alert">
                The number of people is : <p id ="myCount"> </p>
              </div>
          <!-- <h1 class="cover-heading">PI Button state</h1>
              <div class="onoffswitch" style="margin:0px auto;">
                <div class="switch demo3">
                  <input type="checkbox" id="mybuttonGPIO">
                  <label><i></i></label>
                </div>
              </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

    <!-- script src="https://cdn.socket.io/socket.io-1.0.4.js"></script> -->
    <script src="socket.io/socket.io.js"></script>

    <script type="text/javascript">

    //connect to GPIO of PI
    var socket = io.connect('/');
	//jquery takes changed state of toggle on page and passes state to server
    // $("#myonoffswitch").change(function(){
    //   socket.emit("stateChanged", this.checked);
    // });
    
    socket.on("updatecount", function (count) {
    	console.log("The count is: " + count); //checks count is received
	//js below changes checkbox on html page dynamically as state is send from PI-server-HTML
    // var personCount = document.getElementById("myCount");
    // personCount.firstChild.nodeValue = count;
    document.getElementById("myCount").innerHTML = count;
    
    });
	
    </script>

  </body>
</html>

 <!-- checking excess code doesnt cause issues -->
    <!-- //connect to GPIO of PI
    var socket = io.connect('/');
	//jquery takes changed state of toggle on page and passes state to server
    // $("#myonoffswitch").change(function(){
    //   socket.emit("stateChanged", this.checked);
    // });
    
    socket.on("updatecount", function (count) {
    	console.log("The count is: " + count); //checks count is received
	//js below changes checkbox on html page dynamically as state is send from PI-server-HTML
	//document.getElementById("mybuttonGPIO").checked = button;
    });
	
    </script>

  </body>
</html> -->
