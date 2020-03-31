const express = require('express');
const MongoUsers = require('./controllers/MongoUsers');
const MongoSession = require('./controllers/MongoSession');
const MongoBeer = require('./controllers/MongoBeer')

const routes = express.Router()

//mongo
routes.post('/post', MongoUsers.create);
routes.get('/', MongoUsers.index)
routes.delete('/delete', MongoUsers.delete)

routes.post('/sessionpost', MongoSession.create);

routes.post('/beersitems', MongoBeer.indexCategory);
routes.post('/beersabout', MongoBeer.indexNameBeer);

module.exports = routes;