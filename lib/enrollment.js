'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['learnerId', 'organizationId'];

function Enrollment() {
  Model.call(this);
  
  this.id = null;
  this.acceptedOn = null;
  this.appliedOn = null;
  this.deniedOn = null;
  this.learnerId = '';
  this.organizationId = '';
}

Enrollment.prototype = Object.create(Model.prototype, {
  'constructor': Enrollment
});

Enrollment.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey] || null;
  this.acceptedOn = target.acceptedOn || target[schema.cols[1]];
  this.appliedOn = target.appliedOn || target[schema.cols[2]];
  this.deniedOn = target.deniedOn || target[schema.cols[3]];
  this.learnerId = target.learnerId || target[schema.cols[4]];
  this.organizationId = target.organizationId || target[schema.cols[5]];
};

Enrollment.prototype.toDBArray = function() {
  return [
    this.id,
    this.acceptedOn,
    this.appliedOn,
    this.deniedOn,
    this.learnerId,
    this.organizationId
  ];
};

Enrollment.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Enrollment;