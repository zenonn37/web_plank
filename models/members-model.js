Members = new Mongo.Collection("members");
Stats = new Mongo.Collection("stats");
Members.allow({
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

Members.deny({
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


Members.attachSchema(new SimpleSchema({
  first:{
    type:String,
    label:"Firstname"
  },
  last:{
    type:String,
    label:"Lastname"
  },


photo:{
  type:Number,
  label:"Photo"
},

  age:{
    type:String,
    label:"Age",
     min:1,
     max:100,


  },
  email:{
    type:String,
      label:"Email"
  },
  main:{
    type:String,
      label:"Main Phone"
  },
  secondary:{
    type:String,
      label:"Secondary Phone",
      optional:true
  },
  street:{
    type:String,
      label:"Street"
  },
  city:{
    type:String,
      label:"City"
  },

  zip:{
    type:String,
    label:"Zip"
  },


  gender:{
    type:String,
    autoform:{
      type:"select",
      options: function() {
        return[
          {label:"Male",value:"men"},
          {label:"Female",value:"women"}
        ];
      }


    }

  },
  state:{
    type:String,
    autoform:{
      type:"select",
      options: function() {
        return[
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
          {label:"Arizona",value:"Arizona"},
          {label:"Arkansas",value:"Arkansas"},
          {label:"California",value:"California"},
          {label:"Colorado",value:"Colorado"},
          {label:"Connecticut",value:"Connecticut"},
          {label:"Delaware",value:"Delaware"},
          {label:"Florida",value:"Florida"},
          {label:"Georgia ",value:"Georgia"},
          {label:"Hawaii",value:"Hawaii"},
          {label:"Idaho",value:"Idaho"},
          {label:"Illinois",value:"Illinois"},
          {label:"Indiana",value:"Indiana"},
          {label:"Iowa ",value:"Iowa "},
          {label:"Kansas",value:"Kansas"},
          {label:"Kentucky",value:"Kentucky"},
          {label:"Louisiana",value:"Louisiana"},
          {label:"Maine",value:"Maine"},
          {label:"Maryland",value:"Maryland"},
          {label:"Massachusetts",value:"Massachusetts"},
          {label:"Michigan",value:"Michigan"},
          {label:"Minnesota",value:"Minnesota"},
          {label:"Mississippi",value:"Mississippi"},
          {label:"Missouri",value:"Missouri"},
          {label:"Montana ",value:"Montana"},
          {label:"Nebraska",value:"Nebraska"},
          {label:"Nevada",value:"Nevada"},
          {label:"New Hampshire",value:"New Hampshire"},
          {label:"New Jersey",value:"New Jersey"},
          {label:"New Mexico",value:"New Mexico"},
          {label:"New York",value:"New York"},
          {label:"North Carolina",value:"North Carolina"},
          {label:"North Dakota",value:"North Dakota"}
        ];
      }


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

  'enrolled.service':{
    type:[String],
    defaultValue: []
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
  evaluation:{
    type:Boolean,
    optional:true,
    autoform:{
      omit:true

    }

  },
  goals:{
    type:Boolean,
    optional:true,
    autoform:{
      omit:true

    }

  },
  challenges:{
    type:Boolean,
    optional:true,
    autoform:{
      omit:true

    }

  },
  trainer:{
    type:Boolean,
    optional:true,
    autoform:{
      omit:true

    }

  },
  connected:{
    type:Boolean,
    optional:true,
    autoform:{
      omit:true

    }

  }




}));



//schema

Account = new Mongo.Collection("accounts");
Account.allow({
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

Account.deny({
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
 Evaluation = new Mongo.Collection("evals");
  Evaluation.allow({
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

  Evaluation.deny({
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
Evaluation.attachSchema(new SimpleSchema({
  memberID:{
    type:String,
    optional:true,
    autoform:{
      omit:true
    }
  },

  height:{
    type:String,
     min:1,
     max:100,

    autoform:{
        placeholder:'Enter Height'


    }
  },
  weight:{
    type:Number,

    max:600,
    autoform:{
      placeholder:'Enter Weight'


    }

  },
  bmi:{
    type:Number,

    optional:true,
    max:100,
    autoform:{
      placeholder:'BMI'
    }
  },
  fitness:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Fitness'
    }

  },
  waist:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Waist'
    }

  },
  chest:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Chest'
    }

  },

  hips:{
    type:Number,
    optional:true,

    max:1000,
    autoform:{
      placeholder:'Hips'
    }

  },
  thighs:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Thighs',
      afFieldInput:{
        type:"text"

      }
    }

  },
  biceps:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Biceps',
      afFieldInput:{
        type:"text"

      }
    }

  },
  calves:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Calves',
      afFieldInput:{
        type:"text"

      }
    }

  },
  girth:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Girth',
      afFieldInput:{
        type:"text"

      }
    }

  },
  neck:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Neck',
      afFieldInput:{
        type:"text"

      }
    }

  },
  bfp:{
    type:Number,
    optional:true,

    max:100,
    autoform:{
      placeholder:'Body Fat Percentage',
      afFieldInput:{
        type:"text"

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
  notes:{
    type:String,
    optional:true,
    label:"Notes",
    max:100,
    autoform:{
      placeholder:'Notes',
      afFieldInput:{
        type:"textarea",
        rows:10

      }
    }

  },

}));
