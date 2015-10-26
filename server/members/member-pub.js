Meteor.publish("members", function(){
   return Members.find({userId:this.userId});

});
