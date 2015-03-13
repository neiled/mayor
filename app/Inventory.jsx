var React = require("react");
var request = require('superagent');

var Inventory = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Pockets</h2>
          <p>Here you can see what you are carrying in your pockets.</p>
        </div>
        <ProductTable />
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
      console.log(result);
      if(this.isMounted()) {
        this.setState({inventory: result.inventory});
      }
    }.bind(this));
  },
  render: function() {
      var rows = [];
      console.log(this.state.inventory);
      this.state.inventory.forEach(function(product) {
          rows.push(<ProductRow product={product} key={product.id}/>);
      });
      return (
          <table className="table">
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
