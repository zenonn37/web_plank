Schedule = new Mongo.Collection('schedule');
Schedule.attachSchema(new SimpleSchema({
    name:{
      type:String,
      label:"Name",
      max:200

    },
    start:{
      type:String,
      autoform:{
        afFieldInput:{
          class:"time-start",
          type:"text"

        }
      }
    },
    end:{
      type:String,
      autoform:{
        afFieldInput:{
          class:"end-start",
          type:"text"

        }
      }
    },
    id:{
      type:String
    },
    day:{
      type:Date,
      autoform:{
        type:"pickadate"
      }
    },
    time:{
      type:String
    },
    user:{
      type:String,
       optional:true,
      autoform:{
           omit:true

      }


    },
    created:{
      type:Date,
      optional:true,
      autoform:{
        omit:true

      }

    }
}));
Schedule.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});
Schedule.deny({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
