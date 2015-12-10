Meteor.subscribe("Teams");

Template.Coach.onRendered(function() {





});

Template.Coach.helpers({
  teams:function() {
    return Teams.find({});

  },
  time:function() {
    return moment().format("MM-DD-YYYY");
  },
  default:function() {
  return Template.instance().leaders.get();
  }





});

Template.Coach.events({

  "click .offense":function(e, tmpl) {
    e.preventDefault();
    //tmpl.leaders.set(!tmpl.leaders.get());
    tmpl.leaders.set(true);

  },
  "click .defense":function(e, tmpl) {
    e.preventDefault();
      tmpl.leaders.set(false);

  },
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
    this.leaders = new ReactiveVar(true);
}


Template.Coach.rendered = function() {
  $('.select-type').material_select();
  $('.select-level').material_select();
}
