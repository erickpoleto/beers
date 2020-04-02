const {beerid, userid, rate} = req.body
        let boo = false
        //search beer, verify if userid already exists in this context
        const beerRate = await BeerRate.find({'beerid': beerid}, async (err, beerRateExists) => {
            await beerRateExists.forEach(async (item , index) => {
                if(item.userid == userid){
                    boo = true
                }
            });
        });
        //if id isnt exists create a new object
        if(beerRate.length == 0) {
            const createdRate = await BeerRate.create({beerid, userid, rate});
            return res.json(createdRate)
        }else{
            //if user dont exist in this context
            if(boo == false) {
                //create a new object
                const createUserRate = await BeerRate.create({beerid, userid, rate});
                console.info("create: ", createUserRate)
            }else{
                //else remove node and create new
                const deleteUserRate = await BeerRate.deleteMany({"beerid":beerid, "userid":userid});
                const createNewUserRate = await BeerRate.create({beerid, userid, rate});
                console.info("delete: ", deleteUserRate);
            }
        }