
Accounts.onCreateUser(function(options, user){
   var proCode = Random.id();

   user.pro ={
     owners:proCode
   };

   user.profile={
      firstname:options.firstname,
      lastname:options.lastname,

   }
   if (options.profile) {
     user.profile = options.profile
   }

  Meteor.setTimeout(function(){
       Roles.addUsersToRoles(user._id,'customer');
  }, 1000);


        //Roles.addUsersToRoles(userId,['roleOne','roleTwo','roleThree']);


  // Connect.insert({
  //   createdAt:new Date().getTime(),
    // clientId:[],//required client id to connect client data to companion added on new client
  //   companion:[],//companion userid
  //   keys:[],//connection string
  //   userId:user._id//owner and used to check for pro user
  // });

  return user
});
