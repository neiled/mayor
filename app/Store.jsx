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
        <div id="page-title">
          <h1 className="page-header text-overflow">Store</h1>
        </div>
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Time for some retail therapy...</h3>
    						</div>
    						<div className="panel-body">
    						  {tabbedAreaInstance}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
});

module.exports = Store;
