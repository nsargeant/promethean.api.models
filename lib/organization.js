// CREATE TABLE IF NOT EXISTS organizations
// (
//     id INTEGER NOT NULL,
//     name VARCHAR(255),
//     url VARCHAR(255),
//     description VARCHAR(255),
//     image VARCHAR(255),
//     email VARCHAR(255),
//     PRIMARY KEY(id)
// );


function Organization(id, name, url, description, image, email){
	this.id = id;
	this.name = name;
	this.url = url;
	this.descrition = description;
	this.image = image;
	this.email = email;

}

module.exports= Organization;