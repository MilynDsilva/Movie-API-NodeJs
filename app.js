const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const topMoviesController = require('./routes/topMoviesController');
const comingSoonController = require('./modules/movies/');
const getMoviesFromDB = require('./routes/getMoviesFromDB');
const getComingSoonFromDB = require('./routes/getComingSoonFromDB');
const postCustomController = require('./routes/postCustomController')
const crudOpsMovies = require('./routes/crudOpsMovies');
const Movie = require('./models/movieSchema');
const crudOpsmovie = require('./modules/crudOperations/index');
//const movieRoute = require('./view/Movies');

mongoose.connect('mongodb://localhost:27017/movie-db');

app.set('views','./view');
app.use(express.static('public'))
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}))


app.use(express.urlencoded({extended:true}));
app.use(express.json());
//app.use('/',movieRoute);
app.use('/topmovie',topMoviesController);
app.use('/comingsoon',comingSoonController);
app.use('/getmovie',getMoviesFromDB);
app.use('/getcomingsoon',getComingSoonFromDB);
app.use('/post',postCustomController);
app.use('/crud',crudOpsMovies);
app.use('/crud1',crudOpsmovie);



const port = process.env.PORT || 9090;
app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
});

module.exports = app;
module.exports = mongoose;