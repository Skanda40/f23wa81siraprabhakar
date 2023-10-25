var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  more=more+1;
  sum=sum+more;
  res.send('Sum is:'+sum);
});

router.get('computation', function(req, res, next) {
  
  res.send(`Math.log(${x}) applied to [20] is `+Math.log(20));
});

module.exports = router;

var sum=0
var more=0 
