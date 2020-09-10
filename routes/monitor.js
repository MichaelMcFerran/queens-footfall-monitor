var express = require('express');
var router = express.Router();

/* GET monitor page. */
router.get('/monitor', function(req, res) {
    // res.render('monitor', { title: 'Express' });
    //added in own layout page to find separate css 
    res.render('monitor', { layout: 'monitorlayout.jade', title: 'Express' });
  });




module.exports = router;

