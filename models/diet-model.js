Diets = new Mongo.Collection('diets');
Diets.attachSchema(new SimpleSchema({
    name:{
      type:String,
      label:"Name",
      max:200
    },
    type:{
      type:String,
      label:"Type",
      max:60
    },
    desp:{
      type:String,
      max:2000,
      autoform:{
        afFieldInput:{
          type:"textarea",
          rows:10,
          class:"counts"

        }
      }
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
Diets.allow({
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
Diets.deny({
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
