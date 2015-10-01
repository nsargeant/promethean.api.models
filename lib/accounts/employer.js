var _  = require('lodash'),
var Account = require('./account');


function Employer(){
  Account.call(this);
}

Employer.prototype = _.create(Account.prototype, {
  'constructor': Employer
});

module.exports = Employer;