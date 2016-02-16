TopBar = React.createClass({
  render:function() {
    var company = "True Fitness";
    var area = "Companion";
    return(
      <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">{company}<small>  {area}</small></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#"><i className="Small material-icons ">home</i></a></li>

          <li className="logout"><a href="#">Logout</a></li>
        </ul>


      </div>
      </nav>
    )
  }
});
