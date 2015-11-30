Template.editMember.rendered = function() {
    $('.select-gender').material_select();
    $('.select-state').material_select();
}
 //Meteor.subscribe("account");
  var currentId = this._id;

 Template.memberPage.onCreated(function() {
  var self = this;
    self.autorun(function(){
    //var data = Template.currentData();
      //self.subscribe("account");
    self.subscribe("services");
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


Template.memberPage.helpers({
 items:function() {
   var memid = this._id
  return Services.find({'enrolled.member':{$in:[memid]}});
 }
});

Template.memberPage.events({

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






Template.memberPage.rendered = function() {


  $(".dial").knob({
    'stepsize': 0.1,
    val:45
  });

  $(".arc").knob({
    'stepsize': 0.1,
      val:20
  });
}
