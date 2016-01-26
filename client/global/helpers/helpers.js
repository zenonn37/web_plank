Template.registerHelper("formatDate", function(date){
   return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});
Template.registerHelper( 'isCurrentUser', ( currentUser ) => {
  return currentUser === Meteor.userId() ? true : false;
});

Template.registerHelper( 'disableIfAdmin', ( userId ) => {
  if ( Meteor.userId() === userId ) {
    return Roles.userIsInRole( userId, ['super-user','admin']) ? "disabled" : "";
  }
});
Template.registerHelper( 'disableIfSuperUser', ( userId ) => {

    return Roles.userIsInRole( userId, ['super-user','admin']) ? "disabled" : "";

});

Template.registerHelper( 'selected', ( v1, v2 ) => {
  return v1 === v2 ? true : false;
});
Template.registerHelper( 'humanDate', ( timestamp ) => {
  if ( timestamp ) {
    return moment( timestamp ).format( "MMMM Do, YYYY" );
  }
});
