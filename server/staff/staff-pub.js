Meteor.publish("staff", function(){

    Counts.publish(this,'count',Staff.find({user:this.userId}),{noReady:true});
    return Staff.find({user:this.userId});



});


Meteor.publish("one-staff", function(id){
    return Staff.find({_id:id});
});
