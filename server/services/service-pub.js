Meteor.publish("services", function(){
 return Services.find({user:this.userId});
});
