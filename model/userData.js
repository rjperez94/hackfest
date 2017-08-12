

//get json's items



// var followers = user.followers(callback); //return array of users
// userToFollowers.add(user, followers);
// var following = user.following(callback); //return array of users



//put User in separate file

var User = function(listjson) {
	this.login = listjson.login; // = get name from json
	this.id = listjson.id; //ONLY for unique id?
}

User.prototype.setName = function() {
	if(listjson.name != null)
		this.name = listjson.name;
}

User.prototype.setCompany = function() {
	if(listjson.company != null)
		this.company = listjson.company;
}

User.prototype.setBio = function() {
	if(listjson.bio != null)
		this.bio = listjson.bio;
}

User.prototype.set = function(userjson) {
	this.public_repos = userjson.public_repos;
	this.public_gists = userjson.public_gists;
	this.followers = userjson.followers;
	this.following = userjson.following;
}
//========================================================

// users = responsejson.items.map(function(user) {
// 	return new User(user);
// });


//var matches = users.filter((user) => (user.name == "searchNameParam")
//will be array...users.find() is first result only



module.exports = User;