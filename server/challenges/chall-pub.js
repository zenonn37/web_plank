Meteor.publish("challenges", function(){
return Challenges.find({user:this.userId});

});
