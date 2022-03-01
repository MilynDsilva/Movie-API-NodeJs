const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../methods/method');
const CrudSchema = require('../models/crudOpsSchema');
const { route } = require('./topMoviesController');

//Entry point to load ejs template localhost:9090/crud/

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

//To post single object to db

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

//To post multiple objects using array of objects to db

routes.post('/multi',(req,res)=>{
    
    req.body.forEach(function(newData) {
        var crudSchema = new CrudSchema(newData);
        crudSchema.save();
        console.log(crudSchema);
        //res.send(customSchema);
      });
     res.send("Saved");
    });

//To fetch all the data saved in db

routes.get("/getall", async (request, response) => {
    const users = await CrudSchema.find({});

    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//To delete an object by id and update in db

routes.delete('/data/:id',async (req,res)=>{
   
    const users = await CrudSchema.find({});

    try {
        const datafound = users.find((c)=>c.id === req.params.id);
        if(!datafound) {
            res.send('Movie id does not exist');
            return;
        }
        const updatedData = await CrudSchema.deleteOne( {id: req.params.id});
        res.send(updatedData);
      } catch (error) {
        res.status(500).send(error);
      }
    
});;

//To update existing data on db by id (title in body)

routes.put('/data/:id',async(req,res)=>{

    const users = await CrudSchema.find({});

    try {
        const datafound = users.find((c)=>c.id === req.params.id);
        if(!datafound) {
            res.send('Movie id does not exist');
            return;
        }
        const updatedDataOne = await CrudSchema.findOneAndUpdate({title: req.body.title});
        console.log(updatedDataOne);
        res.send(updatedDataOne);
      } catch (error) {
        res.status(500).send(error);
      }
});

module.exports = routes;