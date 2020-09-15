var express = require('express');
var router = express.Router();
//adding mysql here so can be used in front end pages
//var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET monitor page. */
router.get('/monitor', function(req, res, mysql) {
  // res.render('monitor', { title: 'Express' });
  //added in own layout page to find separate css 
  res.render('monitor', { layout: 'monitorlayout.jade', title: 'Express' });
});

/* GET connection to dB */
router.get('/conn.php', function(req, res) { //should it be /conn.php
  res.render('conn', { title: 'Express' });
});

/* GET test.html */
router.get('/test', function(req, res) { //should it be /conn.php
  res.render('test', { title: 'Express' });
});



module.exports = router;
//module.exports = mysql;
