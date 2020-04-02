const mongoose = require("mongoose");

const User = require("../models/UsersModel")


module.exports = {

    async create(req, res) {
        
        /*const {id, beerid, rate, voted} = req.body;
        const user = await User.findById({'_id': id}, async (err, user) => {
            const listId = []
            await user.likedbeers.forEach(async (item, index) => {
                if(item.beerid == beerid){
                    await listId.push(index);
                }
            });
            if(listId.length == 0){
                await user.likedbeers.push({beerid, rate, voted});
                user.save()
                return res.json(`item ${beerid} add`)
            }else{
                user.likedbeers.splice(listId[0], 1)
                await user.likedbeers.push({beerid, rate, voted})
                user.save()
                return res.json(user.likedbeers)
            }
        });*/
    }
}