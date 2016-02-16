SubNav = React.createClass({
  render:function() {
    return(
      <div>

         <ul className="subnav">

              <li><a href="companion/profile">Profile</a></li>
                <li><a href="companion/challenges">Challenges</a></li>
                  <li><a href="companion/goals">Goals</a></li>
                     <li><a href="companion/stats">Stats</a></li>
                          <li><a href="companion/account">Account</a></li>
                               <li><a href="companion/services">Services</a></li>
                                    <li><a href="companion/training">Training</a></li>



                    <li><a href="companion/store">Store</a></li>


         </ul>



      </div>
    )
  }
});
