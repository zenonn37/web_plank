
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


AutoForm.debug();

AutoForm.hooks({

  newStaff:{
     onSuccess:function(formType, result) {
      console.log('excellent');
       formsPres.resetSlides();
     }
  }
});
Template.newStaff.onRendered(function() {

      formsPres.setSlideCount(4);
    formsPres.globalSlidesCtrl();
    console.log('rendered');
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
},
getOut:function() {
  console.log('get out');
  Router.go('/');
}

});

Template.Staff.events({
  "click .open-data ": function(event, template){
   event.preventDefault();
        //$('#member-form').openModal();
        Presentation.globalDataPopout();
  }

});
Template.staffView.events({
  "click .results": function(e, template){
   e.preventDefault();
     console.log('test');
        $('#edit-staff-form').openModal();

  }

});
