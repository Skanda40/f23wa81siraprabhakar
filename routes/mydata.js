var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Skanda Shreekar Sira Prabhakar' });
});

module.exports = router;
