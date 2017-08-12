'use strict';
var express = require('express');
var fs = require('fs');
var router = express.Router();

// GET: /
router.get('/', function(req, res) {
  if(!req.session.user) { //check for login
    res.render('index/index', {
      title: 'KPSmart - Restricted Access'
    });
  } else {
      res.redirect('/main?ID='+currentMaxID);
  }
});


module.exports = router;
