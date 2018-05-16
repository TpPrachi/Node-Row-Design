var express = require('express');
var router = express.Router();
var test = require('../lib/routeBuilder');

/* GET users listing. */

router.post('/', function(req, res, next) {
  test.post('Users', req.body).then(function(success) {
      res.status(201).json(success);
  }, function(err) {
    res.status(400).json(err);
  });
});

router.get('/user', function(req, res, next) {
  res.send('Welcome to Express');

  test.getAll('Users', {}).then(function(success) {
    res.status(200).json(success);
  }, function(err) {
    res.status(400).json(err);
  });

  console.log('Hello World');
});


module.exports = router;
