'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['issuedId', 'description', 'title', 'type'];

function Evidence() {
  Model.call(this);
  
  this.id = null;
  this.issuedId = '';
  this.description = '';
  this.filename = '';
  this.fileUrl = '';
  this.title = '';
  this.type = '';
  this.url = '';
}

Evidence.prototype = Object.create(Model.prototype, {
  'constructor': Evidence
});

Evidence.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
  this.issuedId = target.issuedId || target[schema.cols[1]];
  this.description = target.description || target[schema.cols[2]];
  this.filename = target.filename || target[schema.cols[3]];
  this.fileUrl = target.fileUrl || target[schema.cols[4]];
  this.title = target.title || target[schema.cols[5]];
  this.type = target.type || target[schema.cols[6]];
  this.url = target.url || target[schema.cols[7]];
};

Evidence.prototype.toDBArray = function() {
  return [
    this.id,
    this.issuedId,
    this.description,
    this.filename,
    this.fileUrl,
    this.title,
    this.type,
    this.url
  ];
};

Evidence.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Evidence;