const mongoose = require("mongoose")

const User = require("../models/users");

module.exports = {
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
        
    },
    async create(req, res) {
         
        try{
            const user = await User.create(req.body);
            return res.json(user);
        }catch(e){
            return res.status(400).json("username or email already exists")
        }
    },
    async delete(req, res) {
        await User.deleteMany({name: "erick"});
        return res.json("done");
    }
};