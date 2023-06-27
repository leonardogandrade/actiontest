const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = {
    async create(req, res) {
        const payload = req.body
        const result = await User.create(payload);

        res.json({
            data: result,
            msg: 'user created successfully'
        })
    },
    async getAll(req, res) {
        const result = await User.find();
        res.json(result)
    },
    removeOne(req, res) {

    }
};
