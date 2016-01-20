Meteor.methods({
  newTraining:function(doc){
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
    var trainingId = Training.insert(data,function(error) {
         if (error) {
           console.log(error + " errors not good");
         }else{
           console.log("good");

         }
       });

       return{
         _id:trainingId
       };
     }




  }
});
