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
     status:"Active",
     evaluation:false,
     services:[]
   })
    var membersId = Members.insert(data, function(error) {
      if (error) {
        console.log(error);
      }
    });

    return{
      _id:membersId
    };




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



  },
  /*we need to use normal form and onSubmit
  hook to send memberid for stats and for callback
  to change flag on member collecton.
  */
  newStats:function(obj) {
      var user = Meteor.user();
    check(obj,{
      memberID:String,
      height:String,
      weight:Number,
      bmi:Number,
      bfp:Number,
      fitness:Number,
      waist:Number,
      chest:Number,
      hips:Number,
      thighs:Number,
      biceps: Number,
      calves: Number,
      girth:Number,
      neck: Number,
      notes: String
    })

    var data = {
      memberID:obj.memberID,
      height:obj.height,
      weight:obj.weight,
      bmi:obj.bmi,
      bfp:obj.bfp,
      fitness:obj.fitness,
      waist:obj.waist,
      chest:obj.chest,
      hips:obj.hips,
      thighs:obj.thighs,
      biceps: obj.biceps,
      calves: obj.calves,
      girth:obj.girth,
      neck: obj.neck,
      notes: obj.notes
    }

   _.extend(data,{
     user:user._id,
     created: new Date()


   })
    var evalId =   Evaluation.insert(data, function(error) {
      if (error) {
        console.log(error);
      }else {
        Members.update({_id:obj.memberID}, {$set:{
          evaluation:true
        }});

      }
    });

    return{
      _id:evalId
    };
  }
});
