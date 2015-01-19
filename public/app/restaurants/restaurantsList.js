var RestaurantsList = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    var restaurantNodes = this.props.restaurants.map(function(restaurant, i) {
      return (
        <RestaurantsListItem restaurant={restaurant}/>
      )
    })
    return (
      <div>
        {restaurantNodes}
      </div>
    )
  }
});