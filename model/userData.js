

//get json's items



// var followers = user.followers(callback); //return array of users
// userToFollowers.add(user, followers);
// var following = user.following(callback); //return array of users


/* list of users in Wellington -- use login + id to get to each user's profile */

var User = function(listjson) {
	this.login = listjson.login; // = get name from json
	this.id = listjson.id; //ONLY for unique id?
}


			/** STATS FOR EACH USER */

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

User.prototype.setEmail = function() {
	if(listjson.email != null)
		this.email = listjson.email;
}

User.prototype.set = function(userjson) {
	this.public_repos = userjson.public_repos;
	this.public_gists = userjson.public_gists;

	this.followers = userjson.followers;
	this.following = userjson.following;

	this.hireable = userjson.hireable

	this.avatar_url = userjson.avatar_url;
}
//========================================================

// users = responsejson.items.map(function(user) {
// 	return new User(user);
// });


//var matches = users.filter((user) => (user.name == "searchNameParam")
//will be array...users.find() is first result only



module.exports = User;