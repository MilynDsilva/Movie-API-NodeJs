const express = require('express');
const app = express();
const routes = express.Router();
const mongoose = require('mongoose');


const SoonSchema = mongoose.model('SoonSchema',{
    items: { type: Array }
});

module.exports = SoonSchema;


// _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   }