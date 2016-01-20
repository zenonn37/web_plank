Template.training.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('training');
  })
});
Template.training.onRendered(function() {
  // body...
});
Template.train.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('train');
  })
});
Template.train.onRendered(function() {
  // body...
});
Template.training.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.training.events({
  "click #foo": function(event, template){

  }
});
