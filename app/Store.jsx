var React = require("react");
var request = require('superagent');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;

var Store = React.createClass({
  render: function() {
  var tabbedAreaInstance = (
      <TabbedArea defaultActiveKey={1}>
        <TabPane eventKey={1} tab="Buy">Buy</TabPane>
        <TabPane eventKey={2} tab="Sell">Sell</TabPane>
      </TabbedArea>
    );
    return (
      <div>
        <div className="jumbotron">
          <h2>Store</h2>
          <p>Time for some retail therapy...</p>
        </div>
        {tabbedAreaInstance}
      </div>
    );
  }
});

module.exports = Store;
