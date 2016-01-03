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
    type:String
  },
  last:{
    type:String
  },

  age:{
    type:String,
     min:1,
     max:100,


  },
  email:{
    type:String
  },
  main:{
    type:String
  },
  secondary:{
    type:String
  },
  street:{
    type:String
  },
  city:{
    type:String
  },

  zip:{
    type:String
  },


  gender:{
    type:String,
    autoform:{
      type:"select",
      options: function() {
        return[
          {label:"Male",value:"Male"},
          {label:"Female",value:"Female"}
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
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
          {label:"Alabama",value:"Alabama"},
          {label:"Alaska",value:"Alaska"},
        ];
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
