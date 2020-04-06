const mongoose = require('mongoose')
const update = require('../modules/newVote')
const BeerRate = require('../models/BeerRateModel')
const UsersRate = require('../models/UsersRateModel')

module.exports = {
    async create(req, res){
        const {beer, rate} = req.body
        try{
            if(await BeerRate.findOne({beer, user: req.userId})){
                update(BeerRate, beer, rate, req);
                return res.status(200).send();             
            }
            const beerRate = await BeerRate.create({user: req.userId, rate: rate, beer: beer });
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
    }
}