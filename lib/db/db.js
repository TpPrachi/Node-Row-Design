'use strict'
/**
* @name db/db.js
* @author Prachi Thakkar <prachi281194@gmail.com>
*
* @version 0.0.0
*/
var logger = require('../logger')
var _ = require('lodash');
var skin = require('mongoskin');

var connectionString = 'mongodb://localhost:27017/' + (process.env.DB_NAME || 'master');

console.log('Conn String :: ' + connectionString);
var db = skin.db(connectionString, {native_parser:true}); // Need to discuss use of native_parser in mongo?

// Used to create new objectID in from route
db.ObjectID = skin.ObjectID;  // Helpfull when we need to convert or create ObjectId for query direct to mongo

var _configure = function() {
  logger.log('bind collections to mongoskin');
  logger.log(arguments);

  try {
    _.forEach(arguments, function configureEntities(entity) {
      logger.log('process ' + entity.collection + ' for binding with db');
      db.bind(entity.collection); // help in creating collection in mongodb and allow operation on it.

      // further code need to implement as per requirement for audit log and indexing
    });

    logger.log('binding for all entity is completed successfully');
  } catch (err) {
    logger.log('Error while binding entity to the db');
    logger.log(err);
  }
  return db;
};

module.exports = {
  configure: _configure
};
