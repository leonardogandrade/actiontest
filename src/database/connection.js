const mongoose = require('mongoose');

function connect() {
    try {
        mongoose.connect("mongodb+srv://admin:admin@cluster0.czex64t.mongodb.net/actionsdb?retryWrites=true&w=majority");
        console.log('mongodb connected successfully.')
    } catch (err) {
        console.log(`Error while connectiong to mongodb. -  ${err}.`)
    }
}

module.exports = {
    connect,
}