Meteor.publish("schedules", function(){
 return Schedule.find({user:this.userId});
});

Meteor.publish("schedule", function(ID){
 return Schedule.find({serId:ID});
});
