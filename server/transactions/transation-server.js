Meteor.methods({
  newTransaction:function(doc){
     console.log("called services" + doc.name + doc.amount);

     var user = Meteor.user();
     check(doc,{
       sessions:Number,
       memberID:String,
       serviceID:String




     });

      var data = {

        sessions:doc.sessions,
        memberID:doc.memberID,
        serviceID:doc.serviceID




      }


     _.extend(data,{
       created:new Date(),
       user:user._id,


     });

     if (!user) {
       Router.go('/login');
       console.log('no user');
     }else{
       var transactionsId = Transactions.insert(data,function(error) {
         if (error) {
           console.log(error + " errors not good");
         }else{
           console.log("good " + transactionsId);
           return {
             _id: transactionsId
           };
         }
       });
     }




  }
});
