Meteor.methods({
  newService:function(doc){
     console.log("called services" + doc.name + doc.genre);

     var user = Meteor.user();
     check(doc,{
       name:String,
       genre:String

     });

      var data = {
        name:doc.name,
        genre:doc.genre
      }


     _.extend(data,{
       created:new Date(),
       user:user._id

     });

     Services.insert(data,function(error) {
       if (error) {
         console.log(error + " errors not good");
       }else{
         console.log("good");
       }
     });


  },
  editServices:function(doc,docId){
     console.log("called edit services" + doc.name);
     Services.update({_id:docId},doc);

    // Challenges.update(docId, {$set:{
  //      doc
  //   }});

  }
});
