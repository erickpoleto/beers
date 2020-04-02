const mongoose = require("mongoose")

const User = require("../models/UsersModel");
const token = require("../modules/token")

module.exports = {
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
        
    },
    async create(req, res) {
        const { email } = req.body
        try{
            if(await User.findOne({"email":email})){
                return res.status(400).send({error: "email already in use"})
            }
            const user = await User.create(req.body);
            user.password = undefined
            return res.send({user, token: token.token({id: user.id})});
            
        }catch(e){
            console.info(e)
            return res.status(400).send({error: "registration failed"});
        }
    },
    async delete(req, res) {
        await User.deleteMany({username: /f/});
        return res.json("done");
    }
};