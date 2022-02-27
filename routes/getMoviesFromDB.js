const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../methods/method');
const SoonSchema = require('../models/comingsoonSchema');
const Movie = require('../models/movieSchema');

routes.get("/api", async (request, response) => {
    const users = await Movie.find({});

    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = routes;