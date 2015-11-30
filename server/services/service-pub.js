Meteor.publish("services", function(){
 return Services.find({user:this.userId});
});

Meteor.publish("service", function(ID){
 return Services.find({_id:ID});
});
