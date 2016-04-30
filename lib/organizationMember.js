'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['accountId', 'organizationId'];

function OrganizationMember() {
  Model.call(this);
  
  this.id = null;
  this.accountId = '';
  this.organizationId = '';
}

OrganizationMember.prototype = Object.create(Model.prototype, {
  'constructor': OrganizationMember
});

OrganizationMember.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
  this.accountId = target.accountId || target[schema.cols[1]];
  this.organizationId = target.organizationId || target[schema.cols[2]];
};

OrganizationMember.prototype.toDBArray = function() {
  return [
    this.id,
    this.accountId,
    this.organizationId
  ];
};

OrganizationMember.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = OrganizationMember;