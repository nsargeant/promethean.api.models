var assert = require('assert'),
  Model = require('../lib/abstract-model');

describe('Model', function () {
  it('should have prototype with expected functions', function () {
    assert(Model.prototype.toDBArray);
    assert(Model.prototype.createNewId);
    assert(Model.prototype.verify);
    assert(Model.prototype.getSchema);
  });
});