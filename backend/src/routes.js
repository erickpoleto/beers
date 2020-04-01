const express = require('express');
const MongoUsers = require('./controllers/UsersController');
const MongoUserRate = require('./controllers/UserRateController');
const MongoSession = require('./controllers/SessionController');
const MongoBeer = require('./controllers/BeersController')

const routes = express.Router()

//user
routes.post('/post', MongoUsers.create);
routes.get('/', MongoUsers.index)
routes.delete('/delete', MongoUsers.delete)
//session
routes.post('/sessionpost', MongoSession.create);
//beers
routes.post('/beers/items', MongoBeer.indexCategory);
routes.post('/beers/about', MongoBeer.indexNameBeer);
//userRate
routes.post('/beers/item/rate', MongoUserRate.create);


module.exports = routes;