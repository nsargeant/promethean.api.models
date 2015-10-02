// -- BadgeAssertion
// CREATE TABLE IF NOT EXISTS badges_issued
// (
// 		-- uid
//     id INTEGER NOT NULL,
//     -- recipient
//     learner_id INTEGER,
//     -- badge
//     badge_id INTEGER,
//     -- verify {type:'hosted', verify:'URL'}
//     verify VARCHAR(255),
//     -- issuedOn
//     issued_on TIMESTAMP,
//     -- image
//     -- TODO not implemented: verify VARCHAR(255),
    
//     -- evidence URL
//     evidence VARCHAR(255),
    
//     -- expires 
//     -- TODO not implemented: expires TIMESTAMP,

//     PRIMARY KEY(id)
// );

function BadgeIssued(id, learnerId, badgeId, verify, issuedOn, evidence){
  this.id = id;
  this.learnerId = learnerId;
  this.badgeId = badgeId;
  this.verify = verify;
  this.issuedOn = issuedOn,
  this.evidence = evidence;
}

module.exports = BadgeIssued