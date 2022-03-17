const express = require('express');
const app = express();
const routes = express.Router();
const mongoose = require('mongoose');


const Movie = mongoose.model('Movie',{
    id : { type : String },
    rank: { type : String },
    title: { type : String },
    fullTitle : { type : String },
    year: { type: String},
    image: { type: String },
    crew: { type: String },
    imDbRating: { type: String },
    imDbRatingCount: { type: String }
});

module.exports = Movie;
