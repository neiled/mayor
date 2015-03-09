var React = require("react");
var request = require('superagent');

var Store = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Store</h2>
          <p>Time for some retail therapy...</p>
        </div>
      </div>
    );
  }
});

module.exports = Store;
