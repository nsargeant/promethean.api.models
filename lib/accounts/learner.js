var _  = require('lodash'),
	Account = require('./account');


function Learner(){
  Account.call(this);
  
  // url
  this.resume = '';
}

Learner.prototype = _.create(Account.prototype, {
  'constructor': Learner
});

module.exports = Learner;