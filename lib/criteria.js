'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['badgeId', 'data'];

function Criteria() {
  Model.call(this);
  
	this.id = null;
  this.badgeId = null;
	this.data = [];
}

Criteria.prototype = Object.create(Model.prototype, {
  'constructor': Criteria
});

Criteria.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
	this.badgeId = target.badgeId || target[schema.cols[1]];
	this.data = target.data || target[schema.cols[2]];
};

Criteria.prototype.toDBArray = function() {
	return [
		this.id,
		this.badgeId,
		JSON.stringify(this.data)
	];
};

Criteria.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Criteria;