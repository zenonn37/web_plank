
Template.newSchedules.onCreated(function() {
  var self = this;
    var ID = Router.current().params;
  self.autorun(function() {
    self.subscribe("service",ID._id);
  });
});
Template.Schedule.onRendered(function() {
//blank
});


Template.newSchedules.helpers({
  slideCount: function(){

    var query = Services.findOne({_id:this._id});

    if (query) {
      Session.set('slideSet',query.weekly);
    }
    console.log(query._id);
    return query.weekly

  }
});


Template.Schedule.events({
  "click #foo": function(event, template){

  }
});
