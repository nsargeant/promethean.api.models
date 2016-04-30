var assert = require('assert'),
  Model = require('../lib/abstract-model'),
  BadgeIssued = require('../lib/badges/badgeIssued');

describe('BadgeIssued', function () {
  it('should create new badgeIssued', function () {
    var issued = new BadgeIssued();
    assert(issued);
  });
  it('should be instance of BadgeIssued and Model', function () {
    var issued = new BadgeIssued();
    assert(issued instanceof BadgeIssued);
    assert(issued instanceof Model);
  });
  it('should have expected properties', function () {
    var issued = new BadgeIssued();
    assert.equal(issued.id, null);
    assert.equal(issued.badgeId, '');
    assert.equal(issued.learnerId, '');
  });
});