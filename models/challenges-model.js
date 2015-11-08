Challenges = new Mongo.Collection('challenges');
Challenges.attachSchema(new SimpleSchema({
    name:{
      type:String,
      label:"Name",
      max:200
    },
    challenge:{
      type:String,
      label:"Type",
      max:60
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
Challenges.allow({
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
