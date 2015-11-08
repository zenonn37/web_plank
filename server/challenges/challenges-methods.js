Meteor.methods({
  newChallenge:function(doc){
     console.log("called challenges" + doc.name);

     var user = Meteor.user();
     check(doc,{
       name:String,
       challenge:String
     });

      var data = {
        name:doc.name,
        challenge:doc.challenge
      }


     _.extend(data,{
       created:new Date(),
       user:user._id

     });

     Challenges.insert(data,function(error) {
       if (error) {
         console.log(error + "errors");
       }else{
         console.log("good");
       }
     });


  },
  editChallenges:function(doc,docId){
     console.log("called edit challenges" + doc.name);
     Challenges.update({_id:docId},doc);

    // Challenges.update(docId, {$set:{
  //      doc
  //   }});

  }
});
