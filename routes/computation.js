var express = require('express');
var router = express.Router();

/* Compuation */
router.get('/', function(req, res, next) {
    let randomValue = Math.round(Math.random()*10);
    let absValue = Math.round(Math.abs(randomValue));
    let acosValue = Math.acos(randomValue);
    let sinValue = Math.round(Math.sin(randomValue));
    let sinhValue = Math.round(Math.sinh(randomValue));
  res.send(`Math.abs()  applied to ${randomValue} is ${absValue} <br> 
  Math.acos()  applied to ${randomValue} is ${acosValue} <br>
  Math.sin()  applied to ${randomValue} is ${sinValue} <br>
  Math.sinh()  applied to ${randomValue} is ${sinhValue} <br>
  
  `);
});

module.exports = router;