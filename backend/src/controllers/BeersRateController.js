const mongoose = require('mongoose')

const update = require('../modules/newVote')
const updateRateBeer = require('../modules/updateRateBeer')

const BeerRate = require('../models/BeerRateModel')
const UsersRate = require('../models/UsersRateModel')
const Users = require('../models/UsersModel')

module.exports = {
    async create(req, res){
        const {beer, rate} = req.body
        try{
            const userVerify = Users.findOne({user: req.userId})

            if(userVerify.confirmed == false){
                return res.status(400).send({error: "user not confirmed"})
            }
            if(await BeerRate.findOne({beer, user: req.userId})){
                update(BeerRate, beer, rate, req);
                await updateRateBeer(beer);
                return res.status(200).send();             
            }
            const beerRate = await BeerRate.create({user: req.userId, rate: rate, beer: beer });
            await updateRateBeer(beer);

            if(!await UsersRate.findOne({user: req.userId})){
                UsersRate.create({user: req.userId, beer: beerRate._id})
                return res.status(200).send({done: "rate created"})                
            }
            try{
                const userRate = await UsersRate.findOne({user: req.userId}, async(err, userRates)=>{
                    userRates.beer.push(beerRate._id)
                    await userRates.save()
                    return;
                })
            }catch(e){
                return res.status(400).send({error: "some error ocurred when saving your rate, try again"})
            }
            return res.send({beerRate});
            
        }catch(err){
            console.info(err)
            return res.status(400).send({error: "error with the rate, try again"})
        }
    },
    async index(req, res){
        const beerRate = await BeerRate.find().populate(['user', 'beer'])
        return res.json(beerRate)
    },
    async delete(req, res) {
        const {beer} = req.body
        try{
            await BeerRate.deleteMany({});
            return res.send("deletados")
        }catch(err){
            return res.send("deletados")
        }
    },
    async profile(req, res) {
        const {page = 1} = req.query
        const UserRate = await BeerRate.paginate({user: req.userId},
            {populate:"beer", select:{"beer":1, "_id": 0}, page:page, limit:10})  
        return res.json({UserRate})  
    }
}