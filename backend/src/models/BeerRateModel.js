const mongoose = require('mongoose');

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

module.exports = mongoose.model('BeerRate', BeerRateSchema);

