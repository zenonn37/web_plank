Meteor.publish("diets", function(){
return Diets.find({user:this.userId});

});
