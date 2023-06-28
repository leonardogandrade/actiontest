const mongoose = require('mongoose');

function connect() {
    try {
        mongoose.connect(process.env.MONGO_DB);
        console.log('mongodb connected successfully.')
    } catch (err) {
        console.log(`Error while connectiong to mongodb. -  ${err}.`)
    }
}

module.exports = {
    connect,
}