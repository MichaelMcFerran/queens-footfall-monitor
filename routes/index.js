var express = require('express');
var router = express.Router();
//adding mysql here so can be used in front end pages
//var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET connection to dB */
router.get('/conn.php', function(req, res) { //should it be /conn.php
  res.render('conn', { title: 'Express' });
});



module.exports = router;
//module.exports = mysql;
