Meteor.methods({
  newAthletes:function(obj){

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
        photo: String,
        number:String,
        class:String,
        state:String,
        pos1:String,
        pos2:String,
        pos3:String


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
        number:obj.number,
        class:obj.class,
        state:obj.state,
        pos1:obj.pos1,
        pos2:obj.pos2,
        pos3:obj.pos3

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
