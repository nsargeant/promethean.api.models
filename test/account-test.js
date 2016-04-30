var assert = require('assert'),
  Model = require('../lib/abstract-model'),
  Account = require('../lib/accounts/account');

describe('Account', function () {
  it('should create new account', function () {
    var account = new Account();
    assert(account);
  });
  it('should be instance of Account and Model', function () {
    var account = new Account();
    assert(account instanceof Account);
    assert(account instanceof Model);
  });
  it('should have expected properties', function () {
    var account = new Account();
    assert.equal(account.id, null);
    assert.equal(account.firstName, '');
    assert.equal(account.lastName, '');
    assert.equal(account.email, '');
    assert.equal(account.zipcode, '');
    assert.equal(account.profilePicture, '');
    assert.equal(account.profileVideo, '');
  });
});