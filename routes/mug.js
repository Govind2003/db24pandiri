var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mug', { title: 'Search Results mugs' });
});

module.exports = router;
