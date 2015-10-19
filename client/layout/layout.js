
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
   this.$(".button-collapse").sideNav({
     menuWidth:240,
     edge:'left',
     closeOnClick:true
   });
});

Template.layout.events({
  "click .open-menu": function(event, template){

     console.log('open');
  }
});
