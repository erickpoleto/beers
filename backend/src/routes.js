const express = require('express');
const UsersController = require('./controllers/UsersController');
const SessionController = require('./controllers/SessionController');
const MongoUsers = require('./controllers/MongoUsers');


const routes = express.Router()

//register
routes.post('/register', UsersController.create);
routes.get('/register', UsersController.index);
routes.delete('/register/delete', UsersController.delete);

//session
routes.post('/session', SessionController.create);

//mongo
routes.post('/post', MongoUsers.create);
routes.get('/', MongoUsers.index)
routes.delete('/delete', MongoUsers.delete)

module.exports = routes;