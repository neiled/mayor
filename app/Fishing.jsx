var React = require("react");
var request = require('superagent');


var FishingResults = React.createClass({
  render: function() {
    return (
      this.props.fish ? <p>You caught a {this.props.fish}</p> : <p></p>
    );
  }
});

var Fishing = React.createClass({
  getInitialState: function() {
    return {fish: null};
  },
  handleClick: function(event) {
    request.post('/fishing/cast').end(function(error, res) {
      this.setState({fish: res.body.fish});
    }.bind(this)
    );
  },
  render: function() {
    return (
      <div className="Fishing">
        <h2>
          Fishing
        </h2>
        <button onClick={this.handleClick}>Fish</button>
        <FishingResults fish={this.state.fish}/>
      </div>
    );
  }
});

module.exports = Fishing;
