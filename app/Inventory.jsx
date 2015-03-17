var React = require("react");
var request = require('superagent');

var Inventory = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Pockets</h1>
        </div>
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Here's what you're carrying...</h3>
    						</div>
    						<div className="panel-body">
                  <ProductTable />    						
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
});


var ProductRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.product.Item.name}</td>
                <td>{this.props.product.amount}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
  getInitialState: function() {
    return {inventory: []};
  },
  componentDidMount: function() {
    $.get("/user/inventory", function(result) {
      if(this.isMounted()) {
        this.setState({inventory: result.inventory});
      }
    }.bind(this));
  },
  render: function() {
      var rows = [];
      this.state.inventory.forEach(function(product) {
          rows.push(<ProductRow product={product} key={product.id}/>);
      });
      return (
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody>{rows}</tbody>
          </table>
      );
  }
});

module.exports = Inventory;
