const mongoose = require('mongoose');

function connect() {
    try {
        const connection_string = "mongodb+srv://admin:admin@cluster0.czex64t.mongodb.net/actionsdb?retryWrites=true&w=majority"
        console.log(`${connection_string}`)
        mongoose.connect(connection_string);
        console.log('mongodb connected successfully.')
    } catch (err) {
        console.log(`Error while connectiong to mongodb. -  ${err}.`)
    }
}

module.exports = {
    connect,
}