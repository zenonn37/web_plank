Template.Services.onCreated(function() {
    this.subscribe("services");
});
Template.serviceView.onCreated(function() {
    this.subscribe("services");
});
Template.Services.created = function() {
  // body...
}

Template.Services.rendered = function() {
  // body...
}


Template.Services.helpers({
  items: function(){
    return Services.find({});

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.Services.events({
  "click .open-modal": function(e, template){
       e.preventDefault();
       $('#services-form').openModal();
  }
});

Template.serviceView.events({
  "click .open-modal": function(e, template){
       e.preventDefault();
       $('#edit-services-form').openModal();
  }
});
