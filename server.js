// express library
const express = require('express');

const ProjectRouter = require('./projects/project-router.js');
const ResourceRouter = require('./projects/resource-router.js');

// to hide express and for react app
// const helmet = require('helmet');
// const cors = require('cors');

const server = express();

// middlewares
server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
// server.use(cors());
// server.use(helmet());
// server.use(logger);

// to test our endpoint
server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Project Manager</h1>');
})

module.exports = server;