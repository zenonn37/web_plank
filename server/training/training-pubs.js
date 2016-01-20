Meteor.publish("training", function(){
if (Meteor.user() !== null) {
  Counts.publish(this,'training-count', Training.find({user:this.userId}),{noReady:true});
   return Training.find({user:this.userId},{
      fields:{
        name:1,
        created:1
      }
   });
}


});

Meteor.publish("train", function(id){
  if (Meteor.user() !== null) {
    check(id, String);
     return Members.find({_id:id});
  }

});
