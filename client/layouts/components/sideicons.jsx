SideIconsCompanion = React.createClass({
  
 render:function() {
   return(
     <div>

     <div className="nav-one">
       <a href="/companion">
     <i className="aside-colors icon-speedometer"></i>
     </a>
     </div>

     <div className="nav-two">
       <a  href="/companion/messages">
     <i className="aside-colors icon-speech"></i>
     </a>
     </div>

     <div className="nav-three">
       <a href="/companion/friends">
     <i className="aside-colors icon-user"></i>
       </a>
     </div>
     <div className="nav-four">
       <a href="/companion/settings">
     <i className="aside-colors icon-settings"></i>
       </a>
     </div>
     <div className="nav-five">
       <a href="/companion/graduation">
     <i className="aside-colors icon-graduation"></i>
       </a>
     </div>
     <div className="nav-six">
       <a href="/companion/help">
     <i className="aside-colors icon-question"></i>
       </a>
     </div>


     </div>
   )
 }
});

SideIconsStaff = React.createClass({
render:function() {

}
});

SideIconsAdmin = React.createClass({
  render:function() {

  }
});

SideIconsSuper = React.createClass({
  render:function() {

  }
});
