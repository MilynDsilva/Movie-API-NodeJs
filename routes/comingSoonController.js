const express = require('express');
const app = express();
const routes = express.Router();
const request = require('request');
const axios = require('axios');
const { getComingSoon } = require('../methods/method');
const SoonSchema = require('../models/comingsoonSchema');

routes.get('/api',async(request,response)=>{
    const getComing = await getComingSoon();
    response.send(getComing);

    const newData = new SoonSchema({
        items: getComing
    })
      
    newData.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }
    })
});

module.exports = routes;