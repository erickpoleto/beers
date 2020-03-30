const connection = require('../database/index')

module.exports = {
    async create(req, resp) {
        const { name, password } = req.body;

        const user = await connection('users')
            .where({'name': name, 'password': password})
            .select('name')
            .first();
        if(!user) {
            return resp.status(400).json({ error: "no ong found with this id"});
        }

        return resp.json(`hello ${user.name}`);
    }
}