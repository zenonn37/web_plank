
Template.plankNav.helpers({
  brand: function(){
     var brand = "Saratoga Yoga";
     return brand;
  },
  current: function(){
    var routeName = Router.current().route.getName();
    console.log(routeName);
    return routeName;
  },
  destroyed: function(){

  },
});


Template.layout.helpers({
  check: function(){
     Router.go('/404');
  }
});




Template.plankNav.events({
  "click .back": function(e, template){
     e.preventDefault();
     window.history.back();
  },
  "click .logout": function(e, template){
      e.preventDefault();
      AccountsTemplates.logout();
      Router.go('login');
  },
  "click .close-overlay": function(e, template) {
      e.preventDefault();
      Overlays.closeSideNav();

  },
  "click .nav-one":function(e, template) {
    e.preventDefault();
    Overlays.openSideNav();
    console.log('test2');





  }
});

Template.layout.rendered = function() {
Meteor.setTimeout(function() {

  this.$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false,
    hover: false,
    alignment: 'right',
    gutter: 0,
    belowOrigin: true
  });

  this.$('.button-collapse').sideNav({
    menuWidth: 240,
    activationWidth: 70,
    closeOnClick: true,
      edge: 'left', // Choose the horizontal origin
  });

  this.$('.button-collapse2').sideNav({
    menuWidth: 400,
    activationWidth: 70,
    closeOnClick: true,
      edge: 'right', // Choose the horizontal origin
  });

}.bind(this), 200);
};


Template.layout.events({
  "click .open-menu": function(event, template){

     console.log('open');
  }
});




Template.plankNav.events({
  "click .logout": function(e){
     e.preventDefault();
    AccountsTemplates.logout();
    Router.go('signin');
  }
});
Template.customerNav.events({
  "click .logout": function(e){
     e.preventDefault();
    AccountsTemplates.logout();
    Router.go('signin');
  }
});
Template.staffNav.events({
  "click .logout": function(e){
     e.preventDefault();
    AccountsTemplates.logout();
    Router.go('signin');
  }
});
