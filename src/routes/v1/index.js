const express = require('express');
const ProblemRouter = require('./problem.routes');

const v1Router = express.Router();

v1Router.use('/problem',ProblemRouter);

module.exports = v1Router;