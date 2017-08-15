'use strict';
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

var express = require('express');
var encode = require( 'hashcode' ).hashCode;
var fs = require('fs');
var router = express.Router();
var fetch = require('node-fetch');
var PartialUser = require('../model/PartialUser.js');
var FullUser = require('../model/FullUser.js');

// GET: /
router.get('/', function(req, res) {
  var loc = req.query.loc;
  var query = 'https://api.github.com/search/users?q=location:'+loc+'+sort:followers';
  var hash = encode().value( query );
  var fname = "data/test/"+hash+".json";

  fs.exists(fname,function(exists){
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
      });


    } else {
      fs.readFile(fname, function (err, data) {
        var temp = JSON.parse(data).items.map(function(user) {return new PartialUser(user);});
        req.session.list = [];
        req.session.save();
        temp.forEach(function(item) {
          var query2 ='https://api.github.com/users/'+item.login;
          var hash2 = encode().value( query2 );
          var fname2 = "data/test/"+hash2+".json";
          var data2 = fs.readFileSync(fname2);
          req.session.list.push(new FullUser(item,JSON.parse(data2)));

          // file generator for each user --> uncomment for use
          // comment out line 46 and 47 when you uncomment this
          // fetch(query2)
          //   .then(function(res) {
          //     return res.json();
          //   }).then(function(json) {
          //     mkdirp(getDirName(fname2), function (err) {
          //       var contents = JSON.stringify(json);
          //       fs.writeFile(fname2, contents, function(err) {
          //         if(err) {
          //           return console.log(err);
          //         }
          //       });
          //     });
          //   });

        });

        res.render('index/main', {
          title: 'Home',
          user: req.session.list
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

        var list = json.items.map(function(user) {return new PartialUser(user);})

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
