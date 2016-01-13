Meteor.methods({
  newSchedule:function(doc){
     console.log("called schedule" + doc.serviceID);

     var user = Meteor.user();
     check(doc,{
       start1:String,
       end1:String,
       start2:String,
       end2:String,
       start3:String,
       end3:String,
       start4:String,
       end4:String,
       start5:String,
       end5:String,
       start6:String,
       end6:String,
       start7:String,
       end7:String,
       day1:Date,
       day2:Date,
       day3:Date,
       day4:Date,
       day5:Date,
       day6:Date,
       day7:Date,
       serviceID:String




     });

      var data = {
        start1:doc.start1,
        end1:doc.end1,
        start2:doc.start1,
        end2:doc.end2,
        start3:doc.start1,
        end3:doc.end3,
        start4:doc.start1,
        end4:doc.end4,
        start5:doc.start1,
        end5:doc.end5,
        start6:doc.start1,
        end6:doc.end6,
        start7:doc.start1,
        end7:doc.end7,
        day1:doc.day1,
        day2:doc.day2,
        day3:doc.day3,
        day4:doc.day4,
        day5:doc.day5,
        day6:doc.day6,
        day7:doc.day7,
      

      }


     _.extend(data,{
       created:new Date(),
       user:user._id,
       serId:doc.serviceID


     });

     if (!user) {
       Router.go('/login');
       console.log('no user');
     }else{
      var scheduleid =  Schedule.insert(data,function(error) {
         if (error) {
           console.log(error + " errors not good");
         }else{
           console.log("good");
         }
       });

       return{
         _id:scheduleid
       };
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
