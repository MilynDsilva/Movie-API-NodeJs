const express = require('express');
const app = express();
const routes = express.Router();
const mongoose = require('mongoose');


const Movie = mongoose.model('Movie',{
    items: {type : Object}
    // id: {type: Number},
    // title: { type: String },
    // fullTitle: { type: String},
    // contentRating: { type: String}
});

module.exports = Movie;