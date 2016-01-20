Meteor.publish("members", function(){
if (this.userId !== null) {
  Counts.publish(this,'mem-count', Members.find({user:this.userId}),{noReady:true});
   return Members.find({user:this.userId},{
     fields:{
       first:1,
       last:1,
       created:1,
       photo:1
     }  
   });
}


});
Meteor.publish("members-global", function(){
  if (this.userId !== null) {
    return Members.find({userId:this.userId},{
      fields:{
        first:1,
        last:1,
        photo:1
      }

    });
  }


});

Meteor.publish("account", function(){
   return Account.find({});
});

Meteor.publish("member", function(id){
  if (this.userId !== null) {
    check(id, String);
     return Members.find({_id:id});
  }

});

Meteor.publish("eval", function(id){
  if (this.userId !== null) {
      check(id, String);
    return  Evaluation.find({memberID:id});
  }

});
