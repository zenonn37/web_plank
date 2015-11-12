Meteor.publish("goals", function(){
return Goals.find({user:this.userId});

});
