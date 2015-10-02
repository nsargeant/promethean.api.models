// -- BadgeClass
// CREATE TABLE IF NOT EXISTS badges
// (
//     id INTEGER NOT NULL,
//     name VARCHAR(255),
//     description VARCHAR(255),
//     image VARCHAR(255),
//     criteria_id INTEGER,
//     issuer_id INTEGER,
//     PRIMARY KEY(id)
// );


function Badge(id, name, description, image, criteriaId, issuerId){
	this.id = id;
	this.name = name;
	this.description = description;
	this.image = image;
	this.criteriaId = criteriaId;
	this.issuerId = issuerId;
}

module.exports = Badge;