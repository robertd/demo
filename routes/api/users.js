"use strict";

var express = require('express');
var Users = require('../../controllers/users');
var router = express.Router();

//GET /users
router.get('/', Users.All);

//POST /users
router.post('/', Users.Create);

//UPDATE /users/:id
router.put('/:id', Users.Update);

//GET /users/:id
router.get('/:id', Users.Show);

//DELETE /users/:id
router.delete('/:id', Users.Delete);

module.exports = router;
