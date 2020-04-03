const mongoose = require('mongoose')
const update = require('../modules/newVote')

const BeerRate = require('../models/BeerRateModel')
module.exports = {
    async create(req, res){
        const {beer, rate} = req.body
        try{
            const find = await BeerRate.findOne({beer, user: req.userId})
            if(find){
                update(BeerRate, beer, rate, req);  
                return res.status(200).send()             
            }
            const beerRate = await (await BeerRate.create({user: req.userId, rate: rate, beer: beer }));
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
            await BeerRate.deleteOne({user: req.userId, beer: beer});
            return res.send("deletados")
        }catch(err){
            return res.send("deletados")
        }
    }
}