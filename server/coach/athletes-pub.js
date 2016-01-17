Meteor.publish("athletes", function(){
  Counts.publish(this,'athletes-count', Athletes.find({user:this.userId}),{noReady:true});
   return Athletes.find({user:this.userId},{
     sort:{class:1}
   });
});

Meteor.publish("athlete", function(id){
   return Athletes.find({_id:id});
});
