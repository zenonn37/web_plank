Meteor.methods({
  newService:function(doc){
     console.log("called services" + doc.name + doc.genre);

     var user = Meteor.user();
     check(doc,{
       name:String,
       genre:String,
       weekly:Number,
       revenue:Number,
       min:Number,
       max:Number,
       duration:Number,
       goal:String,
       advert:String,
       paid:Boolean,



     });

      var data = {
        name:doc.name,
        genre:doc.genre,
        weekly:doc.weekly,
        revenue:doc.revenue,
        min:doc.min,
        max:doc.max,
        duration:doc.duration,
        goal:doc.goal,
        advert:doc.advert,
        paid:doc.paid,
      
      }


     _.extend(data,{
       created:new Date(),
       user:user._id,
       scheduled:false


     });

     if (!user) {
       Router.go('/login');
       console.log('no user');
     }else{
    var serviceId = Services.insert(data,function(error) {
         if (error) {
           console.log(error + " errors not good");
         }else{
           console.log("good");

         }
       });

       return{
         _id:serviceId
       };
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
  'enrolled.service':data.serid
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
