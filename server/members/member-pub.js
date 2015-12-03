Meteor.publish("members", function(cursor){
   return Members.find({userId:this.userId},{
     limit:5,skip:cursor
   });

});
Meteor.publish("members-global", function(){
   return Members.find({userId:this.userId},{
     fields:{
       first:1,
       last:1,
       createdAt:1,
       gender:1,
       photo:1
     }

   });

});

Meteor.publish("account", function(){
   return Account.find({});
});

Meteor.publish("member", function(id){
   return Members.find({_id:id});
});
