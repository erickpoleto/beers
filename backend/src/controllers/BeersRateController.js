const mongoose = require('mongoose')

const BeerRate = require('../models/BeerRateModel')

module.exports = {
    async create(req, res){
        
    },
    async index(req, res){

        const beerRate = await BeerRate.find()

        return res.json(beerRate)
    },
    async delete(req, res) {
        const beerDelete = await BeerRate.deleteMany()
        return res.json(beerDelete)
    }
}