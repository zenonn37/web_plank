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
      max:100,
      autoform:{
        placeholder:'Count'
      }

    },
    min:{
      type:Number,
      label:"Minimum attendence",
      max:100,
      autoform:{
        placeholder:'Minimum'
      }

    },
    max:{
      type:Number,
      label:"Maximum attendence",
      max:100,
      autoform:{
        placeholder:'Maximum'
      }

    },

    duration:{
      type:Number,
      label:"Service duration",
      max:1000,
      autoform:{
        placeholder:'Duration'
      }

    },
    goal:{
      type:String,
      optional:true,
      label:"Goal of Service",
      max:1000,
      autoform:{
        placeholder:'Goal',
        afFieldInput:{
          type:"textarea",
          rows:10
        }
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
    paid:{
      type:Boolean,

      autoform:{
        type:"switch",
        trueLabel:"Free Service",
        falseLabel:"Paid Service"
      }
    },
    trial:{
      type:String,
      label:"Trial Period",
      allowedValues:["no","yes"],
      autoform:{
        type:"select-radio",
        
      }


    },
    period:{
      type:Number,
      optional:true,
      label:"Trial Period",
      max:100,
      autoform:{
        placeholder:'Trial'
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
