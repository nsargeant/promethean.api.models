'use strict';

var _ = require('../util/lodash'),
  uuid = require('node-uuid');

function Model() {
  this.id = null;
}

Model.prototype.toDBArray = function() {
  return [this.id];
};

Model.prototype.createNewId = function() {
  return this.id = uuid.v4();
};
/**
 * Verify that an object is valid
 */
Model.prototype.verify = function() {
  var self = this;
  var callback = null;
  if (_.isFunction(arguments[arguments.length - 1])) {
    callback = arguments[arguments.length - 1];
  } else {
    throw new Error('Last argument must be a callback function');
  }

  var invalid = [];
  if (_.isFunction(this.requiredFields)) {
    this.requiredFields = this.requiredFields();
  } else {
    this.requiredFields = this.requiredFields || [];
  }
  
  this.verification = this.verification || {};
  
  this.requiredFields.forEach(function (field) {
    var isValid = self.verification[field] || function () {return true};
    if (!self[field] || !isValid(self[field])) {
      invalid.push(field);
    }
  });

  var ignores = null;
  if (_.isArray(arguments[0])) {
    ignores = arguments[0];
    for (var i = 0; i < ignores.length; i++) {
      var j = invalid.indexOf(ignores[i]);
      if (j > -1) {
        invalid.splice(i, 1);
      }
    }
  } else if (_.isString(arguments[0])) {
    ignores = arguments[0];
    var i = invalid.indexOf(ignores);
    if (i > -1) {
      invalid.splice(i, 1);
    }
  }

  var err = null;

  if (invalid.length) {
    err = new Error('Missing or invalid fields: ' + JSON.stringify(invalid));
    err.name = 'VerificationError';
  }

  callback(err);
};

Model.prototype.getSchema = function (ignore) {
  if(ignore) {
    return {cols:[]};
  }
  throw new Error('getSchema function not initialized');
};

module.exports = Model;