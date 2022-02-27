const express = require('express');
const app = express();
const topMoviesController = require('./routes/topMoviesController');
const comingSoonController = require('./routes/comingSoonController');

app.use(express.json());
app.use('/topmovie',topMoviesController);
app.use('/comingsoon',comingSoonController);

const port = process.env.PORT || 9090;
app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
});

module.exports = app;