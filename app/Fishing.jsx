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
    // request.post('/fishing/release/').end(function(error, res) {
      this.props.decision();
    // }.bind(this)
    // );
  },
  render: function() {
    return (
      <div>
      {this.message()}
      <button className="btn btn-primary" onClick={this.handleClickKeep}>Keep</button>
      <button className="btn btn-warning" onClick={this.handleClickRelease}>Release</button>
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
        <div id="page-title">
          <h1 className="page-header text-overflow">Fishing.</h1>
        </div>
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Let's go fishing...</h3>
    						</div>
    						<div className="panel-body">
                  {!this.state.fish ? <button className="btn btn-primary" onClick={this.handleClick}>Fish</button> : <p></p>}
                  {this.state.fish ? <FishingResults fish={this.state.fish} decision={this.resetAfterFishingDecision}/> : <p></p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Fishing;

