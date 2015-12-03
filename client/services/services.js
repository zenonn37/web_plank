AutoForm.debug();

Template.Services.onCreated(function() {
  var self = this;
  self.autorun(function() {
  self.subscribe("services");
  });

});
Template.serviceView.onCreated(function() {
    var self = this;
    var ID = Router.current().params;
    self.autorun(function() {
    self.subscribe("service",ID._id);
    self.subscribe("members-global");
    self.subscribe("schedule",ID._id);
    });
});

AutoForm.hooks({

   newTransaction:{

    onSubmit:function(insertDoc){
       this.event.preventDefault();
        var serid = Router.current().params;
        console.log(serid._id);
      console.log("good job " + this.insertDoc.sessions +
     serid._id + Session.get('member'));
     var data = {
       sessions:this.insertDoc.sessions,
       serviceID:serid._id,
       memberID:Session.get('member')
     }
     Meteor.call("newTransaction", data, function(error, result){
       if(error){
         console.log("error", error);
       }
       if(result){
      console.log(result._id);
       }
     });

   return false;
    }
  },
  newServices:{
    onSuccess:function(formType, result) {
    console.log(result._id);
     Router.go('service-view',{_id:result._id});
      Bert.alert( 'New Service Created', 'success', 'fixed-top', 'fa-bolt' );
    }
  }

});


Template.newSchedule.helpers({
  services: function(){
     return "Yoga Advanced";
  },
  _id: function(){
      return 5411225;
  },
  destroyed: function(){

  },
});




Template.newSchedule.rendered = function() {
  $('.datepicker')
    .pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    })
}
Template.Services.helpers({
  items: function(){
    return Services.find({});
  }
});
Template.serviceView.helpers({
  chips:function() {
      var serid = this._id
    //return Members.find({});
    return Members.find({service:{$ne:serid}});

  },
  enrolled:function() {
    console.log(this._id);
    var serid = this._id
    //var services = Services.find({});
    return Members.find({service:{$in:[serid]}});
  },
  items:function() {
     return false;
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
  },
  "click .super-button":function(e,tmpl) {
      $('.super-cover-top')
          .velocity({top:'0px'},500,"ease-in-out");
          console.log('call super cover');
  },
  "click .close":function(e,tmpl) {
      $('.super-cover-top')
          .velocity("reverse");
          console.log('close super cover');
  },

  'click .enroll':function(e,tmpl) {
    e.preventDefault();
        console.log(this._id);
        var member = this._id
        Session.set('member',member);
        var serid = Router.current().params;
        console.log(serid._id);

        var data = {
          member : member,
          serid:serid._id
        }

        Meteor.call("enrollMember", data, function(error){
          if(error){
            console.log("error", error);
          }else {
            console.log('good');
              $('#service-transaction-form').openModal();
          }

        });


  },
  'click .enrolled':function(e,tmpl) {
    e.preventDefault();
      var member = this._id
      var serid = Router.current().params;
    var data = {
      member : member,
      serid:serid._id
    }
    Meteor.call("removeMember", data, function(error){
      if(error){
        console.log("error", error);
      }else {
        console.log('good');

      }

    });
  }
});
