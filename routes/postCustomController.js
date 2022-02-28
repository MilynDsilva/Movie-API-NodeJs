const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../methods/method');
const CustomSchema = require('../models/customSchema');

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

routes.post('/api1',(req,res)=>{
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

    CustomSchema.create(newData, function (err, temps) {

        if (err) {
            console.log(err);
            return res.send('Error saving');
        }
    
        res.send(newData);
    
    });
      
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