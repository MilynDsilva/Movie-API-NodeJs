const { getComingSoon } = require('../../methods/method');
const movieService = require('./service');


async function saveMoviesRoutHandler(req , res) {
    const comingSoonMovies = await getComingSoon();
    await movieService.saveMovies(comingSoonMovies);
    res.send(comingSoonMovies);
}


module.exports = { saveMoviesRoutHandler};

