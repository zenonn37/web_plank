
Template.layout.helpers({
  brand: function(){
     var brand = "Saratoga Yoga";
     return brand;
  },
  rendered: function(){

  },
  destroyed: function(){

  },
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

}.bind(this), 200);
};


Template.layout.events({
  "click .open-menu": function(event, template){

     console.log('open');
  }
});
