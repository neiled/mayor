var React = require("react");
var request = require('superagent');


var FishingResults = React.createClass({
  message: function() {
    return(
      this.props.fish ? <p>You caught a {this.props.fish.name}</p> : <p></p>
    );
  },
  handleClickKeep: function(event) {
    request.post('/fishing/keep/'+this.props.fish.id).end(function(error, res) {
      this.props.decision();
    }.bind(this)
    );
  },
  handleClickRelease: function(event) {
    request.post('/fishing/release/').end(function(error, res) {
      this.props.decision();
    }.bind(this)
    );
  },
  render: function() {
    return (
      <div>
      {this.message()}
      <button onClick={this.handleClickKeep}>Keep</button>
      <button onClick={this.handleClickRelease}>Release</button>
    </div>
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
  resetAfterFishingDecision: function() {
    this.setState({fish: null});
  },
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2> Fishing </h2>
          <p>Here you can fish the village waters.</p>
        </div>
        <div>
          {!this.state.fish ? <button className="btn btn-primary" onClick={this.handleClick}>Fish</button> : <p></p>}
          {this.state.fish ? <FishingResults fish={this.state.fish} decision={this.resetAfterFishingDecision}/> : <p></p>}
        </div>
      </div>
    );
  }
});

module.exports = Fishing;
