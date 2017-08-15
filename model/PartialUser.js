function PartialUser (userjson) {
	this.login = userjson.login;
	this.id = userjson.id;
	this.avatar_url = userjson.avatar_url;
	this.url = userjson.url;
}

module.exports = PartialUser;
