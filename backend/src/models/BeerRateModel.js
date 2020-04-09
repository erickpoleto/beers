const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate")

const BeerRateSchema = new mongoose.Schema({
    beer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Beers',
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    rate: {
        type:Number
    }
})

BeerRateSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('BeerRate', BeerRateSchema);

