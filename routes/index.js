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
    var fname = "data/test/index.json";

    fs.exists(fname,function(exists){
      if (exists) {
        fs.readFile(fname, function (err, data) {
          var users = sortUsers(req, JSON.parse(data).items.map(function(user) {return new User(user);})) //store array of Users per sort function
          renderHome(res, users); //render
        });
      }
  });
});


//================================================================================================
/** DETERMINE WHICH SORT TO USE */
function sortUsers (req, users) {
    var key = req.params.sort;
    return users.sort(SORTERS[key] || defaultSorter);
}

/** SORTING USERS BY FILTER */
var SORTERS = {
  'numberOfStars': function sortByNumberOfStars () { }
};

var defaultSorter = function () {
   // default sort
}

//================================================================================================
function renderHome (res, users) {
  res.render('index/main', {
      title: 'Home',
      user: users
  });
}
//======================================================================================
router.get('/test', function(req, res) {
    var key ='&access_token=2e021ca997c1f7a8dd55b0884df4bc458d19a780';
    var hash = encode().value( req.query.query + key);
    var fname = "data/test/"+hash+".json";
    fetch(req.query.query + key)
       .then(function(res) {
           return res.json();
       }).then(function(json) {
         mkdirp(getDirName(fname), function (err) {
           var contents = JSON.stringify(json);
           fs.writeFile(fname, contents, function(err) {
               if(err) {
                   return console.log(err);
               }

                var list = json.items.map(function(user) {return new User(user);})

                array.forEach(function(item) {

                  fetch(item.getUrl())
                     .then(function(res2) {
                         return res2.json();
                     }).then(function(json2) {
                        var hash2 = encode().value( item.getUrl() );
                        var fname2 = "data/test/"+hash2+".json";
                        console.log(hash2);
                        console.log(fname2);
                         mkdirp(getDirName(fname2), function (err) {
                           var contents2 = JSON.stringify(json2);
                           fs.writeFile(fname2, contents2, function(err) {
                               if(err) {
                                   return console.log(err);
                               }
                           });
                         });

                      });
                    console.log(item.url);
                 })

           });
         });
        });
    console.log(fname);
});



module.exports = router;
