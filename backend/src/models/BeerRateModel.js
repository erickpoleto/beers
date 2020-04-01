const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate")

const BeerVoteSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    rate: {
        type:Number
    }
})

module.exports = mongoose.model('BeerVote', BeerVoteSchema);

