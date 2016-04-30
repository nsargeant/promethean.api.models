'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['name', 'email', 'description'];

function Organization() {
  Model.call(this);
  
  this.id = null;
  this.name = '';
  this.url = '';
  this.description = '';
  this.image = '';
  this.email = '';
}

Organization.prototype = Object.create(Model.prototype, {
  'constructor': Organization
});

Organization.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
  this.name = target.name || target[schema.cols[1]];
  this.url = target.url || target[schema.cols[1]];
  this.description = target.description || target[schema.cols[1]];
  this.image = target.image || target[schema.cols[1]];
  this.email = target.email || target[schema.cols[1]];
};

Organization.prototype.toDBArray = function() {
  return [
    this.id,
    this.name,
    this.url,
    this.description,
    this.image,
    this.email
  ];
};

Organization.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Organization;