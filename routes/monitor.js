var express = require('express');
var router = express.Router();

/* GET monitor page. */
router.get('/monitor', function(req, res) {
    res.render('monitor', { title: 'Express' });
  });

module.exports = router;