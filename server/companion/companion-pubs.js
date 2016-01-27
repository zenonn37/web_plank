Meteor.publish("Companion", function(){

     var user = Meteor.users.findOne({_id:this.userId});

    if (Roles.userIsInRole(user,["admin"])) {
        console.log('this user is a super user or admin', this.userId);
      return[

        Members.find({user:this.userId},{fields:{"first":1,"last":1,"email":1}}),
        Staff.find({user:this.userId},{fields:{"firstname":1,"lastname":1}})

      ];
    }

    this.stop();
    return;


});
Meteor.publish("Companions", function(token){
  check(token, String);

    return Companion.find({"token":token});

});

Meteor.publish("Connect", function(){

     var user = Meteor.users.findOne({_id:this.userId});

    if (Roles.userIsInRole(user,["admin"])) {
        console.log('this user is a super user or admin', this.userId);
      return[

        Members.find({user:this.userId},{fields:{"first":1,"last":1,"email":1}}),
        Staff.find({user:this.userId},{fields:{"firstname":1,"lastname":1,"email":1}})

      ]


    }



 this.stop();
 return;

});
