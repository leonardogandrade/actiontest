const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const requireDir = require('require-dir');
requireDir('./src/models')
require('dotenv').config({ path: __dirname + '/.env' });
const db = require('./src/database/connection')
const routes = require('./src/routes');
const PORT = 3009;

//Connection
db.connect();

server.use('/', routes);

server.listen(PORT);
console.log('Server is on');
