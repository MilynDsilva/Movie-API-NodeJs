const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../methods/method');
const CrudSchema = require('../models/crudOpsSchema');
const { route } = require('./topMoviesController');
const { getTopMovie } = require('../methods/method');

//Entry point to load ejs template localhost:9090/crud/

// routes.get('/test', async(req, res) => {
//     try {
//         const getallMovies = await axios.get(`http://localhost:9090/crud/getall`)
//         console.log(getallMovies.data)
//         res.render('Movies', { movieData : getallMovies.data })
//     } catch (err) {
//         res.render('Movies', { movieData : getallMovies.data })
//         console.error('Error', err.message)
//     } 
// });



//Pulls array of objects from 3rd party api and saves parsed objects in db

// routes.get('/pull',async (req,response)=>{
//     const getMovie = await getTopMovie();
//     const newData = getMovie.items;

//     try {
//         newData.forEach((element) => {
//             //console.log(element);
//             var movie = new CrudSchema(element);
//             movie.save();
//             console.log(movie);
//        });
//        response.send("saved");
//     } catch (error) {
//         console.log(error);
//     }

    

//     });

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

//To get  an object by id 

routes.get('/data/:id',async (req,res)=>{
   
    const users = await CrudSchema.find({});

    try {
        const datafound = users.find((c)=>c.id === req.params.id);
        if(!datafound) {
            res.send('Movie id does not exist');
            return;
        }
        const updatedData = await CrudSchema.findOne( {id: req.params.id});
        res.send(updatedData);
      } catch (error) {
        res.status(500).send(error);
      }
    
});;

//To update existing data on db by id (title in body)

routes.put('/data/:id',async(req,res)=>{

    const movie = await CrudSchema.find({});

    try {
        const datafound = movie.find((c)=>c.id === req.params.id);
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

routes.get('/:page', async (req, res, next) =>{
    const perPage = 5
    const page = req.params.page || 1
    const skip = ((perPage * page) - perPage);
    console.log()
        try {
            const data1 = await CrudSchema
        .find({})
        .skip(skip)
        .limit(perPage)
        const totalcount = await CrudSchema.count();

        res.render('Movies', {
            movieData: data1,
            current: page,
            pages: Math.ceil(totalcount / perPage)
        })
        } catch (error) {
           console.log(error) 
    }     
})

module.exports = routes;