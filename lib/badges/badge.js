'use strict';

var Model = require('../abstract-model'),
  requiredFields = ['name', 'description', 'image'];

function Badge() {
	Model.call(this);

	this.id = null;
	this.name = '';
	this.description = '';
	this.image = '';
}

Badge.prototype = Object.create(Model.prototype, {
  'constructor': Badge
});

Badge.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey] || null;
  this.name = target.name || target[schema.cols[1]] || '';
  this.description = target.description || target[schema.cols[2]] || '';
  this.image = target.image || target[schema.cols[3]] || '';
};

Badge.prototype.toDBArray = function() {
  return [
		this.id,
		this.name,
		this.description,
		this.image
	];
};

Badge.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Badge;