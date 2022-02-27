const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getTopMovie } = require('../methods/method');
const Movie = require('../models/movieSchema');
  

routes.get('/api',async(request,response)=>{
    const getMovie = await getTopMovie();
    response.send(getMovie);
    const newData = new Movie({
        items: getMovie
    })
      
    newData.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }
    })
});

module.exports = routes;