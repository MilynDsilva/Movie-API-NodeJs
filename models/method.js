const express = require('express');
const routes = express.Router();
const request = require('request');
const axios = require('axios');

const url = `https://imdb-api.com/en/API/Top250Movies/k_an9yo7t4`;
const url2 = `https://imdb-api.com/en/API/ComingSoon/k_an9yo7t4`;

const getTopMovie = async()=>{
    try {
        const response = await axios.get(url);
        //console.log(response)
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

const getComingSoon = async()=>{
    try {
        const response = await axios.get(url2);
        //console.log(response)
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

module.exports.getTopMovie = getTopMovie;
module.exports.getComingSoon = getComingSoon;