Template.Staff.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('staff');
  });
});
Template.staffView.onCreated(function() {
  var self = this;
  var serid = Router.current().params;
  self.autorun(function() {
    self.subscribe('one-staff',serid._id);
  });
});


Template.staffView.helpers({
  go: function(){
    var test = 'hello'
     return test;
  },
  rendered: function(){

  },
  destroyed: function(){

  },
});




Template.Staff.helpers({
  items: function(){
    return Staff.find({});

  },
  count: function(){
  return Counts.get('count');
  }

});

Template.Staff.events({
  "click .open-form": function(event, template){
   event.preventDefault();
        $('#staff-form').openModal();
  },

});
Template.staffView.events({
  "click .results": function(e, template){
   e.preventDefault();
     console.log('test');
        $('#edit-staff-form').openModal();

  }

});
