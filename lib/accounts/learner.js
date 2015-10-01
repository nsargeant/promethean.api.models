var _  = require('lodash'),
var Account = require('./account');


function Learner(){
  Account.call(this);
  
  // url
  this.resume = '';
}

Learner.prototype = _.create(Account.prototype, {
  'constructor': Learner
});

module.exports = Learner;