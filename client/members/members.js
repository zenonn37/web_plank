Session.setDefault("cursor", 0);




Template.Members.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("members",Session.get('cursor'));

  });
});


Tracker.autorun(function(){
//  formsPres.setSlideCount(1,2);

});

Session.setDefault("Status", "Active");
Session.setDefault("Order", -1);
//reactive var

Template.Members.rendered = function() {
    $('.select-gender').material_select();
    $('.select-state').material_select();

}

Template.Members.created = function(){
   this.order = new ReactiveVar(false);
   this.active = new ReactiveVar(true);

   //console.log(this.order.get());
};
Template.newMembers.onCreated(function() {
    this.slides = new ReactiveVar(0);
    var check = Template.instance().slides.get();

    console.log(check);
});

Template.newMembers.onRendered(function() {

      formsPres.setSlideCount(3);
    formsPres.globalSlidesCtrl();
    console.log('rendered');
});



//status:Session.get('Status')
//sort:{createdAt: Session.get('Order')}});
Template.Members.helpers({

  count:function() {
    return Counts.get('mem-count');
  },

  items:function() {
    var list = Members.find({},{sort:{createdAt:-1}});

   return list;
 },
 checkStatus:function(status) {
    if (status === "Active") {
       return 'green';
    }else{
      return 'red';
    }
 },
 orders:function() {
   return Template.instance().order.get();
 },
 active:function() {
   return Template.instance().active.get();
 },
 time:function() {
   return moment().format("MM-DD-YYYY");
 }

});


Template.globalDataPopout.events({
  "click .close-data-popout":function(e, tmpl) {
    e.preventDefault();
    Presentation.globalDataPopoutClose();
    console.log('pushed');
  }
});




Template.newMembers.helpers({

  intro:function() {

    switch (Session.get('slides')) {
      case 1:
      var intro = "Basic Information";
        return intro;
        console.log('one');
        break;
      case 2:
      var intro2 = "Contact Information";
        return intro2;
          console.log('two');
      default:
      var intro = "Basic Information";
        return intro;
    }



  }
});

Template.newMembers.events({
  "click .go1": function(e, template){
     e.preventDefault();
      Session.set('slides',Number(Session.get('slides')) - 1 );

    formsPres.globalSlidesCtrl();



  },
  "click .go2": function(e, template){
    e.preventDefault();
    Session.set('slides',Number(Session.get('slides')) + 1 );

        formsPres.globalSlidesCtrl();
      //console.log(c);
  }
});



Template.Members.events({
  "click #open-form": function(event, template){
   event.preventDefault();
        //$('#member-form').openModal();
        Presentation.globalDataPopout();
  },


  "submit .new-members":function(event) {
    event.preventDefault();

    var obj = {
      first: event.target.first.value,
      age:  event.target.age.value,
      gender: $('#new-member').find(':selected').data('gen'),
      last:  event.target.last.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      street: event.target.street.value,
      city: event.target.city.value,
      state: $('#member-state').find(':selected').data('state'),
      zip: event.target.zip.value,
      photo: event.target.photo.value
    }

    //Members.insert(obj);

    Meteor.call("newMembers", obj, function(error,result){
      if(error){
        console.log("error", error);
      }else {

         Router.go('memberPage',{_id:result._id});
           Bert.alert( 'New Memeber Created', 'danger', 'growl-top-right', 'fa-bolt' );
      }



    });

    event.target.first.value = "";
    event.target.last.value = "";
    event.target.email.value = "";

      $('#member-form').closeModal();


        console.log(obj.first + obj.last + obj.email);
  },
  'click .toggle-status':function(e,template) {
    e.preventDefault();
    template.active.set(!template.active.get());
      Session.set("Status", 'suspend');

  },
  'click .toggle-stat':function(e,template) {
    e.preventDefault();
    template.active.set(!template.active.get());
      Session.set("Status", 'Active');

  },
  'click .toggle-order':function(e,template) {
    e.preventDefault();
     template.order.set(!template.order.get());

      Session.set("Order", -1);

  },
  'click .toggle-back':function(e,template) {
    e.preventDefault();
     template.order.set(!template.order.get());

      Session.set("Order", 1);

  },
  'click .previous':function(e,tmpl) {
    if (Number(Session.get('cursor')) > 4) {
       Session.set('cursor',Number(Session.get('cursor'))-5);
    }
  },
    'click .next':function(e,tmpl) {
       Session.set('cursor',Number(Session.get('cursor'))+5);
    }
    // body...




});
