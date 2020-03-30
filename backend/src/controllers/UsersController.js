const connection = require('../database/index');

module.exports = {
    async create(req, resp) {
        const{ name, email, password } = req.body;

        await connection('users').insert({
            name,
            email,
            password
        })

        return resp.json("succes");
    },

    async index(req, resp){
        const users = await connection('users').select('*');
        return resp.json(users);
    }
}