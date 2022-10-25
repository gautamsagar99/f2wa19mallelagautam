var express = require('express');
var router = express.Router();

/* Compuation */
router.get('/', function(req, res, next) {
    let randomValue = Math.round(Math.random()*10);
    let sqrtValue = Math.round(Math.sqrt(randomValue));
  res.send(`Math.sqrt()  applied to ${randomValue} is ${sqrtValue}`);
});

module.exports = router;