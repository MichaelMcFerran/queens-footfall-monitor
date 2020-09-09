var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET monitor page. */
router.get('/monitor.php', function(req, res) {
  res.render('monitor', { title: 'Express' });
});


module.exports = router;
