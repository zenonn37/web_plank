Meteor.publish("shedules", function(){
 return Schedule.find({user:this.userId});
});

Meteor.publish("shedule", function(ID){
 return Schedule.find({_id:ID});
});
