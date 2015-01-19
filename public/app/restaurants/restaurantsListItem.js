var RestaurantsListItem = React.createClass({
  render: function() {
    var ambience = Math.ceil((this.props.restaurant.ambience.rating / this.props.restaurant.ambience.count) * 10) / 10;
    var prices = Math.ceil((this.props.restaurant.prices.rating / this.props.restaurant.prices.count) * 10) / 10;
    var food = Math.ceil((this.props.restaurant.food.rating / this.props.restaurant.food.count) * 10) / 10;
    var drinks = Math.ceil((this.props.restaurant.drinks.rating / this.props.restaurant.drinks.count) * 10) / 10;
    var service = Math.ceil((this.props.restaurant.service.rating / this.props.restaurant.service.count) * 10) / 10;

    return (
      <div>
        {this.props.restaurant.name} 
        <table>
        <tr>
          <td>F</td>
          <td>P</td>
          <td>S</td>
          <td>A</td>
          <td>D</td>
        </tr>
          <td>{food}</td>
          <td>{prices}</td>
          <td>{service}</td>
          <td>{ambience}</td>
          <td>{drinks}</td>
        </table>
      </div>
    )
  }
})