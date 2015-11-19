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
       user:user._id,
       

     });

     if (!user) {
       Router.go('/login');
       console.log('no user');
     }else{
       Services.insert(data,function(error) {
         if (error) {
           console.log(error + " errors not good");
         }else{
           console.log("good");
         }
       });
     }




  },
  editServices:function(doc,docId){
    var user = Meteor.user();

    //check(docId, String);


    if (!user) {
      Router.go('/login');
      console.log('no user');
    }else{
      console.log("called edit services" + doc.name);
      Services.update({_id:docId},doc);
    }



    // Challenges.update(docId, {$set:{
  //      doc
  //   }});

},
enrollMember:function(data) {
  var user = Meteor.user();
  check(data,{
    member:String,
    serid:String
  });

  console.log(data.member + data.serid);

  Services.update({_id:data.serid}, {$addToSet:{
  'enrolled.member':data.member
 }});
  Members.update({_id:data.member}, {$addToSet:{
  service:data.serid
}});


},
removeMember:function(data) {
  var user = Meteor.user();
  check(data,{
    member:String,
    serid:String
  });
    console.log(data.member + data.serid);

    Services.update({_id:data.serid}, {$pullAll:{
    'enrolled.member':[data.member]
   }});
    Members.update({_id:data.member}, {$pullAll:{
    service:[data.serid]
     }});

}
});
