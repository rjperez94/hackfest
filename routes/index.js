'use strict';
var express = require('express');
var fs = require('fs');
var router = express.Router();
var github = require('octonode');

// GET: /
router.get('/', function(req, res) {
	var client = github.client();
	client.get('/users/pksunkara', {}, function (err, status, body, headers) {
  		console.log(body); //json object
  		res.render('index/main', {
      		title: 'Home',
      		body: body
    	});
	});
    
});


module.exports = router;
