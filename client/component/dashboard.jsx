Dashboard = React.createClass({
  render:function() {
    var title = this.props.title;
    var color = this.props.color;
    return(
      <div>
      <h5 className={color}>{title}</h5>
      </div>
    )
  }
});
