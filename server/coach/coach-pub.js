Meteor.publish("Teams", function(){
return Teams.find({userId:this.userId});

});
