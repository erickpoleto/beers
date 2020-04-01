const mongoose = require('mongoose');

const RateBeer = new mongoose.Schema({
    beerid: {
        type:Number
    },
    rate: {
        type: Number
    },
    voted: {
        type: Boolean
        }
})

const UserSchema = new mongoose.Schema({
    username: {
        type : String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailconfirmed: {
        type:Boolean,
        default:false
    },
    likedbeers: [ RateBeer ],
    createdAt: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('User', UserSchema);