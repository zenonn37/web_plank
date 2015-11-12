Template.Goals.onCreated(function() {
    this.subscribe("goals");
});
Template.goalView.onCreated(function() {
    this.subscribe("goals");
});

Template.Goals.rendered = function() {
  // body...
}


Template.Goals.helpers({
  items: function(){
   return Goals.find({});

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.Goals.events({
  "click .open-modal": function(e, template){
     e.preventDefault();
     $('#goal-form').openModal();
  }
});
Template.goalView.events({
  "click .open-modal": function(e, template){
     e.preventDefault();
     $('#edit-goals-form').openModal();
  }
});
