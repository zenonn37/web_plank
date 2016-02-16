Profile = React.createClass({
  render:function() {
    return(
    <div className="row">
        <div className="col s12">
          <div className="team-stat-card">
               <div className="team-stat-card-body">

               <div className="col m4">
                   <div className="profile-avatar">
                    <img src="http://api.randomuser.me/portraits/women/8.jpg" className="circle" alt="Avatar"/>
                     </div>
                   <div className="profile-titles">
                     <h6>Trainers</h6>
                   </div>
                   <div>
                     <img src="http://api.randomuser.me/portraits/women/9.jpg" className="square small-img" alt="Avatar"/>
                     <img src="http://api.randomuser.me/portraits/women/56.jpg" className="square small-img" alt="Avatar"/>
                   </div>

                   <div className="profile-titles">
                     <h6>Friends</h6>
                   </div>
                   <div>
                     <img src="http://api.randomuser.me/portraits/women/9.jpg" className="square small-img" alt="Avatar"/>
                     <img src="http://api.randomuser.me/portraits/women/56.jpg" className="square small-img" alt="Avatar"/>
                     <img src="http://api.randomuser.me/portraits/men/9.jpg" className="square small-img" alt="Avatar"/>
                     <img src="http://api.randomuser.me/portraits/women/50.jpg" className="square small-img" alt="Avatar"/>
                     <img src="http://api.randomuser.me/portraits/women/3.jpg" className="square small-img" alt="Avatar"/>

                   </div>

                   <div className="profile-titles">
                     <h6>Location</h6>
                   </div>
                   <div>
                     <i className="icon-location-pin"></i>
                     Manchester
                   </div>

              </div>
              <div className="col m4">
                     <div className="profile-titles">

                      <ul>
                        <li><h6>Name</h6><span>Ann Walsh</span>  </li>
                        <li><h6>Age</h6><span>27</span>  </li>
                        <li><h6>Phone</h6><span>1-212-456-7897</span>  </li>
                        <li><h6>Email</h6><span>ann@gmail.com</span>  </li>
                        


                      </ul>

                     </div>
             </div>
             <div className="col m4">
             <div className="profile-titles">

              <ul>

                <li><h6>Street</h6><span>Willow Way Road</span>  </li>
                <li><h6>City</h6><span>Milton</span>  </li>
                  <li><h6>State</h6><span>New York</span>  </li>
                    <li><h6>Zip</h6><span>12954</span>  </li>


              </ul>

             </div>
            </div>

          </div>




     </div>
     </div>
    </div>
    )
  }
});
