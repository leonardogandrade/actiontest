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
    getAll(req, res) {

    },
    removeOne(req, res) {

    }
};
