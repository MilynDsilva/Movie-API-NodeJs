const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../models/method')

routes.get('/api',async(request,response)=>{
    const getComing = await getComingSoon();
    //console.log(getMovie);
    response.send(getComing);
});

module.exports = routes;