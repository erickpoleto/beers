const mongoose = require('mongoose');

const UsersRateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    beer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BeerRate',
            require: true
        
        }
    ]
})

module.exports = mongoose.model('UsersRate', UsersRateSchema);

