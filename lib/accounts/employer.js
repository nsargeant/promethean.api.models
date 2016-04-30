'use strict';

var Account = require('./account');

function Employer(){
  Account.call(this);
}

Employer.prototype = Object.create(Account.prototype, {
  'constructor': Employer
});

Employer.prototype.assign = function(target) {
  var schema = this.getSchema();
  Account.prototype.assign.call(this, arguments);
  
  this.id = target.id || target[schema.primaryKey] || null;
};

Employer.prototype.toDBArray = function() {
  return [
    this.id
  ];
};

module.exports = Employer;