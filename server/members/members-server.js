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
     createdAt: new Date().getTime()
   })
    Members.insert(data);


  }
});
