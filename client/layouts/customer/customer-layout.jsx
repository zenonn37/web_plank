Customers = {};
Customers.Customer = React.createClass({
  render:function() {
    return(
      <div>
      <TopBar/>
      <div className="content">
      <ul>
        <li><a href="/companion">Dashboard</a></li>
          <li><a href="/companion/profile">Profile</a></li>
            <li><a href="/companion/settings">Settings</a></li>

      </ul>
      {this.props.yield}

      </div>
        <SideBar/>
      </div>

    )
  }
});
