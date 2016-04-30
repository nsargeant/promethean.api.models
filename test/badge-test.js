var assert = require('assert'),
  Model = require('../lib/abstract-model'),
  Badge = require('../lib/badges/badge');

describe('Badge', function () {
  it('should create new badge', function () {
    var badge = new Badge();
    assert(badge);
  });
  it('should be instance of Badge and Model', function () {
    var badge = new Badge();
    assert(badge instanceof Badge);
    assert(badge instanceof Model);
  });
  it('should have expected properties', function () {
    var badge = new Badge();
    assert.equal(badge.id, null);
    assert.equal(badge.name, '');
    assert.equal(badge.description, '');
    assert.equal(badge.image, '');
  });
});