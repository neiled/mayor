var React = require("react");
var request = require('superagent');


var Fishing = React.createClass({
  handleClick: function(event) {
    request.post('/fishing/cast').end(function(error, res) {
      alert(res);
    });
  },
  render: function() {
    return (
      <div className="Fishing">
        <h2>
          Fishing
        </h2>
        <button onClick={this.handleClick}>Fish</button>
      </div>
    );
  }
});

module.exports = Fishing;
