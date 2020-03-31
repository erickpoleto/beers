const mongoose = require('mongoose');

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
    likedbeers: {
        name: {
            type: String
        }
    },
    confirmed: {
        type:Boolean,
        default:false
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('User', UserSchema);