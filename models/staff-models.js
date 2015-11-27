Staff = new Mongo.Collection('staff');
Staff.attachSchema(new SimpleSchema({
    firstname:{
      type:String,

      max:200
    },
    lastname:{
      type:String,

      max:200
    },
    phone:{
      type:String,
      max:25
    },
    email:{
      type:String,
      max:100
    },
    position:{
      type:String,
      max:50
    },
    user:{
      type:String,
       optional:true,
      autoform:{
           omit:true      }
    },
    created:{
      type:Date,
      optional:true,
      autoform:{
        omit:true

      }

    },
    photo:{
      type:String
    },
    gender:{
      type:String
    },
    enrolled:{
      type:Object,
      optional:true,
      blackbox: true,
      autoform:{
        omit:true
      }
    },

    'enrolled.member':{
      type:[String],
      defaultValue: []
    }
}));
Staff.allow({
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
Staff.deny({
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
