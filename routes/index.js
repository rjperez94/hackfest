'use strict';
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

var express = require('express');
var encode = require( 'hashcode' ).hashCode;
var fs = require('fs');
var router = express.Router();
var fetch = require('node-fetch');
var User = require('../model/userData.js');



// GET: /
router.get('/', function(req, res) {
  var loc = req.query.loc;
  var query = 'https://api.github.com/search/users?q=location:'+loc;
  var hash = encode().value( query );
  var fname = "data/test/"+hash+".json";

  fs.exists(fname,function(exists){
    var exists =false;
    if (!exists) {
      fetch(query)
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        mkdirp(getDirName(fname), function (err) {
          var contents = JSON.stringify(json);
          fs.writeFile(fname, contents, function(err) {
            if(err) {
              return console.log(err);
            }
          });
        });
        var list = json.items.map(function(user) {return new User(user);});
        list.forEach(function(item) {
          var query='https://api.github.com/users/'+item.login;
          var hash = encode().value( query );
          var fname = "data/test/"+hash+".json";

          fetch(query)
          .then(function(res) {
            return res.json();
          }).then(function(json) {
            mkdirp(getDirName(fname), function (err) {
              var contents = JSON.stringify(json);
              fs.writeFile(fname, contents, function(err) {
                if(err) {
                  return console.log(err);
                }
              });
            });
            console.log(item.login);
            console.log(json);
            item.setOtherParams(json);
          });

        });
        res.render('index/main', {
          title: 'Home',
          user: list
        });
      });



    } else {
      fs.readFile(fname, function (err, data) {
        var list = JSON.parse(data).items.map(function(user) {return new User(user);});
        list.forEach(function(item) {
          var query='https://api.github.com/users/'+item.login;
          var hash = encode().value( query );
          var fname2 = "data/test/"+hash+".json";
          fs.readFile(fname2, function (err, data2) {
            console.log(JSON.parse(data2));
            if(data2) {
              item.setOtherParams(JSON.parse(data2));
            }
          });
        });
        res.render('index/main', {
          title: 'Home',
          user: list
        });
      });
    }
  });
});

//======================================================================================

router.get('/test', function(req, res) {
  var hash = encode().value( req.query.query);
  var fname = "data/test/"+hash+".json";
  fetch(req.query.query)
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

        list.forEach(function(item) {
          fetch(item.url)
          .then(function(res2) {
            return res2.json();
          }).then(function(json2) {
            var hash2 = encode().value( item.url );
            var fname2 = "data/test/"+hash2+".json";
            mkdirp(getDirName(fname2), function (err) {
              var contents2 = JSON.stringify(json2);
              fs.writeFile(fname2, contents2, function(err) {
                if(err) {
                  return console.log(err);
                }
              });
            });

          });
        })

      });
    });
  });
});



module.exports = router;
