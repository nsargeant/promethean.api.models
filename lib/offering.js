'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['badgeId', 'organizationId'];

function Offering() {
  Model.call(this);
  
  this.id = null;
  this.badgeId = '';
  this.organizationId = '';
}

Offering.prototype = Object.create(Model.prototype, {
  'constructor': Offering
});

Offering.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
  this.badgeId = target.badgeId || target[schema.cols[1]];
  this.organizationId = target.organizationId || target[schema.cols[2]];
};

Offering.prototype.toDBArray = function() {
  return [
    this.id,
    this.badgeId,
    this.organizationId
  ];
};

Offering.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Offering;