var _  = require('lodash'),
	Account = require('./account');


function Teacher(){
  Account.call(this);
}

Teacher.prototype = _.create(Account.prototype, {
  'constructor': Teacher
});

module.exports = Teacher;