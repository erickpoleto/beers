const connection = require('../database/index')

module.exports = {
    async create(req, resp) {
        const { username, password } = req.body;
        const user = await connection('users')
            .where('username',username)
            .andWhere('password', password)
            .select('username')
            .first();
        if(!user) {
            return resp.status(400).json({ error: "name or password are wrong"});
        }

        return resp.json(`hello ${user.username}`);
    }
}