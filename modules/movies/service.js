const SoonSchema = require('../../models/comingsoonSchema');


async function saveMovies(comingSoonMovies){
    try {
        const newData = new SoonSchema({
            items: comingSoonMovies
        })
        newData.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
            }
        })
    } catch (error) {
        
    }
    
}
module.exports = { saveMovies };
