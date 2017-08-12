'use strict';
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

var express = require('express');
var encode = require( 'hashcode' ).hashCode;
var fs = require('fs');
var router = express.Router();
var github = require('octonode');
var fetch = require('node-fetch');
var User = require('../model/userData.js');

// GET: /
router.get('/', function(req, res) {
    var hash = encode().value( req.query.query );
    var fname = "data/test/"+hash+".json";

    fs.exists(fname,function(exists){
  		if (!exists) {
  			fetch(req.query.query)
		    .then(function(res) {
		        return res.json();
		    }).then(function(json) {
          mkdirp(getDirName(fname), function (err) {
            var contents = JSON.stringify(json);
            console.log(contents);
            fs.writeFile(fname, contents, function(err) {
        				if(err) {
            				return console.log(err);
        				}
        				res.render('index/main', {
          					title: 'Home',
          					user: json.items.map(function(user) {return new User(user);})
        				});
    				});
          });

		    });
  		} else {
        fs.readFile(fname, function (err, data) {
          res.render('index/main', {
              title: 'Home',
              user: JSON.parse(data).items.map(function(user) {return new User(user);})
          });
        });
  		}
	});




});

module.exports = router;
