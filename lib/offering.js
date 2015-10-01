// CREATE TABLE IF NOT EXISTS offerings
// (
//     id INTEGER NOT NULL,
//     badge_id INTEGER,
//     teacher_id INTEGER,
//     PRIMARY KEY(id)
// );

function Offering(id, badgeID, teacherID){
  this.id = id;
  this.badgeID = badgeID;
  this.teacherID = teacherID;

}

module.exports = Offering