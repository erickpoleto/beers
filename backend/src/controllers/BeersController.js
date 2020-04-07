const mongoose = require("mongoose");
const Beer = require('../models/BeersModel')
const BeerRate = require("../models/BeerRateModel")
module.exports = {
    async indexSearch(req, res) {
        try{
            const { page = 1, search } = req.query
            const regex = new RegExp(search, "i")
            const paginate = await Beer.paginate({$or:[{category:regex}, {name:regex}]}, { page:page, limit: 10})
            return res.json(paginate)
        }catch(err){
            console.info(err);
            return res.status(400).send({error: "something went wrong"});
        }
    },
    async indexNameBeer(req, res){
        const {name} = req.body
        const beers = await Beer.find({name : name});
        return res.json(beers)
    }
}