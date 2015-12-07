Meteor.methods({
  newStaff:function(doc){
     console.log("called staff" + doc.name + doc.positon);

     var user = Meteor.user();
     check(doc,{
       firstname:String,
       lastname:String,
       position:String,
       photo:String,
       gender:String,
       phone:String,
       email:String



     });

      var data = {
       firstname:doc. firstname,
        lastname:doc.lastname,
        position:doc.position,
        photo:doc.photo,
        gender:doc.gender,
        phone:doc.phone,
        email:doc.email

      }


     _.extend(data,{
       created:new Date(),
       user:user._id


     });

     if (!user) {
       Router.go('/login');
       console.log('no user');
     }else{
       var staffId = Staff.insert(data,function(error) {
         if (error) {
           console.log(error + " errors not good");
         }else{
           console.log("good");
           return staffId;
         }
       });
     }


       return staffId;

  },
  editStaff:function(doc,docId){
    var user = Meteor.user();

    //check(docId, String);


    if (!user) {
      Router.go('/login');
      console.log('no user');
    }else{
      console.log("called edit staff" + doc.name);
      Staff.update({_id:docId},doc);
      }




    },
    enrollMembers:function(data) {
      var user = Meteor.user();
      check(data,{
        member:String,
        serid:String
      });

      console.log(data.member + data.serid);

      Services.update({_id:data.serid}, {$addToSet:{
      'enrolled.member':data.member
     }});
      Members.update({_id:data.member}, {$addToSet:{
      service:data.serid
    }});


    },
    removeMembers:function(data) {
      var user = Meteor.user();
      check(data,{
        member:String,
        serid:String
      });
        console.log(data.member + data.serid);

        Services.update({_id:data.serid}, {$pullAll:{
        'enrolled.member':[data.member]
       }});
        Members.update({_id:data.member}, {$pullAll:{
        service:[data.serid]
         }});

    }
  }
);
