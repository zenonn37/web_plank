Meteor.methods({

  newMembers:function(obj){
    var user = Meteor.user();
    check(obj,{
      first:String,
      last:String,
      email:String,
      age:String,
      gender:String,
      phone:String,
      street:String,
      city:String,
      zip:String,
      photo: String,
      state: String
    })

    var data = {
      first:obj.first,
      last:obj.last,
      email:obj.email,
      age:obj.age,
      gender:obj.gender,
      phone:obj.phone,
      street:obj.street,
      city:obj.city,
      zip:obj.zip,
      photo: parseInt(obj.photo),
      state: obj.state
    }

   _.extend(data,{
     userId:user._id,
     createdAt: new Date(),
     status:"Active"
   })
    Members.insert(data);
      var findLast =  Members.findOne({},{sort:{createdAt:-1}});
    var accounts = {
          memberId:findLast._id,
          userId:user._id,
          balance:0,
          monthly:0,
          weekly:0,
          day:0,
          status:'active',
          evaluation:false,
          new:true,
          submitted:new Date().getTime()
      }

      Account.insert(accounts);



  },

  editMember:function(obj) {
      var user = Meteor.user();
      check(obj,{
        first:String,
        last:String,
        email:String,
        age:String,
        gender:String,
        phone:String,
        street:String,
        city:String,
        zip:String,
        photo: String,
        state: String,
        _id:String
      });

      var data = {
        first:obj.first,
        last:obj.last,
        email:obj.email,
        age:obj.age,
        gender:obj.gender,
        phone:obj.phone,
        street:obj.street,
        city:obj.city,
        zip:obj.zip,
        photo: parseInt(obj.photo),
        state: obj.state,
        currentId:obj._id
      }
      _.extend(data,{
         updatedAt:new Date().getTime()
      });

      if (!user) {
        console.log('no user');
        Router.go('signin');
      }else {
        Members.update(data.currentId, {$set:data
        });

      }

  },
  deleteMember:function(obj) {
     check(obj, String);
         console.log(obj);
     Members.remove(obj);

     console.log(obj + "removed");




  },
  suspendMember:function(obj) {
    check(obj,{
      suspend:String,
      currentId:String
    });
    if (!Meteor.user()) {
      console.log('not logged');
    }else {
      Members.update(obj.currentId, {$set:{
         status:obj.suspend
      }});
    }



  }
});
