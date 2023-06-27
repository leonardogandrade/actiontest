const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
