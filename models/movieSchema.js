const express = require('express');
const app = express();
const routes = express.Router();
const mongoose = require('mongoose');


const Movie = mongoose.model('Movie',{
    items: { type: Array }
});

module.exports = Movie;