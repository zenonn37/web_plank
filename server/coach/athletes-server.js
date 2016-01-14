Meteor.methods({
  newAthlete:function(obj){

      var user = Meteor.user();
      check(obj,{
        first:String,
        last:String,
        email:String,
        age:String,
        gender:String,
        main:String,
        secondary:String,
        street:String,
        city:String,
        zip:String,
        photo: String

      })

      var data = {
        first:obj.first,
        last:obj.last,
        email:obj.email,
        age:obj.age,
        gender:obj.gender,
        main:obj.main,
        secondary:obj.secondary,
        street:obj.street,
        city:obj.city,
        zip:obj.zip,
        photo: parseInt(obj.photo),

      }

     _.extend(data,{
       user:user._id,
       created: new Date(),
       status:"Active",
       evaluation:false,
       goals:false,
       challenges:false,
       training:false,
       connected:false

     })
      var athletesId = Athletes.insert(data, function(error) {
        if (error) {
          console.log(error);
        }else{
          console.log('good');
        }
      });

      return{
        _id:athletesId
      };




    }

});
