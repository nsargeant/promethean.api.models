var assert = require('assert'),
  Model = require('../lib/abstract-model'),
  Evidence = require('../lib/evidence');

describe('Evidence', function () {
  it('should create new evidence', function () {
    var evidence = new Evidence();
    assert(evidence);
  });
  it('should be instance of Evidence and Model', function () {
    var evidence = new Evidence();
    assert(evidence instanceof Evidence);
    assert(evidence instanceof Model);
  });
  it('should have expected properties', function () {
    var evidence = new Evidence();
    assert.equal(evidence.id, null);
    assert.equal(evidence.issuedId, '');
    assert.equal(evidence.description, '');
    assert.equal(evidence.filename, '');
    assert.equal(evidence.fileUrl, '');
    assert.equal(evidence.title, '');
    assert.equal(evidence.type, '');
    assert.equal(evidence.url, '');
  });
});