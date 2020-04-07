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
const UsersRate = require('./models/UsersRateModel'); 


//user
routes.get('/', MongoUsers.index)
routes.post('/register', MongoUsers.create);
routes.post('/confirm', MongoUsers.checkConfirmation);
//session
routes.post('/session/verify', MongoSession.create);
routes.post('/session/forgotPassword', MongoSession.createForgotPassword);
routes.post('/session/resetPassword', MongoSession.resetPassword);
//app
routes.get('/token/test', MongoApp.index)
//beers
routes.post('/items', MongoBeer.indexSearch);
routes.post('/about', MongoBeer.indexSearch);
//beerRate
routes.use(authMiddleware).post('/rate', MongoBeerRate.create)
routes.get('/rate/all', MongoBeerRate.index)
routes.delete('/delete', MongoBeerRate.delete)

routes.get('/testUsers', async(req, res) =>{
    const UserRate = await UsersRate.find({user: req.userId}).populate(["user", "beer"]).populate({path: "beer", populate: {path:"beer"}})
    return res.json({UserRate})
})

module.exports = (routes);