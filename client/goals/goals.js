AutoForm.debug();

AutoForm.hooks({

  newGoals:{
     onSuccess:function(formType, result) {
      console.log('excellent');
       formsPres.resetSlides();
     }
  }
});
Template.newGoals.onRendered(function() {

      formsPres.setSlideCount(2);
    formsPres.globalSlidesCtrl();
    console.log('rendered');
});

Template.Goals.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("goals");
  });

});
Template.goalView.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("goals");
  });

});




Template.Goals.helpers({
  items: function(){
   return Goals.find({});

  }
});

Template.Goals.events({
  "click .open-data ": function(event, template){
   event.preventDefault();
        //$('#member-form').openModal();
        Presentation.globalDataPopout();
  }
});
Template.goalView.events({
  "click .open-modal": function(e, template){
     e.preventDefault();
     $('#edit-goals-form').openModal();
  }
});
