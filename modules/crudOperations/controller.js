const { getTopMovie } = require('../../methods/method');
const movieTop250Service = require('./service');


async function saveTop250MoviesRoutHandler(req , res) {
    const getMoviesFromApi = await getTopMovie();
    await movieTop250Service.saveTop250MoviesToDB(getMoviesFromApi);
    res.send(getMoviesFromApi);
}

module.exports = { saveTop250MoviesRoutHandler };