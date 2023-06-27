const express = require('express');
const routes = express.Router();
const welcomeController = require('./controller/welcome');
const usersController = require('./controller/users');
const welcome = require('./controller/welcome');

routes.get('/', welcome.greeting);
routes.post('/users', usersController.create);
routes.get('/users', usersController.getAll);

module.exports = routes;
