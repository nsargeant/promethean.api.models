// CREATE TABLE IF NOT EXISTS enrollments
// (
//     id INTEGER NOT NULL,
//     badge_id INTEGER,
//     teacher_id INTEGER,
//     learner_id INTEGER,
//     PRIMARY KEY(id)
// );

function Enrollement(id, badgeID, teacherID, learnerID){
  this.id = undefined;
  this.badgeID = undefined;
  this.teacherID = undefined;
  this.learnerID = undefined;


}

module.exports = Enrollment;