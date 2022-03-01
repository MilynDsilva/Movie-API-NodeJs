const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../methods/method');
const CrudSchema = require('../models/crudOpsSchema');

routes.get('/', async(req, res) => {
    try {
        const getallMovies = await axios.get(`http://localhost:9090/crud/getall`)
        console.log(getallMovies.data)
        res.render('Movies', { movieData : getallMovies.data })
    } catch (err) {
        res.render('Movies', { movieData : getallMovies.data })
        console.error('Error', err.message)
    } 
})

routes.post('/single',(req,res)=>{
    const newData = new CrudSchema({
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

routes.post('/multi',(req,res)=>{
    
    req.body.forEach(function(newData) {
        var crudSchema = new CrudSchema(newData);
        crudSchema.save();
        console.log(crudSchema);
        //res.send(customSchema);
      });
     res.send("Saved");
    });

routes.get("/getall", async (request, response) => {
    const users = await CrudSchema.find({});

    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });


module.exports = routes;