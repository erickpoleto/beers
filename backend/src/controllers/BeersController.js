const mongoose = require("mongoose");
const Beer = require('../models/BeersModel')

module.exports = {
    async indexCategory(req, res) {

        const { page = 1 } = req.query
        const {category} = req.body
        const beers = await Beer.paginate({category : category}, { page:page, limit: 10});
        return res.json(beers.docs);
    },

    async indexNameBeer(req, res){
        const {name} = req.body
        const beers = await Beer.find({name : name});
        return res.json(beers)
    }
}