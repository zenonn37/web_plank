Template.invite.onCreated(function() {
 var self = this;
 var tokens = Router.current().params;
 self.autorun(function() {
   self.subscribe('Companions',tokens.token);
 });
});


Template.invite.helpers({
  invitation: function() {
  var invite = Companion.findOne();

  if ( invite ) {
    return invite;
  }
}

});

Template.invite.events({
  "submit .accept-invitation": function(e, template){
      e.preventDefault();
      var password = e.target.password.value;
      var tokens = Router.current().params;


      var user = {
        email:e.target.emailAddress.value,
        token:tokens.token,
        password:Accounts._hashPassword(password)
      }

      Meteor.call("acceptInvite",user, function(error, result){
        if(error){
          Bert.alert(error.reason,'warning')
          console.log("error", error);
        }else {
          Meteor.loginWithPassword(user.email, password);
          Router.go('/');
        }

      });
  }
});
