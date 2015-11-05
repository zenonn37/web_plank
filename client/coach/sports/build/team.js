Meteor.subscribe("Teams");

Template.Coach.helpers({
  teams:function() {
    return Teams.find({});

  },
  time:function() {
    return moment().format("MM-DD-YYYY");
  }





});

Template.Coach.events({
  "click .open-form": function(event, template){
        $('#team-form').openModal();
  },
  'submit .new-team':function(e,template) {
      e.preventDefault();

      var obj = {
        team: event.target.team.value,
        sport: $('.select-type').find(':selected').data('sport'),
        players:  event.target.players.value,
        lvl: $('.select-level').find(':selected').data('lvl'),

      }

      //Members.insert(obj);

      Meteor.call("newTeam", obj, function(error){
        if(error){
          console.log("error", error);
        }else {

            $('#team-form').closeModal();
          Bert.alert( 'New Team Created', 'danger', 'growl-top-right', 'fa-bolt' );

        }



      });


  }
});

Template.Coach.created = function() {
  // body...
}


Template.Coach.rendered = function() {
  $('.select-type').material_select();
  $('.select-level').material_select();
}
