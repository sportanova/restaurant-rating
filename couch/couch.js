var nano = require('nano')('http://localhost:5984');
var _ = require('underscore')

var cdb = module.exports = {};
var ratingsView = require('./ratingsView.js')

cdb.init = function(dbName) {
  nano.db.create(dbName);
  var ratingsDB = nano.db.use(dbName);

  var ratings = [
    {
      type: 'rating',
      restaurantId: '1',
      customerId: '2432',
      ratings: {
        ambience: 5,
        food: 3,
        prices: 5,
        service: 3,
        drinks: 1
      }
    },
    {
      type: 'rating',
      restaurantId: '1',
      customerId: '911',
      ratings: {
        ambience: 4,
        food: 2,
        prices: 2,
        service: 4,
        drinks: 5
      }
    }
  ];

  ratingsDB.insert(ratingsView.view, '_design/ratings', function(err, body) {
    _.each(ratings, function(rating) {
      ratingsDB.insert(rating, function(err, body) {
        // if (!err) console.log(body)
      });
    });

    ratingsDB.get('_design/ratings/_view/ratings_by_restaurant', function(err, body) {
      console.log('err', err)
      if (!err)
        console.log(body);
    });

  if (!err) {
    // console.log(body);
  }
  // console.log('error', err)
  });
}