//public function to accept invitation for Customer
var accept = function( docs ) {
  //call up invite for role and delete functions
   var invite = _getInvite( docs.token );
   var user = _createUser( docs );
   //add user default role
   _addUserRole( user );
   //delete invite'
   _deleteInvite( invite._id );


};

var _getInvite = function ( token ) {
  var invitation = Companion.findOne({"token":"token"});

  if (invitation) {
    return invitation;
  }

};

var _createUser = function( docs ) {
  var userId = Accounts.createUser({email:docs.email,password:docs.password});
  if ( userId) {
    return userId;
  }
};

var _addUserRole = function( user ) {
  Roles.setUserRoles(user,['Customer'])
};

var _deleteInvite = function( invite ) {
  Companion.remove( {"_id": invite } );
};

Modules.server.acceptInvitation = accept;
