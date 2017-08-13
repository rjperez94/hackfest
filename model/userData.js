//get json's items


/* list of users in Wellington -- use login + id to get to each user's profile */

var User = function(userjson) {
	this.login = userjson.login;
	this.id = userjson.id;
	this.avatar_url = userjson.avatar_url;
	this.url = userjson.url;


}

User.prototype.setOtherParams = function(userjson) {
	this.public_repos = userjson.public_repos;
	this.public_gists = userjson.public_gists;
	this.followers = userjson.followers;
	this.following = userjson.following;

	this.company = userjson.company;
	if (this.company) {
		this.hireable = true;
	} else {
		this.hireable = false;
	}

	this.name = userjson.name;
	this.bio = userjson.bio;
	this.email = userjson.email;
	this.blog = userjson.blog;
}

module.exports = User;
