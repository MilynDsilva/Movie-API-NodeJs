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
        items: getMovie.items
        // id: getMovie.items.id,
        // title: getMovie.items.title,
        // fullTitle: getMovie.items.fullTitle,
        // contentRating: getMovie.items.contentRating
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

// routes.post('/multi',(req,res)=>{
    
    // req.body.forEach(function(newData) {
    //     var movie = new Movie(newData);
    //     movie.save();
    //     console.log(movie);
    //     //res.send(customSchema);
    //   });
    //  res.send("Saved");
    // });

routes.get('/api1',async (req,response)=>{
    const getMovie = await getTopMovie();
    const newData = getMovie.items;

    newData.forEach((element) => {
         //console.log(element);
         var movie = new Movie(element);
         movie.save();
         console.log(movie);
    });
    response.send("saved");

    });


module.exports = routes;