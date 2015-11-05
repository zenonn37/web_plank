Meteor.methods({
  newTeam:function(obj){
    var user = Meteor.user();
    check(obj,{
      team:String,
      players:String,
      sport: String,
      lvl: String
    })

    var data = {
      team:obj.team,
      players:parseInt(obj.players),
      sport: obj.sport,
      lvl: obj.lvl

    }

   _.extend(data,{
     userId:user._id,
     createdAt: new Date(),
     status:"Active"
   })
   if (!user) {
     Router.go('/login');
   }else{
       Teams.insert(data);
   }

  }
});
