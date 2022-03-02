const express = require('express');
const routes = express.Router();
const routHandler = require('./controller')

routes.get('/pull-movies',routHandler.saveMoviesRoutHandler);

module.exports = routes;