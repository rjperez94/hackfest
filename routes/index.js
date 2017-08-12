'use strict';
var express = require('express');
var encode = require( 'hashcode' ).hashCode;
var fs = require('fs');
var router = express.Router();
var github = require('octonode');
var fetch = require('node-fetch');
var User = require('../model/userData');

// GET: /
router.get('/', function(req, res) {
    var hash = encode().value( res.query.query ); 
    var fname = "../data/test/"+hash+".json";

    fs.exists(fname,function(exists){
  		if (!exists) {
  			fetch(query)
		    .then(function(res) {
		        return res.json();
		    }).then(function(json) {
		 		fs.writeFile(fname, json, function(err) {
    				if(err) {
        				return console.log(err);
    				}
    				res.render('index/main', {
      					title: 'Home',
      					user: new User(json)
    				});
				});
		    });
  		} else {
  			
  		}
	});
	

        
    
});

module.exports = router;
