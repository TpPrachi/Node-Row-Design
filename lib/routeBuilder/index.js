'use strict'
/**
* @name routeBuilder/index.js
* @author Prachi Thakkar <prachi281194@gmail.com>
*
* @version 0.0.0
*/
var q = require('q');
var db = require('../db');

var _getAll = function(resource, options) {
  var deffered = q.defer();
  console.log('-----------tets------');
  db[resource].find({}).toArray(function(err, data) {
    if(err) {
      deffered.reject(err);
    }
    deffered.resolve(data);
  });
  return deffered.promise;
};

var _getOne = function(resource, options) {
  var deffered = q.defer();
  console.log('-------------here 2-------------------');
  console.log(resource);
  console.log(options);
  db[resource].find({_id : resource._id}).toArray(function(err, data) {
    if(err) {
      deffered.reject(err);
    }
    deffered.resolve(data);
  });
  return deffered.promise;
};

var _post = function(resource, values) {
  var deffered = q.defer();
  db[resource].insert(values, function callback(err, data) {
    if(err) {
      deffered.reject(err);
    }
    deffered.resolve(data);
  })
  return deffered.promise;
};

var _patch = function(resource, options, values) {
  var deffered = q.defer();
  db[resource].update({ _id: values._id}, { $set: {  } }, function callback(err, data) {
    if(err) {
      deffered.reject(err);
    }
    deffered.resolve(data);
  })
  return deffered.promise;
};

var _delete = function(resource, options) {
  var deffered = q.defer();
  db[resource].remove({ _id : resource._id }, function(err, date) {
    if(err) {
      deffered.reject(err);
    }
    deffered.resolve(data);
  });
  return deffered.promise;
};

module.exports = {
  getAll : _getAll,
  getOne : _getOne,
  post : _post,
  patch : _patch,
  delete : _delete
};
