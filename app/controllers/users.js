"use strict";

var User = require('../models/user');
var _ = require('lodash');

function All(req, res) {
  User.find(function (err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
}

function Create(req, res) {
  var user = new User(req.body);
    user.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.send({message:'User added!'});
    });
}

function Update(req, res) {
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
}

function Show(req, res) {
  User.findOne({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

function Delete(req, res) {
  User.remove({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User deleted!' });
  });
}

module.exports = {
	All: All,
	Create: Create,
	Update: Update,
	Show: Show,
	Delete: Delete
};