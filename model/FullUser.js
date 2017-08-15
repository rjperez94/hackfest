function FullUser (datajson, userjson) {
	this.login = datajson.login;
	this.id = datajson.id;
	this.avatar_url = datajson.avatar_url;
	this.url = datajson.url;

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

module.exports = FullUser;
