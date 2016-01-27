Meteor.methods({
    connectInvite(doc){
      check(doc,{
        email:String,
        memId:String
      });

      try {
        Modules.server.connectInvite({
          email:doc.email,
          date:(new Date()).toISOString(),
          token:Random.hexString(16),
          memId:doc.memId,
          user:this.userId,
        })
      } catch (e) {
        return e
      } finally {
       console.log('module called');
      }

    }

});

Meteor.methods({
  acceptInvite( user ) {
    check( user, {
      email: String,
      password: Object,
      token: String
    });

    try {
      var userId = Modules.server.acceptInvitation( user );
      return userId;
    } catch( exception ) {
      return exception;
    }
  }
});
