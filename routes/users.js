var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  res.send('GET ID');
});
router.get('/', function (req, res, next) {
  res.send('GET');
});

module.exports = router;
