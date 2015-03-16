var React = require("react");
var request = require('superagent');

var Welcome = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Welcome</h1>
        </div>
        <h2>Welcome to your new town.</h2>
        <div class="row">
          <div class="col-lg-7">
            <div class="panel">
              <div class="panel-heading">
								<h3 class="panel-title">Log In</h3>
							</div>            
              <a href="/auth/twitter"><button class="btn btn-primary btn-labeled icon-lg fa fa-twitter">Twitter</button></a>
              <a href="/auth/github"><button class="btn btn-primary btn-labeled icon-lg fa fa-github">GitHub</button></a>
            </div>          
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Welcome;
