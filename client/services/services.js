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
   this.done();
   return false;
 },
 onSuccess:function(formType, result) {
   console.log('new transaction');
     Bert.alert( 'New transaction Created', 'success', 'fixed-top', 'fa-bolt' );

 }
  },
  newServices:{
    onSuccess:function(formType, result) {
    console.log(result._id);
     Router.go('service-view',{_id:result._id});
      Bert.alert( 'New Service Created', 'success', 'fixed-top', 'fa-bolt' );
    }
  },
  newSchedules:{
    onSubmit:function(insertDoc) {
      this.event.preventDefault();
      var serid = Router.current().params;
      console.log(this.insertDoc.day1);
      console.log(this.insertDoc.start1);
      var data = {
        start1:this.insertDoc.start1,
        start2:this.insertDoc.start2,
        start3:this.insertDoc.start3,
        start4:this.insertDoc.start4,
        start5:this.insertDoc.start5,
        start6:this.insertDoc.start6,
        start7:this.insertDoc.start7,
        end1:this.insertDoc.end1,
        end2:this.insertDoc.end2,
        end3:this.insertDoc.end3,
        end4:this.insertDoc.end4,
        end5:this.insertDoc.end5,
        end6:this.insertDoc.end6,
        end7:this.insertDoc.end7,
        serviceID:serid._id,
        day1:this.insertDoc.day1,
        day2:this.insertDoc.day2,
        day3:this.insertDoc.day3,
        day4:this.insertDoc.day4,
        day5:this.insertDoc.day5,
        day6:this.insertDoc.day6,
        day7:this.insertDoc.day7,

      }

      Meteor.call("newSchedule", data, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
       console.log(result._id);
        }
      });
    this.done();
    return false;
    },
    onSuccess:function(formType, result) {
      console.log(result._id);
    }
  }

});

Template.newService.onRendered(function() {
  formsPres.setSlideCount(3);
formsPres.globalSlidesCtrl();
console.log('rendered');
});




Template.newSchedules.helpers({
  services: function(){
     return "Yoga Advanced";
  }

});






Template.newSchedules.rendered = function() {
  formsPres.setSlideCount(2);
formsPres.globalSlidesCtrl();
console.log('rendered schedule');
$('.time-start')
  .timepicker();
$('.end-start')
  .timepicker();

  $('.datepicker')
    .pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    Meteor.setTimeout(function(){
         checkStatus();
         console.log('status loaded');
    }, 2000);
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
  "click .open-data ": function(event, template){
   event.preventDefault();
        //$('#member-form').openModal();
        Presentation.globalDataPopout();
  }
});

Template.serviceView.events({

  "click .close-small-popout":function(e,tmpl) {
      Overlays.smallPopoutClose();
  },
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
  },
  'click .note':function(e,tmpl) {
      e.preventDefault();
        Presentation.globalDataPopout();
  }
});

function checkStatus() {
  var curID = Router.current().params;
  console.log(curID._id);
  var status = Services.findOne({_id:curID._id});
  console.log(status);
  var schedule = status.scheduled;

  if (schedule !== true) {
    console.log('plz schedule');
    Overlays.smallPopoutOpen();
  }else {
    console.log('done');
  }
};
