
Session.setDefault("Status", "Active");

 Meteor.subscribe("members");


Template.Members.helpers({

  members:function() {
    var list = Members.find(
      {
        status:Session.get('Status')
      },{sort:{a:1}});
   return list;
 },
 checkStatus:function(status) {
    if (status === "Active") {
       return 'green';
    }else{
      return 'red';
    }
 }

});





Template.Members.events({
  "click #open-form": function(event, template){
   event.preventDefault();
        $('#member-form').openModal();
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

    Meteor.call("newMembers", obj, function(error){
      if(error){
        console.log("error", error);
      }else {
        Bert.alert( 'New Memeber Created', 'danger', 'growl-top-right', 'fa-bolt' );

      }



    });

    event.target.first.value = "";
    event.target.last.value = "";
    event.target.email.value = "";

      $('#member-form').closeModal();


        console.log(obj.first + obj.last + obj.email);
  },
  'click .toggle-status':function(e) {
    e.preventDefault();
      Session.set("Status", 'Active');

  },
  'click .toggle-stat':function(e) {
    e.preventDefault();
      Session.set("Status", 'suspend');

  }

});
