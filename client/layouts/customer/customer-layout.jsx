Customers = {};
Customers.Customer = React.createClass({
  render:function() {
    return(
      <div>
      <TopBar/>
      <div className="content">
      <SubNav/>
      {this.props.yield}

      </div>
        <SideBar/>
      </div>

    )
  }
});
