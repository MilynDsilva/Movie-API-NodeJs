const express = require('express');
const app = express();
const routes = express.Router();
const mongoose = require('mongoose');


const CrudSchema = mongoose.model('CrudSchema',{
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

module.exports = CrudSchema;