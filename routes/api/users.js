"use strict";

var express = require('express');
var _ = require('lodash');
var User = require('../../models/user');
var router = express.Router();

//GET /users
router.get('/', function (req, res) {
  User.find(function (err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
});

//POST /users
router.post('/', function (req, res) {
  var user = new User(req.body);
    user.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.send({message:'User added!'});
    });
});

//UPDATE /users/:id
router.put('/:id', function (req, res) {
  User.findOne({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.send(err);
    }

    _.forEach(req.body, function(value, key) {
      user[key] = req.body[key];
    });

    user.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'User updated!' });
    });
  });
});

//GET /users/:id
router.get('/:id', function(req, res) {
  User.findOne({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
});

//DELETE /users/:id
router.delete('/:id', function (req, res) {
  User.remove({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User deleted!' });
  });
});

module.exports = router;
