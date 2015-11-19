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
      max:100,
      autoform:{
        placeholder:'Name',

      }
    },
    genre:{
      type:String,
      label:"Service Type",
      max:60,
      autoform:{
        placeholder:'Genre',
        

      }

    },
    weekly:{
      type:Number,
      label:"How Many Weekly",
      max:10,
      autoform:{
        placeholder:'Count'
      }
    },
    revenue:{
      type:Number,
      label:"Cost",
      max:10,
      autoform:{
        placeholder:'Count'
      }

    },
    min:{
      type:Number,
      label:"Minimum attendence",
      max:10,
      autoform:{
        placeholder:'Minimum'
      }

    },
    max:{
      type:Number,
      label:"Maximum attendence",
      max:10,
      autoform:{
        placeholder:'Maximum'
      }

    },

    duration:{
      type:Number,
      label:"Service duration",
      max:10,
      autoform:{
        placeholder:'Duration'
      }

    },
    goal:{
      type:String,
      optional:true,
      label:"Goal of Service",
      max:100,
      autoform:{
        placeholder:'Goal'
      }

    },
    advert:{
      type:String,
      optional:true,
      label:"Advertisement",
      max:2000,
      autoform:{
        afFieldInput:{
          type:"textarea",
          rows:10

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
