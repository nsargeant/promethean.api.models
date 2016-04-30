'use strict';

var Model = require('../abstract-model'),
  requiredFields = ['firstName', 'lastName', 'email', 'zipcode'];

function Account() {
  Model.call(this);
  
  this.id = null;
  this.firstName = '';
  this.lastName = '';
  this.email = '';
  this.zipcode = '';
  this.profilePicture = '';
  this.profileVideo = '';
}

Account.prototype = Object.create(Model.prototype, {
  'constructor': Account
});

Account.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey] || null;
  this.firstName = target.firstName || target[schema.cols[1]] || '';
  this.lastName = target.lastName || target[schema.cols[2]] || '';
  if(target.email) {
    this.email = target.email || target[schema.cols[3]] || '';
    this.email = this.email.toLowerCase();
  }
  this.zipcode = target.zipcode || target[schema.cols[4]] || '';
  this.profilePicture = target.profilePicture || target[schema.cols[5]] || '';
  this.profileVideo = target.profileVideo || target[schema.cols[6]] || '';
  
  // convenience setters
  this.password = target.password;
  this.accountType = target.accountType || target.account_type;
};

Account.prototype.toDBArray = function() {
  return [
    this.id,
    this.firstName,
    this.lastName,
    this.email,
    this.zipcode,
    this.profilePicture,
    this.profileVideo
  ];
};

Account.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Account;