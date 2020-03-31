const mongoose = require("mongoose")

const User = require("../models/users");

module.exports = {
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
        
    },
    async create(req, res) {
        try{
            await User.create({
                username:"erick",
                email:"erick-poelto",
                password:"150"
            });
            return res.json('done');
        }catch(e){
            return res.status(400).json("error")
        }
    },
    async delete(req, res) {
        await User.deleteMany({name: "erick"});
        return res.json("done");
    }
};