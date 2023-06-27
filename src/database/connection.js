const mongoose = require('mongoose');
require('dotenv').config();
function connect() {
    try {
        console.log(`${process.env.MONGO_DB}`)
        mongoose.connect(process.env.MONGO_DB);
        console.log('mongodb connected successfully.')
    } catch (err) {
        console.log(`Error while connectiong to mongodb. -  ${err}.`)
    }
}

module.exports = {
    connect,
}