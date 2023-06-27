const express = require('express');
const server = express();
const requireDir = require('require-dir');
requireDir('./src/models')
require('dotenv').config();
const db = require('./src/database/connection')
const routes = require('./src/routes');
const PORT = 3005;

//Connection
db.connect();

server.use('/', routes);

server.listen(PORT);
console.log('Server is on');
