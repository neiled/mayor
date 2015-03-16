var React = require("react");
var request = require('superagent');

var Coins = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Coins</h2>
          <p>Here are the coins you have and where they came from (or went to!)</p>
        </div>
      </div>
    );
  }
});

module.exports = Coins;
