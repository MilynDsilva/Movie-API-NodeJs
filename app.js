const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
const topMoviesController = require('./routes/topMoviesController');
const comingSoonController = require('./routes/comingSoonController');
const getMoviesFromDB = require('./routes/getMoviesFromDB');
const getComingSoonFromDB = require('./routes/getComingSoonFromDB');
const postCustomController = require('./routes/postCustomController')

mongoose.connect('mongodb://localhost:27017/movie-db');


app.use(express.json());
app.use('/topmovie',topMoviesController);
app.use('/comingsoon',comingSoonController);
app.use('/getmovie',getMoviesFromDB);
app.use('/getcomingsoon',getComingSoonFromDB);
app.use('/post',postCustomController);

const port = process.env.PORT || 9090;
app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
});

module.exports = app;
module.exports = mongoose;