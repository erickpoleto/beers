const express = require('express');
const authMiddleware = require("./middlewares/auth")

const MongoUsers = require('./controllers/UsersController');
const MongoSession = require('./controllers/SessionController');
const MongoApp = require('./controllers/AppController');
const MongoBeer = require('./controllers/BeersController')
const MongoUserRate = require('./controllers/UserRateController');
const MongoBeerRate = require('./controllers/BeersRateController');
//normal routes
const routes = express.Router()
//routes that needs tokens
const routeToken = express.Router()
//middleware

//user
routes.get('/', MongoUsers.index)
routes.post('/post', MongoUsers.create);
routes.delete('/delete', MongoUsers.delete);
//session
routes.post('/session/verify', MongoSession.create);
routes.post('/session/forgotPassword', MongoSession.createForgotPassword);
routes.post('/session/resetPassword', MongoSession.resetPassword);
//app
//beers
routes.post('/beers/items', MongoBeer.indexCategory);
routes.post('/beers/about', MongoBeer.indexNameBeer);

//userRate
routeToken.post('/beers/item/rate', MongoUserRate.create);
//beerRate
routeToken.post('/beers/rate', MongoBeerRate.create)
routes.get('/beers/rate/all', MongoBeerRate.index)


module.exports = (routes);