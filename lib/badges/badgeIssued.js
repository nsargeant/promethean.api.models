'use strict';

var Model = require('../abstract-model'),
  requiredFields = ['badgeId', 'learnerId'];

function BadgeIssued() {
  Model.call(this);
  
  this.id = null;
  this.badgeId = '';
  this.learnerId = '';
}

BadgeIssued.prototype = Object.create(Model.prototype, {
  'constructor': BadgeIssued
});

BadgeIssued.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
  this.badgeId = target.badgeId || target[schema.cols[1]];
  this.learnerId = target.learnerId || target[schema.cols[2]];
};

BadgeIssued.prototype.toDBArray = function() {
  return [
    this.id,
    this.badgeId,
    this.learnerId,
  ];
};

BadgeIssued.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = BadgeIssued;