const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type : mongoose.ObjectId,
        required: true
    },
    email: {
        type: mongoose.ObjectId,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('User', UserSchema);