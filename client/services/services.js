Template.Services.onCreated(function() {
  var self = this;
  self.autorun(function() {
  self.subscribe("services");
  });

});
Template.serviceView.onCreated(function() {
    var self = this;
    self.autorun(function() {
    self.subscribe("services");
    self.subscribe("members-global");
    });
});

Template.Services.rendered = function() {
  // body...
}


Template.Services.helpers({
  items: function(){
    return Services.find({});
  }
});
Template.serviceView.helpers({
  chips:function() {
    return Members.find({});

  }
})

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
