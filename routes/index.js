'use strict';
var express = require('express');
var fs = require('fs');
var router = express.Router();

// GET: /
router.get('/', function(req, res) {
    res.render('index/main', {
      title: 'Home'
    });
});


module.exports = router;
