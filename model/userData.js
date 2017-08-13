

//get json's items



// var followers = user.followers(callback); //return array of users
// userToFollowers.add(user, followers);
// var following = user.following(callback); //return array of users


/* list of users in Wellington -- use login + id to get to each user's profile */

var User = function(userjson) {
	this.login = userjson.login; // = get name from json
	this.id = userjson.id; //ONLY for unique id?

	this.public_repos = userjson.public_repos;
	this.public_gists = userjson.public_gists;

	this.followers = userjson.followers;
	this.following = userjson.following;

	this.hireable = userjson.hireable

	this.avatar_url = userjson.avatar_url;
	this.url = userjson.url;
	this.blog = userjson.blog;
}


			/** STATS FOR EACH USER */

User.prototype.setName = function() {
	if(userjson.name)
		this.name = userjson.name;
}

User.prototype.setCompany = function() {
	if(userjson.company)
		this.company = userjson.company;
	else
		this.company = "None";
}

User.prototype.setBio = function() {
	if(userjson.bio)
		this.bio = userjson.bio;
	else
		this.bio = "";
}

User.prototype.setEmail = function() {
	if(userjson.email)
		this.email = userjson.email;
	else
		this.email = "";
}

User.prototype.setBlog = function() {
	if(userjson.blog)
		this.blog = userjson.blog;
	else
		this.blog = "";
}

User.prototype.getUrl = function() {
	return this.url;	
}
//========================================================

// users = responsejson.items.map(function(user) {
// 	return new User(user);
// });


//var matches = users.filter((user) => (user.name == "searchNameParam")
//will be array...users.find() is first result only



module.exports = User;