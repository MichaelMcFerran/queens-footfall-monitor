var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET connection to dB for PHP, unused*/
router.get('/conn.php', function(req, res) {
  res.render('conn', { title: 'Express' });
});

module.exports = router;

