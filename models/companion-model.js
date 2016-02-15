Companion = new Mongo.Collection('companion');
/*
Companion.attachSchema(new SimpleSchema({
    email:{
      type:String,
      label:"Email",

    },
      token:{
        type:String,

    },
    user:{
      type:String,

    },
    date:{
      type:Date,


    },
    memId:{
      type:String,

    }
}));
*/
Companion.allow({
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
Companion.deny({
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
