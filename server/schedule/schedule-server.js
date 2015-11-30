Meteor.methods({
  newSchedule:function(doc){
     console.log("called schedule" + doc.name + doc.day);

     var user = Meteor.user();
     check(doc,{
       name:String,
       day:Date,
       time:String,



     });

      var data = {
        name:doc.name,
        day:doc.day,
        time:doc.time,

      }


     _.extend(data,{
       created:new Date(),
       user:user._id,


     });

     if (!user) {
       Router.go('/login');
       console.log('no user');
     }else{
       Schedule.insert(data,function(error) {
         if (error) {
           console.log(error + " errors not good");
         }else{
           console.log("good");
         }
       });
     }




  },
  editSchedule:function(doc,docId){
    var user = Meteor.user();

    //check(docId, String);


    if (!user) {
      Router.go('/login');
      console.log('no user');
    }else{
      console.log("called edit services" + doc.name);
      Schedule.update({_id:docId},doc);
    }




}

});
