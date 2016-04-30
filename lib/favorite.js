'use strict';

var Model = require('./abstract-model'),
  requiredFields = ['employerId', 'learnerId'],
  verification = {
    employerId: function (input) {
      return input.length > 0;
    },
    learnerId: function (input) {
      return input.length > 0;
    }
  };

function Favorite() {
  Model.call(this);
  
  this.id = null;
  this.employerId = '';
  this.learnerId = '';
}

Favorite.prototype = Object.create(Model.prototype, {
  'constructor': Favorite
});

Favorite.prototype.assign = function(target) {
  var schema = this.getSchema();
  
  this.id = target.id || target[schema.primaryKey];
  this.employerId = target.employerId || target[schema.cols[1]];
  this.learnerId = target.learnerId || target[schema.cols[2]];
};

Favorite.prototype.toDBArray = function() {
  return [
    this.id,
    this.employerId,
    this.learnerId
  ];
};

Favorite.prototype.requiredFields = function () {
  return requiredFields;
};

module.exports = Favorite;