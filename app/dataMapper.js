var { normalize, arrayOf } = require('normalizr');
var Schema = require('./schema');
var Promise = require('bluebird');
var DB = require('./DB');
// DB Emitter Initialized

var DBEvents = require('react-native-db-models').DBEvents
// Only "all" event emitter is available

DBEvents.on("all", function(){
    console.log("Database changed");
})

function initializeData() {

  var apiData = fetch('http://bodovino.zerrtech.com/wp-json/posts?type=wine&filter[posts_per_page]=50').then((response) => {
      return apiToWines(JSON.parse(response._bodyText));
  });
  var ratingsData = getRatingsFromStorage();

  return Promise.all([apiData, ratingsData]).then(([wines, ratings]) => {
    console.log(ratings);
    return mergeWinesAndRatings(wines, ratings);
  });
}

function getRatingsFromStorage(callback) {
  return new Promise((resolve, reject) => {
    DB.ratings.get_all((data) => {
      resolve(data.rows);
    });
  });
}

function apiToWines(apiData) {
  var newWines = apiData.map((wine) => {
    return {
      id: wine.ID,
      name: wine.title,
      description: wine.wine_description,
      variety: wine.wine_variety,
      origin: wine.wine_origin,
      image: wine.wine_image.guid,
      color: wine.wine_color,
    }
  });
  var normalized_wines = normalize(newWines, arrayOf(Schema.wine));
  return normalized_wines.entities.wines;
}

function mergeWinesAndRatings(wines, ratings) {
  var newWines = {...wines};
  for(wine in newWines) {
    if(newWines.hasOwnProperty(wine)) { 
      if(ratings && ratings[wine]) {
        newWines[wine].rating = ratings[wine];
      } else {
        newWines[wine].rating = {
          user_id: 'uuid',
          score: undefined,
          notes: '',
        }
      }
    }
  }
  return newWines;
}

exports.mergeWinesAndRatings = mergeWinesAndRatings;
exports.apiToWines = apiToWines;
exports.initializeData = initializeData;