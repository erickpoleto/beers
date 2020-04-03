const express = require('express');
const authMiddleware = require("./middlewares/auth")

const MongoUsers = require('./controllers/UsersController');
const MongoSession = require('./controllers/SessionController');
const MongoApp = require('./controllers/AppController');
const MongoBeer = require('./controllers/BeersController')
const MongoBeerRate = require('./controllers/BeersRateController');
//normal routes
const routes = express.Router()
//routes that needs tokens

//user
routes.get('/', MongoUsers.index)
routes.post('/post', MongoUsers.create);
routes.delete('/delete', MongoUsers.delete);
//session
routes.post('/session/verify', MongoSession.create);
routes.post('/session/forgotPassword', MongoSession.createForgotPassword);
routes.post('/session/resetPassword', MongoSession.resetPassword);
//app
routes.get('/token/test', MongoApp.index)
//beers
routes.post('/beers/items', MongoBeer.indexCategory);
routes.post('/beers/about', MongoBeer.indexNameBeer);
//beerRate
routes.use(authMiddleware).post('/beers/rate', MongoBeerRate.create)
routes.get('/beers/rate/all', MongoBeerRate.index)
routes.delete('/beers/rate/delete', MongoBeerRate.delete)


module.exports = (routes);