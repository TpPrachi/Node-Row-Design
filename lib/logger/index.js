'use strict';
/**
* @name logger/index.js
* @author Prachi Thakkar <prachi281194@gmail.com>
*
* @version 0.0.0
*/

/*
  For implmenting common logging system for whole projects
  @param string - message tobe display on logging system (either on console or on file)

  @return null
*/
var _log = function(msg) {
  console.log(msg);
};

module.exports = {
  log: _log
};
