console.log('wat')

var App = React.createClass({
  render: function() {
    return (
      <div>
        hey
      </div>
    );
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