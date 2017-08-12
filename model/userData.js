//garion help with js

//get json's items

var users = [];


// var followers = user.followers(callback); //return array of users
// userToFollowers.add(user, followers);
// var following = user.following(callback); //return array of users



//put User in separate file

var User = function(userjson) {
	this.name = userjson.login; // = get name from json
	this.id = userjson.id;

}

User.prototype.setFollowers = function() {
	if(this.followers == null)
		this.followers = //api call;
}

User.prototype.setFollowing = function() {
	if(this.following == null)
		this.following = //api call;
}

//===========================================
var responsejson = {
  "total_count": 2163,
  "incomplete_results": false,
  "items": [
    {
      "login": "purcell",
      "id": 5636,
      "avatar_url": "https://avatars1.githubusercontent.com/u/5636?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/purcell",
      "html_url": "https://github.com/purcell",
      "followers_url": "https://api.github.com/users/purcell/followers",
      "following_url": "https://api.github.com/users/purcell/following{/other_user}",
      "gists_url": "https://api.github.com/users/purcell/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/purcell/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/purcell/subscriptions",
      "organizations_url": "https://api.github.com/users/purcell/orgs",
      "repos_url": "https://api.github.com/users/purcell/repos",
      "events_url": "https://api.github.com/users/purcell/events{/privacy}",
      "received_events_url": "https://api.github.com/users/purcell/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "JamesNK",
      "id": 303201,
      "avatar_url": "https://avatars2.githubusercontent.com/u/303201?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/JamesNK",
      "html_url": "https://github.com/JamesNK",
      "followers_url": "https://api.github.com/users/JamesNK/followers",
      "following_url": "https://api.github.com/users/JamesNK/following{/other_user}",
      "gists_url": "https://api.github.com/users/JamesNK/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/JamesNK/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/JamesNK/subscriptions",
      "organizations_url": "https://api.github.com/users/JamesNK/orgs",
      "repos_url": "https://api.github.com/users/JamesNK/repos",
      "events_url": "https://api.github.com/users/JamesNK/events{/privacy}",
      "received_events_url": "https://api.github.com/users/JamesNK/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "mmckegg",
      "id": 66834,
      "avatar_url": "https://avatars2.githubusercontent.com/u/66834?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mmckegg",
      "html_url": "https://github.com/mmckegg",
      "followers_url": "https://api.github.com/users/mmckegg/followers",
      "following_url": "https://api.github.com/users/mmckegg/following{/other_user}",
      "gists_url": "https://api.github.com/users/mmckegg/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mmckegg/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mmckegg/subscriptions",
      "organizations_url": "https://api.github.com/users/mmckegg/orgs",
      "repos_url": "https://api.github.com/users/mmckegg/repos",
      "events_url": "https://api.github.com/users/mmckegg/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mmckegg/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "NZKoz",
      "id": 197,
      "avatar_url": "https://avatars0.githubusercontent.com/u/197?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/NZKoz",
      "html_url": "https://github.com/NZKoz",
      "followers_url": "https://api.github.com/users/NZKoz/followers",
      "following_url": "https://api.github.com/users/NZKoz/following{/other_user}",
      "gists_url": "https://api.github.com/users/NZKoz/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/NZKoz/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/NZKoz/subscriptions",
      "organizations_url": "https://api.github.com/users/NZKoz/orgs",
      "repos_url": "https://api.github.com/users/NZKoz/repos",
      "events_url": "https://api.github.com/users/NZKoz/events{/privacy}",
      "received_events_url": "https://api.github.com/users/NZKoz/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "ahdinosaur",
      "id": 719605,
      "avatar_url": "https://avatars0.githubusercontent.com/u/719605?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ahdinosaur",
      "html_url": "https://github.com/ahdinosaur",
      "followers_url": "https://api.github.com/users/ahdinosaur/followers",
      "following_url": "https://api.github.com/users/ahdinosaur/following{/other_user}",
      "gists_url": "https://api.github.com/users/ahdinosaur/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ahdinosaur/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ahdinosaur/subscriptions",
      "organizations_url": "https://api.github.com/users/ahdinosaur/orgs",
      "repos_url": "https://api.github.com/users/ahdinosaur/repos",
      "events_url": "https://api.github.com/users/ahdinosaur/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ahdinosaur/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "unclecheese",
      "id": 654636,
      "avatar_url": "https://avatars1.githubusercontent.com/u/654636?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/unclecheese",
      "html_url": "https://github.com/unclecheese",
      "followers_url": "https://api.github.com/users/unclecheese/followers",
      "following_url": "https://api.github.com/users/unclecheese/following{/other_user}",
      "gists_url": "https://api.github.com/users/unclecheese/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/unclecheese/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/unclecheese/subscriptions",
      "organizations_url": "https://api.github.com/users/unclecheese/orgs",
      "repos_url": "https://api.github.com/users/unclecheese/repos",
      "events_url": "https://api.github.com/users/unclecheese/events{/privacy}",
      "received_events_url": "https://api.github.com/users/unclecheese/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "MostafaGazar",
      "id": 87605,
      "avatar_url": "https://avatars1.githubusercontent.com/u/87605?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/MostafaGazar",
      "html_url": "https://github.com/MostafaGazar",
      "followers_url": "https://api.github.com/users/MostafaGazar/followers",
      "following_url": "https://api.github.com/users/MostafaGazar/following{/other_user}",
      "gists_url": "https://api.github.com/users/MostafaGazar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/MostafaGazar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/MostafaGazar/subscriptions",
      "organizations_url": "https://api.github.com/users/MostafaGazar/orgs",
      "repos_url": "https://api.github.com/users/MostafaGazar/repos",
      "events_url": "https://api.github.com/users/MostafaGazar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/MostafaGazar/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "bnolan",
      "id": 17499,
      "avatar_url": "https://avatars2.githubusercontent.com/u/17499?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bnolan",
      "html_url": "https://github.com/bnolan",
      "followers_url": "https://api.github.com/users/bnolan/followers",
      "following_url": "https://api.github.com/users/bnolan/following{/other_user}",
      "gists_url": "https://api.github.com/users/bnolan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bnolan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bnolan/subscriptions",
      "organizations_url": "https://api.github.com/users/bnolan/orgs",
      "repos_url": "https://api.github.com/users/bnolan/repos",
      "events_url": "https://api.github.com/users/bnolan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bnolan/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "edgurgel",
      "id": 30873,
      "avatar_url": "https://avatars0.githubusercontent.com/u/30873?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/edgurgel",
      "html_url": "https://github.com/edgurgel",
      "followers_url": "https://api.github.com/users/edgurgel/followers",
      "following_url": "https://api.github.com/users/edgurgel/following{/other_user}",
      "gists_url": "https://api.github.com/users/edgurgel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/edgurgel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/edgurgel/subscriptions",
      "organizations_url": "https://api.github.com/users/edgurgel/orgs",
      "repos_url": "https://api.github.com/users/edgurgel/repos",
      "events_url": "https://api.github.com/users/edgurgel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/edgurgel/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "zoltan-nz",
      "id": 1009783,
      "avatar_url": "https://avatars3.githubusercontent.com/u/1009783?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zoltan-nz",
      "html_url": "https://github.com/zoltan-nz",
      "followers_url": "https://api.github.com/users/zoltan-nz/followers",
      "following_url": "https://api.github.com/users/zoltan-nz/following{/other_user}",
      "gists_url": "https://api.github.com/users/zoltan-nz/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zoltan-nz/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zoltan-nz/subscriptions",
      "organizations_url": "https://api.github.com/users/zoltan-nz/orgs",
      "repos_url": "https://api.github.com/users/zoltan-nz/repos",
      "events_url": "https://api.github.com/users/zoltan-nz/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zoltan-nz/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "layerssss",
      "id": 1559832,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1559832?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/layerssss",
      "html_url": "https://github.com/layerssss",
      "followers_url": "https://api.github.com/users/layerssss/followers",
      "following_url": "https://api.github.com/users/layerssss/following{/other_user}",
      "gists_url": "https://api.github.com/users/layerssss/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/layerssss/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/layerssss/subscriptions",
      "organizations_url": "https://api.github.com/users/layerssss/orgs",
      "repos_url": "https://api.github.com/users/layerssss/repos",
      "events_url": "https://api.github.com/users/layerssss/events{/privacy}",
      "received_events_url": "https://api.github.com/users/layerssss/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "nrc",
      "id": 762626,
      "avatar_url": "https://avatars0.githubusercontent.com/u/762626?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nrc",
      "html_url": "https://github.com/nrc",
      "followers_url": "https://api.github.com/users/nrc/followers",
      "following_url": "https://api.github.com/users/nrc/following{/other_user}",
      "gists_url": "https://api.github.com/users/nrc/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nrc/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nrc/subscriptions",
      "organizations_url": "https://api.github.com/users/nrc/orgs",
      "repos_url": "https://api.github.com/users/nrc/repos",
      "events_url": "https://api.github.com/users/nrc/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nrc/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Widdershin",
      "id": 398365,
      "avatar_url": "https://avatars2.githubusercontent.com/u/398365?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Widdershin",
      "html_url": "https://github.com/Widdershin",
      "followers_url": "https://api.github.com/users/Widdershin/followers",
      "following_url": "https://api.github.com/users/Widdershin/following{/other_user}",
      "gists_url": "https://api.github.com/users/Widdershin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Widdershin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Widdershin/subscriptions",
      "organizations_url": "https://api.github.com/users/Widdershin/orgs",
      "repos_url": "https://api.github.com/users/Widdershin/repos",
      "events_url": "https://api.github.com/users/Widdershin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Widdershin/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "dribnet",
      "id": 945979,
      "avatar_url": "https://avatars3.githubusercontent.com/u/945979?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/dribnet",
      "html_url": "https://github.com/dribnet",
      "followers_url": "https://api.github.com/users/dribnet/followers",
      "following_url": "https://api.github.com/users/dribnet/following{/other_user}",
      "gists_url": "https://api.github.com/users/dribnet/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/dribnet/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/dribnet/subscriptions",
      "organizations_url": "https://api.github.com/users/dribnet/orgs",
      "repos_url": "https://api.github.com/users/dribnet/repos",
      "events_url": "https://api.github.com/users/dribnet/events{/privacy}",
      "received_events_url": "https://api.github.com/users/dribnet/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "chilts",
      "id": 3048,
      "avatar_url": "https://avatars1.githubusercontent.com/u/3048?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/chilts",
      "html_url": "https://github.com/chilts",
      "followers_url": "https://api.github.com/users/chilts/followers",
      "following_url": "https://api.github.com/users/chilts/following{/other_user}",
      "gists_url": "https://api.github.com/users/chilts/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/chilts/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/chilts/subscriptions",
      "organizations_url": "https://api.github.com/users/chilts/orgs",
      "repos_url": "https://api.github.com/users/chilts/repos",
      "events_url": "https://api.github.com/users/chilts/events{/privacy}",
      "received_events_url": "https://api.github.com/users/chilts/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "justinfx",
      "id": 282566,
      "avatar_url": "https://avatars1.githubusercontent.com/u/282566?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/justinfx",
      "html_url": "https://github.com/justinfx",
      "followers_url": "https://api.github.com/users/justinfx/followers",
      "following_url": "https://api.github.com/users/justinfx/following{/other_user}",
      "gists_url": "https://api.github.com/users/justinfx/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/justinfx/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/justinfx/subscriptions",
      "organizations_url": "https://api.github.com/users/justinfx/orgs",
      "repos_url": "https://api.github.com/users/justinfx/repos",
      "events_url": "https://api.github.com/users/justinfx/events{/privacy}",
      "received_events_url": "https://api.github.com/users/justinfx/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "willemt",
      "id": 946878,
      "avatar_url": "https://avatars0.githubusercontent.com/u/946878?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/willemt",
      "html_url": "https://github.com/willemt",
      "followers_url": "https://api.github.com/users/willemt/followers",
      "following_url": "https://api.github.com/users/willemt/following{/other_user}",
      "gists_url": "https://api.github.com/users/willemt/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/willemt/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/willemt/subscriptions",
      "organizations_url": "https://api.github.com/users/willemt/orgs",
      "repos_url": "https://api.github.com/users/willemt/repos",
      "events_url": "https://api.github.com/users/willemt/events{/privacy}",
      "received_events_url": "https://api.github.com/users/willemt/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "chillu",
      "id": 111025,
      "avatar_url": "https://avatars3.githubusercontent.com/u/111025?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/chillu",
      "html_url": "https://github.com/chillu",
      "followers_url": "https://api.github.com/users/chillu/followers",
      "following_url": "https://api.github.com/users/chillu/following{/other_user}",
      "gists_url": "https://api.github.com/users/chillu/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/chillu/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/chillu/subscriptions",
      "organizations_url": "https://api.github.com/users/chillu/orgs",
      "repos_url": "https://api.github.com/users/chillu/repos",
      "events_url": "https://api.github.com/users/chillu/events{/privacy}",
      "received_events_url": "https://api.github.com/users/chillu/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "oieduardorabelo",
      "id": 829902,
      "avatar_url": "https://avatars1.githubusercontent.com/u/829902?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/oieduardorabelo",
      "html_url": "https://github.com/oieduardorabelo",
      "followers_url": "https://api.github.com/users/oieduardorabelo/followers",
      "following_url": "https://api.github.com/users/oieduardorabelo/following{/other_user}",
      "gists_url": "https://api.github.com/users/oieduardorabelo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/oieduardorabelo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/oieduardorabelo/subscriptions",
      "organizations_url": "https://api.github.com/users/oieduardorabelo/orgs",
      "repos_url": "https://api.github.com/users/oieduardorabelo/repos",
      "events_url": "https://api.github.com/users/oieduardorabelo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/oieduardorabelo/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "crazytonyli",
      "id": 1101828,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1101828?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/crazytonyli",
      "html_url": "https://github.com/crazytonyli",
      "followers_url": "https://api.github.com/users/crazytonyli/followers",
      "following_url": "https://api.github.com/users/crazytonyli/following{/other_user}",
      "gists_url": "https://api.github.com/users/crazytonyli/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/crazytonyli/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/crazytonyli/subscriptions",
      "organizations_url": "https://api.github.com/users/crazytonyli/orgs",
      "repos_url": "https://api.github.com/users/crazytonyli/repos",
      "events_url": "https://api.github.com/users/crazytonyli/events{/privacy}",
      "received_events_url": "https://api.github.com/users/crazytonyli/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "nathanielw",
      "id": 4693844,
      "avatar_url": "https://avatars3.githubusercontent.com/u/4693844?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nathanielw",
      "html_url": "https://github.com/nathanielw",
      "followers_url": "https://api.github.com/users/nathanielw/followers",
      "following_url": "https://api.github.com/users/nathanielw/following{/other_user}",
      "gists_url": "https://api.github.com/users/nathanielw/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nathanielw/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nathanielw/subscriptions",
      "organizations_url": "https://api.github.com/users/nathanielw/orgs",
      "repos_url": "https://api.github.com/users/nathanielw/repos",
      "events_url": "https://api.github.com/users/nathanielw/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nathanielw/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "sminnee",
      "id": 59968,
      "avatar_url": "https://avatars1.githubusercontent.com/u/59968?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sminnee",
      "html_url": "https://github.com/sminnee",
      "followers_url": "https://api.github.com/users/sminnee/followers",
      "following_url": "https://api.github.com/users/sminnee/following{/other_user}",
      "gists_url": "https://api.github.com/users/sminnee/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sminnee/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sminnee/subscriptions",
      "organizations_url": "https://api.github.com/users/sminnee/orgs",
      "repos_url": "https://api.github.com/users/sminnee/repos",
      "events_url": "https://api.github.com/users/sminnee/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sminnee/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "zznate",
      "id": 185570,
      "avatar_url": "https://avatars2.githubusercontent.com/u/185570?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zznate",
      "html_url": "https://github.com/zznate",
      "followers_url": "https://api.github.com/users/zznate/followers",
      "following_url": "https://api.github.com/users/zznate/following{/other_user}",
      "gists_url": "https://api.github.com/users/zznate/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zznate/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zznate/subscriptions",
      "organizations_url": "https://api.github.com/users/zznate/orgs",
      "repos_url": "https://api.github.com/users/zznate/repos",
      "events_url": "https://api.github.com/users/zznate/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zznate/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "lukesUbuntu",
      "id": 6184757,
      "avatar_url": "https://avatars1.githubusercontent.com/u/6184757?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/lukesUbuntu",
      "html_url": "https://github.com/lukesUbuntu",
      "followers_url": "https://api.github.com/users/lukesUbuntu/followers",
      "following_url": "https://api.github.com/users/lukesUbuntu/following{/other_user}",
      "gists_url": "https://api.github.com/users/lukesUbuntu/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/lukesUbuntu/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/lukesUbuntu/subscriptions",
      "organizations_url": "https://api.github.com/users/lukesUbuntu/orgs",
      "repos_url": "https://api.github.com/users/lukesUbuntu/repos",
      "events_url": "https://api.github.com/users/lukesUbuntu/events{/privacy}",
      "received_events_url": "https://api.github.com/users/lukesUbuntu/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "TonnyTao",
      "id": 3170134,
      "avatar_url": "https://avatars3.githubusercontent.com/u/3170134?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/TonnyTao",
      "html_url": "https://github.com/TonnyTao",
      "followers_url": "https://api.github.com/users/TonnyTao/followers",
      "following_url": "https://api.github.com/users/TonnyTao/following{/other_user}",
      "gists_url": "https://api.github.com/users/TonnyTao/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/TonnyTao/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/TonnyTao/subscriptions",
      "organizations_url": "https://api.github.com/users/TonnyTao/orgs",
      "repos_url": "https://api.github.com/users/TonnyTao/repos",
      "events_url": "https://api.github.com/users/TonnyTao/events{/privacy}",
      "received_events_url": "https://api.github.com/users/TonnyTao/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "camh96",
      "id": 6056384,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6056384?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/camh96",
      "html_url": "https://github.com/camh96",
      "followers_url": "https://api.github.com/users/camh96/followers",
      "following_url": "https://api.github.com/users/camh96/following{/other_user}",
      "gists_url": "https://api.github.com/users/camh96/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/camh96/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/camh96/subscriptions",
      "organizations_url": "https://api.github.com/users/camh96/orgs",
      "repos_url": "https://api.github.com/users/camh96/repos",
      "events_url": "https://api.github.com/users/camh96/events{/privacy}",
      "received_events_url": "https://api.github.com/users/camh96/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "jakubgarfield",
      "id": 194724,
      "avatar_url": "https://avatars1.githubusercontent.com/u/194724?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jakubgarfield",
      "html_url": "https://github.com/jakubgarfield",
      "followers_url": "https://api.github.com/users/jakubgarfield/followers",
      "following_url": "https://api.github.com/users/jakubgarfield/following{/other_user}",
      "gists_url": "https://api.github.com/users/jakubgarfield/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jakubgarfield/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jakubgarfield/subscriptions",
      "organizations_url": "https://api.github.com/users/jakubgarfield/orgs",
      "repos_url": "https://api.github.com/users/jakubgarfield/repos",
      "events_url": "https://api.github.com/users/jakubgarfield/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jakubgarfield/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Br3nda",
      "id": 12266,
      "avatar_url": "https://avatars0.githubusercontent.com/u/12266?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Br3nda",
      "html_url": "https://github.com/Br3nda",
      "followers_url": "https://api.github.com/users/Br3nda/followers",
      "following_url": "https://api.github.com/users/Br3nda/following{/other_user}",
      "gists_url": "https://api.github.com/users/Br3nda/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Br3nda/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Br3nda/subscriptions",
      "organizations_url": "https://api.github.com/users/Br3nda/orgs",
      "repos_url": "https://api.github.com/users/Br3nda/repos",
      "events_url": "https://api.github.com/users/Br3nda/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Br3nda/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "PrototypeAlex",
      "id": 666638,
      "avatar_url": "https://avatars0.githubusercontent.com/u/666638?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/PrototypeAlex",
      "html_url": "https://github.com/PrototypeAlex",
      "followers_url": "https://api.github.com/users/PrototypeAlex/followers",
      "following_url": "https://api.github.com/users/PrototypeAlex/following{/other_user}",
      "gists_url": "https://api.github.com/users/PrototypeAlex/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/PrototypeAlex/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/PrototypeAlex/subscriptions",
      "organizations_url": "https://api.github.com/users/PrototypeAlex/orgs",
      "repos_url": "https://api.github.com/users/PrototypeAlex/repos",
      "events_url": "https://api.github.com/users/PrototypeAlex/events{/privacy}",
      "received_events_url": "https://api.github.com/users/PrototypeAlex/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "joshuavial",
      "id": 72309,
      "avatar_url": "https://avatars2.githubusercontent.com/u/72309?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/joshuavial",
      "html_url": "https://github.com/joshuavial",
      "followers_url": "https://api.github.com/users/joshuavial/followers",
      "following_url": "https://api.github.com/users/joshuavial/following{/other_user}",
      "gists_url": "https://api.github.com/users/joshuavial/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/joshuavial/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/joshuavial/subscriptions",
      "organizations_url": "https://api.github.com/users/joshuavial/orgs",
      "repos_url": "https://api.github.com/users/joshuavial/repos",
      "events_url": "https://api.github.com/users/joshuavial/events{/privacy}",
      "received_events_url": "https://api.github.com/users/joshuavial/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    }
  ]
}

users = responsejson.items.map(function(user) {
	return new User(user);
});


//var matches = users.filter((user) => (user.name == "searchNameParam")
//will be array...users.find() is first result only


