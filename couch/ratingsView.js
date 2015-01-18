var ratingsView = module.exports = {};

// if statements because we only want to increment value + counter if user rated that aspect
var reduceRatings = function(keys, values, rereduce) {
  var rating =  {
    ambience: {rating: 0, count:0},
    food: {rating: 0, count:0},
    prices: {rating: 0, count:0},
    service: {rating: 0, count:0},
    drinks: {rating: 0, count:0}
  };

  if(rereduce) {
    for(var i = 0; i < values.length; i++) {
        rating.ambience.rating = rating.ambience.rating + values[i].ambience.rating
        rating.ambience.count = rating.ambience.count + values[i].ambience.count;

        rating.food.rating = rating.food.rating + values[i].food.rating
        rating.food.count = rating.food.count + values[i].food.count;

        rating.prices.rating = rating.prices.rating + values[i].prices.rating
        rating.prices.count = rating.prices.count + values[i].prices.count;

        rating.service.rating = rating.service.rating + values[i].service.rating
        rating.service.count = rating.service.count + values[i].service.count;

        rating.drinks.rating = rating.drinks.rating + values[i].drinks.rating
        rating.drinks.count = rating.drinks.count + values[i].drinks.count;
    }

    return rating;
  }
  else {
    for(var i = 0; i < values.length; i++) {
      if(values[i].ambience) {
        rating.ambience.rating = rating.ambience.rating + values[i].ambience;
        rating.ambience.count = rating.ambience.count + 1;
      }

      if(values[i].food) {
        rating.food.rating = rating.food.rating + values[i].food;
        rating.food.count = rating.food.count + 1;
      }

      if(values[i].prices) {
        rating.prices.rating = rating.prices.rating + values[i].prices;
        rating.prices.count = rating.prices.count + 1;
      }

      if(values[i].service) {
        rating.service.rating = rating.service.rating + values[i].service;
        rating.service.count = rating.service.count + 1;
      }

      if(values[i].drinks) {
        rating.drinks.rating = rating.drinks.rating + values[i].drinks;
        rating.drinks.count = rating.drinks.count + 1;
      }
    }

    return rating;
  }
}

ratingsView.view = {
  "language": "javascript",
  "views": {
    "ratings_by_restaurant": {
      "map": "function(doc) { if (doc.type == 'rating')  emit(doc.restaurantId, doc.ratings) }",
      "reduce": "" + reduceRatings
    }
  }
};