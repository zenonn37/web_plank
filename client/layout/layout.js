
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
      $('.nav-overlay')
         .velocity({
           left:'-400px'
         },{
           duration:150,easing:"swing",delay:300
         });

         $('.nav-inner')
           .velocity({
             left:'-100px'
           })

  },
  "click .nav-one":function(e, template) {
    e.preventDefault();
    console.log('test2');
    $('.nav-inner')
      .velocity({
        left:'0px'
      })
    $('.nav-overlay')
    .velocity({
      left:'0px'
    },{
      duration:100,easing:"swing"
    });




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
  "click #logout": function(e){
     e.preventDefault();
    AccountsTemplates.logout();
    Router.go('signin');
  }
});
