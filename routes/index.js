'use strict'
/**
* @name routes/index.js
* @author Prachi Thakkar <prachi281194@gmail.com>
*
* @version 0.0.0
*/

var _configure = function(app) {
  var sample = require('./sample');

  app.use('/sample', sample);
};

module.exports = {
  configure : _configure
};
