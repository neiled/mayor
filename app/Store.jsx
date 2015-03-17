var React = require("react");
var request = require('superagent');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;

var BuyPane = React.createClass({
  render: function() {
    return (
      <TabPane eventKey={this.props.key} tab="Buy">Buy</TabPane>
    )
  }
})

var ItemRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.Item.name}</td>
                <td>{this.props.item.amount}</td>
                <td>{this.props.item.Item.cost}</td>
            </tr>
        );
    }
});

var ItemTable = React.createClass({
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
      this.state.inventory.forEach(function(item) {
          rows.push(<ItemRow item={item} key={item.id}/>);
      });
      return (
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Selling Price</th>
                  </tr>
              </thead>
              <tbody>{rows}</tbody>
          </table>
      );
  }
});

var SellPane = React.createClass({
  render: function() {
    return (
      <TabPane eventKey={this.props.key} tab="Sell">Sell</TabPane>
    )
  }
})


var Store = React.createClass({
  render: function() {
  var tabbedAreaInstance = (
      <TabbedArea defaultActiveKey={1}>
        <BuyPane key={1} />
        <SellPane key={2} />
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
