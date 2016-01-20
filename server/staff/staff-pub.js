Meteor.publish("staff", function(){
    if (this.userId !== null) {
      Counts.publish(this,'count',Staff.find({user:this.userId}),{noReady:true});
      return Staff.find(
        {user:this.userId},{
          fields:{
            firstname:1,
            lastname:1,
            photo:1,
            created:1
          }
        }
      );
    }
});


Meteor.publish("one-staff", function(id){
  if (this.userId !== null) {
    check(id, String);
      return Staff.find({_id:id});
  }

});
