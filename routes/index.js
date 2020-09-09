var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET monitor page. */
router.get('/monitor', function(req, res) {
  res.render('monitor.php', { title: 'Express' });
});


module.exports = router;
