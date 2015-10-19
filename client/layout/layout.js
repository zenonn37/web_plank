
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

Template.layout.onRendered(function() {
   $('.open-menu').sideNav({
     closeOnClick:true
   });
});

Template.layout.events({
  "click .open-menu": function(event, template){
     //$('#mobile-demo').sideNav('show');
     console.log('open');
  }
});
