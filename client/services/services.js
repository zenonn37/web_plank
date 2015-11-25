AutoForm.debug();











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
      console.log(result);
       }
     });

   return false;
    }
  }

});


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
