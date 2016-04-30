var assert = require('assert'),
  Model = require('../lib/abstract-model'),
  Enrollment = require('../lib/enrollment');

describe('Enrollment', function () {
  it('should create new enrollment', function () {
    var enrollment = new Enrollment();
    assert(enrollment);
  });
  it('should be instance of Enrollment and Model', function () {
    var enrollment = new Enrollment();
    assert(enrollment instanceof Enrollment);
    assert(enrollment instanceof Model);
  });
  it('should have expected properties', function () {
    var enrollment = new Enrollment();
    assert.equal(enrollment.id, null);
    assert.equal(enrollment.acceptedOn, null);
    assert.equal(enrollment.appliedOn, null);
    assert.equal(enrollment.deniedOn, null);
    assert.equal(enrollment.learnerId, '');
    assert.equal(enrollment.organizationId, '');
  });
});