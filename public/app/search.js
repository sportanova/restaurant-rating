var Search = React.createClass({
  getInitialState: function() {
    return {
      categories: [
        {
          priority: 0,
          name: 'Food',
          rating: 3,
          isActive: true,
          key: Math.random()
        }, 
        {
          priority: 1,
          name: 'Prices',
          rating: 3,
          isActive: true,
          key: Math.random()
        }, 
        {
          priority: 2,
          name: 'Service',
          rating: 3,
          isActive: true,
          key: Math.random()
        },
        {
          priority: 3,
          name: 'Ambience',
          rating: 3,
          isActive: true,
          key: Math.random()
        },
        {
          priority: 4,
          name: 'Drinks',
          rating: 3,
          isActive: true,
          key: Math.random()
        }
      ]
    }
  },
  render: function() {
    var that = this;
    var categories = this.state.categories.map(function(category) {
      var className = {};
      if(!category.isActive) {
        console.log('inactive')
        className = {color: 'red'}
      }

      return (
        <div style={className}>
          <span onClick={that.changePriorities.bind(that, category, 'up')}>&#8593;</span>
          <span onClick={that.changePriorities.bind(that, category, 'down')}>&#8595;</span>
          <span onClick={that.changePriorities.bind(that, category, 'cancel')}>x</span>
          {category.name} <span>{category.rating}</span>
        </div>
      )
    });

    return (
      <div className='searchBar'>
          {categories}
      </div>
    )
  },
  changePriorities: function(category, action) {
    if(action === 'up' && !category.isActive) { // isn't active, so reactivate
      var categories = this.state.categories.slice();
      categories[category.priority].isActive = true;

      this.setState({categories: categories});
    }
    else if(action === 'down' && !category.isActive) { // is already inactive
    }
    else if(action === 'up' && category.priority !== 0) { // is active, and isn't already in 1st so move up
      var oldCategoryPriority = category.priority;
      var newCategoryPriority = category.priority - 1;
      category.priority = newCategoryPriority;

      var categories = this.state.categories.slice();

      var displacedCategory = categories[newCategoryPriority];
      displacedCategory.priority = displacedCategory.priority + 1;
      categories[newCategoryPriority] = category;
      categories[oldCategoryPriority] = displacedCategory;

      this.setState({categories: categories})
    }
    else if(action === 'down' && category.priority == (this.state.categories.length + 1)) { // already in last place
    }
    else if(action === 'down') { // not already in last place
      var oldCategoryPriority = category.priority;
      var newCategoryPriority = category.priority + 1;
      category.priority = newCategoryPriority;

      var categories = this.state.categories.slice();

      var displacedCategory = categories[newCategoryPriority];
      displacedCategory.priority = displacedCategory.priority -1;
      categories[newCategoryPriority] = category;
      categories[oldCategoryPriority] = displacedCategory;

      this.setState({categories: categories})
    }
    else if(action === 'cancel') {
      var categories = this.state.categories.slice();
      categories[category.priority].isActive = false;

      this.setState({categories: categories});
    }
    console.log('changed priority')
  }
})



















