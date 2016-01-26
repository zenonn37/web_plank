Template.Companion.onCreated(function() {
 var self = this;
 self.autorun(function() {
   self.subscribe('Companion');
 });
});

Template.Companion.onRendered(function() {
  $('select').material_select();

});



Template.newConnect.helpers({
  member: function(){
    var query = Members.find({});
    return query;

  }

});

Template.newConnect.events({
  "submit .connect-client": function(e, template){
    e.preventDefault();

       var id = e.target.memId.value;
       var query = Members.findOne({_id:id});
       var email = query.email;

       var data = {
         memId:id,
         email:email
       }

      Meteor.call("connectInvite", data, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
           console.log('good');
        }
      });
       console.log(email);
  }
});


Template.Companion.helpers({
  users: function(){
    var query = Meteor.users.find({});
    return query;

  },
  members: function(){
    var query = Members.find({});
    return query;

  },
  staff: function(){
    var query = Staff.find({});
    return query;

  }
});

Template.Companion.events({
  "click .open-bottom": function(e, template){
    e.preventDefault();
    $('#b-sheet').
      openModal();

  }
});
