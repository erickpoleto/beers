const mongoose = require('mongoose');

const User = require('../models/users')

module.exports = {
    async create(req, resp) {
        const { username, password } = req.body;
        const user = await User.find({"username": username, "password":password});
        if(user == ''){
            return resp.status(400).json("not exist")
        }
        console.info(user)
        return resp.json("done");
    }
}