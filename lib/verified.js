'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['issuedId', 'organizationId'];

function Offering() {
  Model.call(this);
  
  this.id = null;
  this.issuedId = '';
  this.organizationId = '';
  this.acceptedOn = null;
  this.appliedOn = null;
  this.deniedOn = null;
}

Offering.prototype = Object.create(Model.prototype, {
  'constructor': Offering
});

Offering.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
  this.issuedId = target.issuedId || target[schema.cols[1]];
  this.organizationId = target.organizationId || target[schema.cols[2]];
  this.acceptedOn = target.acceptedOn || target[schema.cols[3]];
  this.appliedOn = target.appliedOn || target[schema.cols[4]];
  this.deniedOn = target.deniedOn || target[schema.cols[5]];
};

Offering.prototype.toDBArray = function() {
  return [
    this.id,
    this.issuedId,
    this.organizationId,
    this.acceptedOn,
    this.appliedOn,
    this.deniedOn
  ];
};

Offering.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Offering;