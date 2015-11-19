Services  = new Mongo.Collection("services");
Services.allow({
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
Services.deny({
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

//schema
Services.attachSchema(new SimpleSchema({
    name:{
      type:String,
      label:"Service Name",
      max:200,
      autoform:{
        placeholder:'Name'
      }
    },
    genre:{
      type:String,
      label:"Service Type",
      max:60,
      autoform:{
        placeholder:'Type'
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

    },
    enrolled:{
      type:Array,
      optional:true,
      autoform:{
        omit:true
      }
    },
    'enrolled.$':{
      type:Object
    },
    'enrolled.$.member':{
      type:String
    }
}));
