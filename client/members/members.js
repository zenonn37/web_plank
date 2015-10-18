
Template.Members.helpers({

  members:function() {
    var list = Members.find();
   return list;
  }

});

Template.Members.onRendered = function(){

}

Template.Members.events({
  "click #open-form": function(event, template){
   event.preventDefault();
        $('#member-form').openModal();
  },

  "submit .new-members":function(event) {
    event.preventDefault();

    var obj = {
      first: event.target.first.value,
      last:  event.target.last.value,
      email: event.target.email.value
    }

    Members.insert(obj);

    event.target.first.value = "";
    event.target.last.value = "";
    event.target.email.value = "";

      $('#member-form').closeModal();


        console.log(obj.first + obj.last + obj.email);
  }

});
