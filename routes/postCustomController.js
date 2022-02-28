const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../methods/method');
const CustomSchema = require('../models/customSchema');

routes.get('/', async(req, res) => {
    try {
        const getMoviesAPI = await axios.get(`http://localhost:9090/post/api3`)
        console.log(getMoviesAPI.data)
        res.send(getMoviesAPI.data);
        //res.render('news', { articles : newsAPI.data })
    } catch (err) {
        // if(err.response) {
        //     res.render('news', { articles : null })
        //     console.log(err.response.data)
        //     console.log(err.response.status)
        //     console.log(err.response.headers)
        // } else if(err.requiest) {
        //     res.render('news', { articles : null })
        //     console.log(err.requiest)
        // } else {
        //     res.render('news', { articles : null })
        res.send(getMoviesAPI.data);
        console.error('Error', err.message)
        // }
    } 
})

routes.post('/api',(req,res)=>{
    const newData = new CustomSchema({
        id : req.body.id,
        rank: req.body.rank,
        title: req.body.title,
        fullTitle : req.body.fullTitle,
        year: req.body.year,
        image: req.body.image,
        crew: req.body.crew,
        imDbRating: req.body.imDbRating,
        imDbRatingCount: req.body.imDbRatingCount
        
    })
      
    newData.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
            res.send(newData);
        }
    })
});

routes.get("/api3", async (request, response) => {
    const users = await CustomSchema.find({});

    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });


module.exports = routes;



        // const result = request.body;
    
    //     if(result.error){
    //     //400 bad request
    //         res.status(400).send(result.error.details[0].message);
    //         return; //exits here 
    //     }
    //     const course = {
    //         id: courses.length+1,
    //         name: req.body.name
    //     };
    //     courses.push(course);
    //     res.send(course); 
    // });