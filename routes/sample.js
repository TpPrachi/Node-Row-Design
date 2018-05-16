(function(){

  var express = require('express');
  var router = express.Router();
  var test = require('../lib/routeBuilder');

  //Creating simple APIs for CRUD operations

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    test.getAll('sample', {}).then(function(success) {
      res.status(200).json(success);
    }, function(err) {
      res.status(400).json(err);
    });
  });

  router.get('/:id', function(req, res, next) {    
    console.log(req._id);
    test.getOne('sample', req._id ).then(function(success) {
      res.status(200).json(success);
    }, function(err) {
      res.status(400).json(err);
    });
  });

  router.post('/', function(req, res, next) {
    test.post('sample', req.body).then(function(success) {
        res.status(201).json(success);
    }, function(err) {
      res.status(400).json(err);
    });
  });

  router.patch('/:id', function(req, res, next) {
    test.patch('sample', req._id ).then(function(success) {
        res.status(200).json(success);
    }, function(err) {
      res.status(400).json(err);
    });
  });

  router.delete('/:id', function(req, res, next) {
    test.patch('sample', req._id ).then(function(success) {
        res.status(200).json(success);
    }, function(err) {
      res.status(400).json(err);
    });
  });

  module.exports = router;

})();
