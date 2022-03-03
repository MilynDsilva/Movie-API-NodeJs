const express = require('express');
const routes = express.Router();
const routHandler = require('./controller')

routes.get('/pull',routHandler.saveTop250MoviesRoutHandler);

module.exports = routes;