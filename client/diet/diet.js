Template.Diet.onCreated(function() {
    this.subscribe("diets");
});
Template.dietView.onCreated(function() {
    this.subscribe("diets");
});
Template.Diet.created = function() {
  // body...
}

Template.Diet.rendered = function() {
  // body...
}


Template.Diet.helpers({
  items: function(){
    return Diets.find({});

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.Diet.events({
  "click .open-modal": function(e, template){
     e.preventDefault();
     $('#diet-form').openModal();
  }
});
Template.dietView.events({
  "click .open-modal": function(e, template){
     e.preventDefault();
     $('#edit-diet-form').openModal();
  }
});
