const connection = require('../database/index');

module.exports = {
    async create(req, resp) {
        const{ username, email, password } = req.body;
        try{
            await connection('users').insert({
                username,
                email,
                password
            })
        }catch (e) {
            return resp.status(400).json({error: "Username or Email already exist"});
        }

        return resp.json("succes");
    },

    async index(req, resp){
        const users = await connection('users').select('*');
        return resp.json(users);
    },
    async delete(req, resp) {
        await connection('users').delete();
    }
}