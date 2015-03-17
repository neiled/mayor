var React = require("react");
var request = require('superagent');

var Coins = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Museum</h1>
        </div>
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Here are the coins you have and where they came from (or went to!)</h3>
    						</div>
    						<div className="panel-body">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
});

module.exports = Coins;
