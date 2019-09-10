const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/cars', (req, res) => {
    res.status(200).send('...up')
})

module.exports = server;
