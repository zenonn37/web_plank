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

  // Connect.insert({
  //   createdAt:new Date().getTime(),
    // clientId:[],//required client id to connect client data to companion added on new client
  //   companion:[],//companion userid
  //   keys:[],//connection string
  //   userId:user._id//owner and used to check for pro user
  // });

  return user
});
