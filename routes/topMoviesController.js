const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getTopMovie } = require('../models/method');

routes.get('/api',async(request,response)=>{
    const getMovie = await getTopMovie();
    //console.log(getMovie);
    response.send(getMovie);
});


module.exports = routes;