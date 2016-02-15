Training  = new Mongo.Collection("training");

Training.allow({
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
Training.deny({
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
/*
//schema
Training.attachSchema(new SimpleSchema({
    name:{
      type:String,
      label:"Training Name",
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
        type:"select",
        options: function() {
          return[
            {label:"Boxing",value:"Boxing"},
            {label:"Ballet",value:"Ballet"},
            {label:"Gymnastics",value:"Gymnastics"},
            {label:"Kick Boxing",value:"Kick Boxing"},
            {label:"Suspension",value:"Suspension"},
            {label:"UFC",value:"UFC"},
            {label:"Yoga",value:"Yoga"},
            {label:"Zumba",value:"Zumba"}
          ];
        }


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

        falseLabel:"Paid Service",
        trueLabel:"Free Service"
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
    scheduled:{
      type:Boolean,
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
*/
