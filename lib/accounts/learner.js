'use strict';

var Account = require('./account');

function Learner(){
  Account.call(this);
}

Learner.prototype = Object.create(Account.prototype, {
  'constructor': Learner
});

Learner.prototype.assign = function(target) {
  var schema = this.getSchema();
  Account.prototype.assign.call(this, arguments);
  
  this.id = target.id || target[schema.primaryKey] || null;
  this.resume = target.resume || target[schema.cols[1]] || null;
};

Learner.prototype.toDBArray = function() {
  return [
    this.id,
    this.resume
  ];
};

module.exports = Learner;