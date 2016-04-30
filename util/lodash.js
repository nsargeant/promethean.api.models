'use strict';

// http://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
function isFunction(arg) {
  var getType = {};
  return arg && getType.toString.call(arg) === '[object Function]';
}

function isArray(arg) {
  return Array.isArray(arg);
}

function isString(arg) {
  return (typeof arg === 'string' || arg instanceof String);
}

module.exports = {
  isFunction: isFunction,
  isArray: isArray,
  isString
}