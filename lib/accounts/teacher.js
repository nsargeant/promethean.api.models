'use strict';

var Account = require('./account');

function Teacher(){
  Account.call(this);
}

Teacher.prototype = Object.create(Account.prototype, {
  'constructor': Teacher
});

Teacher.prototype.assign = function(target) {
  var schema = this.getSchema();
  Account.prototype.assign.call(this, arguments);

  this.id = target.id || target[schema.primaryKey] || null;
};

Teacher.prototype.toDBArray = function() {
  return [
    this.id
  ];
};

module.exports = Teacher;