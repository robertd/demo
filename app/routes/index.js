"use strict";

var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users page. */
router.get('/', function(req, res, next) {
    request('http://localhost:3000/api/users', function (error, response, body) {
      	if (!error && response.statusCode == 200) {
        	res.render('users', { users: body });
      	}
      	res.render('error');
    });
});

module.exports = router;
