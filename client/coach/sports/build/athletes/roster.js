AutoForm.debug();

AutoForm.hooks({

  newMembers:{
     onSuccess:function(formType, result) {
      console.log('excellent');
       formsPres.resetSlides();
     }
  }
});
Template.roster.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("athletes");

  });
});

Template.newAthlete.onRendered(function() {

      formsPres.setSlideCount(5);
    formsPres.globalSlidesCtrl();
    console.log('rendered athelete form');
});
Template.roster.helpers({
  athletes: function(){
var query = Athletes.find({});
  return query;

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.roster.events({
  "click .open-form": function(e, template){
    e.preventDefault();
    Presentation.globalDataPopout();
  }
});
