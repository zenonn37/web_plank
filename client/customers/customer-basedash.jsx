Customers.BaseDash = React.createClass({
  render:function() {
    var title = 'Customer Dashboard';
    var titleColor = 'green';
    return(
      <div>
        <h2>Base Parent</h2>
      <CompanionDashboard title={title} color={titleColor}/>
      </div>
    )
  }
});
