const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/UsersModel')
const tokens = require('../modules/token')
const mailer = require('../modules/mailer')

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return res.status(400).send({error: "user not found"})
        }
        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({error: "password invalid"})
        }
        user.password = undefined

        return res.send({ user, 
            token: tokens.token({id: user.id}) 
        });
    },
    async createForgotPassword(req, res){
        const {email} = req.body

        try {
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).send({error: "user not found"})
            }
            const token = crypto.randomBytes(20).toString('hex');
            const now = new Date();
            now.setHours(now.getHours() + 1);

            await User.findByIdAndUpdate(user.id, {$set: {
                passwordResetToken: token,
                passwordResetExpires: now,
            }})
            await mailer.sendMail({
                to: email,
                from: 'erick-poleto@hotmail.com',
                template: '/forgotPassword',
                context: {token}
            }, err => {
                if(err){
                    console.info(err)
                    return res.status(400).send({error: 'cannot send email'})
                }
                return res.send();
            })
        }catch(err){
            console.info(err)
            res.status(400).send({eeror: "error, try again"})
        }
    },
    async resetPassword(req, res) {
        const {email, token, password} = req.body
        try{
            const user = await User.findOne({email})
            .select('+passwordResetToken passwordResetExpires');
            if(!user){
                return res.status(400).send({error: "user not found"})
            }
            if(token !== user.passwordResetToken){
                return res.status(400).send({error: "token invalid"})
            }
            const now = new Date();
            if(now > user.passwordResetExpires){
                return res.status(400).send({error: "token expired, generate again"})
            }
            user.password = password
            await user.save();

            res.send();

        }catch(err){
            console.info(err)
            res.status(400).send({ error: "cannot reset"})
        }
    }
}