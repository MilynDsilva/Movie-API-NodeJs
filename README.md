# Movie-API-NodeJs
###
###### "Simple Js API project which includes pulling data from 3rd party movies API , Storing data in MongoDB , Pulling data from MongoDB , CRUD operations and displaying data on EJS view page"
#### - Link to the Movies API : https://imdb-api.com/api
#### - Requires an IDE (*VS Code , Sublime Text*) : https://code.visualstudio.com/
#### - Requires Node Js : https://nodejs.org/en/
#### - Requires MongoDB database: https://www.mongodb.com/try/download/community
#### - Requires API end point testing tool (Postman recommended) : https://www.postman.com/downloads/


###### Sample api object body for single object insertion :
```
{
    "id": "65",
    "rank": "1",
    "title": "test",
    "fullTitle": "some title",
    "year": "1994",
    "image": "https://some-image.jpg",
    "crew": "Some crew",
    "imDbRating": "9.2",
    "imDbRatingCount": "255089"
}
```

###### Sample api object body for multiple object insertion :
```
[
    {
        "id": "66",
        "rank": "1",
        "title": "test",
        "fullTitle": "some title",
        "year": "1994",
        "image": "https://some-image.jpg",
        "crew": "Some crew",
        "imDbRating": "9.2",
        "imDbRatingCount": "255089"
    },
    {
        "id": "67",
        "rank": "1",
        "title": "test",
        "fullTitle": "some title",
        "year": "1994",
        "image": "https://some-image.jpg",
        "crew": "Some crew",
        "imDbRating": "9.2",
        "imDbRatingCount": "255089"
    }
]
```
###### Install npm module express , axios , bodyparser , mongoose and nodemon
###### **To run**: ```npx nodemon app.js```

###### Movies Page
[![poc-mvi.png](https://i.postimg.cc/jdpCckrr/poc-mvi.png)](https://postimg.cc/bsRzNgJ6)

###### Single Movie Page
[![mvi-single.png](https://i.postimg.cc/Dz9Prcyj/mvi-single.png)](https://postimg.cc/ns1mZBmB)
