Meteor.methods({
  newMembers:function(obj){

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

    Members.insert(data);


  }
});
