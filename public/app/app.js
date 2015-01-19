var App = React.createClass({
  getInitialState: function() {
    return {
      restaurants: []
    }
  },
  componentDidMount: function() {
    this.getRestaurants()
  },
  render: function() {
    return (
      <div>
        <div className='sidePane'>
          <Search/>
          <RestaurantsList restaurants={this.state.restaurants}/>
        </div>
      </div>
    );
  },
  getRestaurants: function() {
    this.setState({
      restaurants: restaurantsDummyData
    });
  }
})

function Rating() {
}

Rating.prototype.init = function(domNode, attrs) {
  this.react = React.render(<App attrs={attrs}/>, domNode);
  return this.react;
};

Rating.prototype.setState = function(attrs) {
  this.react.setState(attrs);
};