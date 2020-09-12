var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET monitor page. */
router.get('/monitor', function(req, res) {
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
