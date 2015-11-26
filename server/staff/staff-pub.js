Meteor.publish("staff", function(){

    Counts.publish(this,'count',Staff.find(),{noReady:true});
    return Staff.find({});



});

Meteor.publish('posts-with-count', function() {
  Counts.publish(this, 'posts', Posts.find(), { noReady: true });
  return Posts.find({}, { limit: 10 });
});

Meteor.publish("one-staff", function(id){
    return Staff.find({_id:id});
});
