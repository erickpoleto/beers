const express = require('express');
const UsersController = require('./controllers/UsersController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router()

//register
routes.post('/register', UsersController.create);
routes.get('/register', UsersController.index);
routes.delete('/register/delete', UsersController.delete);

//session
routes.post('/session', SessionController.create);

module.exports = routes;