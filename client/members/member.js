Template.editMember.rendered = function() {
    $('.select-gender').material_select();
    $('.select-state').material_select();
}

  var currentId = this._id;

 Template.memberPage.onCreated(function() {
  var self = this;
   var id = Router.current().params;
    self.autorun(function(){
    self.subscribe("services");
    self.subscribe("member",id._id);
    self.subscribe("eval",id._id);
    self.subscribe("transaction",id._id);
  });
 });


Template.editMember.events({
  "submit .edit-members": function(event){
     event.preventDefault();

     var currentId = this._id;

     var obj = {
       first: event.target.first.value,
       age:  event.target.age.value,
       gender: $('.select-gender').find(':selected').data('gen'),
       last:  event.target.last.value,
       email: event.target.email.value,
       phone: event.target.phone.value,
       street: event.target.street.value,
       city: event.target.city.value,
       state: $('.select-state').find(':selected').data('state'),
       zip: event.target.zip.value,
       photo: event.target.photo.value,
       _id:currentId
     }

     console.log(obj.first);

     Meteor.call('editMember', obj, function(error){
       if(error){
         console.log("error", error);
       }
  });

}

});
//hooks

AutoForm.hooks({

 newStats:{
   onSubmit:function(insertDoc) {
     this.event.preventDefault();
     var serid = Router.current().params;

     var data = {
       memberID:serid._id,
       height:insertDoc.height,
       weight:insertDoc.weight,
       bmi:insertDoc.bmi,
       bfp:insertDoc.bfp,
       fitness:insertDoc.fitness,
       waist:insertDoc.waist,
       chest:insertDoc.chest,
       hips:insertDoc.hips,
       thighs:insertDoc.thighs,
       biceps: insertDoc.biceps,
       calves: insertDoc.calves,
       girth:insertDoc.girth,
       neck: insertDoc.neck,
       notes: insertDoc.notes
     }

     Meteor.call("newStats", data, function(error, result){
       if(error){
         console.log("error", error);
       }
       if(result){

       }
     });
        this.done();
      return false;
   }, onSuccess:function(formType, result) {
        console.log('Evaluation Completed');
        Bert.alert( 'Evaluation Completed', 'success', 'fixed-top', 'fa-bolt' );
        Meteor.setTimeout(function(){
             closeOverlayLeft();
        }, 200);


    }

 }


});






Template.memberPage.helpers({
 items:function() {
   var memid = this._id
  return Services.find({'enrolled.member':{$in:[memid]}});
},
 status:function() {



 }
});

Template.memberPage.events({


  "click .yes":function(e,tmpl) {
       closeOverlay();
       Meteor.setTimeout(function(){
          openOverlayLeft();
       }, 500);
  },
  "click .no":function(e,tmpl) {
      closeOverlay();
  },

  "click .close2":function(e,tmpl) {
      closeOverlay();
  },

  "click .edit-intro-start":function(e, tmpl) {
             e.preventDefault();
             $('.edit-intro-start')
                .velocity({
                  scaleX:2,
                  scaleY:2
                });

  },


  "click .super-button":function(e, tmpl) {
      e.preventDefault();


      $('.edit-intro-start')
        .velocity({opacity:1,scale:5,scale:50},2000,'swing');


          $('.super-cover')
              .velocity({left:'0px'},{duration:300,delay:300});


  },


  "click .open-overlay-chat":function(e, tmpl) {
    e.preventDefault();
    $('.super-cover')
      .velocity({
      left:'0px'
      });
  },
  "click .open-overlay-edit":function(e, tmpl) {
    e.preventDefault();
/*
    $('.super-cover')
      .velocity({left:'0px'},100,function() {
        console.log('done animation');
      });

      */

  },
  "click .close":function(e, tmpl) {
    e.preventDefault();
    $('.edit-intro-start')
      .velocity("reverse");
        $('.super-cover')
          .velocity("reverse");






  },
  "click .results":function(e) {
    e.preventDefault();
    //$('#edit-member-form').openModal();
  },
  "click .delete":function(e) {
     var currentId = this._id;
    e.preventDefault();
    Meteor.call("deleteMember", currentId, function(error){
      if(error){
        console.log("error", error);
      }else{
           Router.go('/members');
      }


    });
  },
  'click .note':function(e) {
    e.preventDefault();
      Bert.icons['now-playing'] = 'fa-bolt';
      Bert.alert({
        title:'Notes',
        message:'<strong>New Note Created</strong>',
        type:'now-playing'

      });

  },
  'click .suspend':function(e) {
    e.preventDefault();
    var currentId = this._id;
    var obj ={
      suspend:"suspend",
      currentId:currentId
    };
    Meteor.call("suspendMember", obj, function(error){
      if(error){
        console.log("error", error);
      }else {
        Bert.alert('Memeber Suspended', 'danger', 'growl-top-right', 'fa-bolt');
      }

    });
  }
});

function openOverlayLeft() {
  $('.super-cover')
    .velocity({
    left:'0px'
  },600,"swing");
};

function closeOverlayLeft() {
  $('.super-cover')
   .velocity('reverse');
 };


function openOverlayTop() {

    $('.super-cover-top')
        .velocity({top:'0px'},500,"ease-in-out");
        console.log('call super cover');
};

function closeOverlay() {
  $('.super-cover-top')
      .velocity("reverse");
      console.log('close super cover');
};

function checkStatus() {
  var curID = Router.current().params;
  console.log(curID._id);
  var status = Members.findOne({_id:curID._id});
  console.log(status);
  var eval = status.evaluation;

  if (eval !== true) {
    console.log('do eval');
    openOverlayTop();
  }else {
    console.log('done');
  }
};

function finishEval() {
 if (result._id) {
    var curID = Router.current().params;

   Meteor.call("finishEvaluation", curID, function(error, result){
     if(error){
       console.log("error", error);
     }
     if(result){

     }
   });
 }
};


Template.memberPage.onRendered(function() {
  var self = this;

  Meteor.setTimeout(function(){
       checkStatus();
       console.log('status loaded');
  }, 2000);

  self.$(".dial").knob({
    'stepsize': 0.1,
    val:45
  });

  self.$(".arc").knob({
    'stepsize': 0.1,
      val:20
  });

});
