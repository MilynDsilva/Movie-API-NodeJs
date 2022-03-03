const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const CrudSchema = require('../../models/crudOpsSchema');



//Pulls array of objects from 3rd party api and saves parsed objects in db

async function saveTop250MoviesToDB(getMovies){
    
    const newData = getMovies.items;
        try {
            newData.forEach((element) => {
                //console.log(element);
                var movie = new CrudSchema(element);
                movie.save();
                console.log(movie);
        })
        console.log("saved");
        } catch (error) {
            console.log(error);
    }
};

module.exports = { saveTop250MoviesToDB };
