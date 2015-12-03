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
      label:"Height",
      autoform:{
          placeholder:'Enter Height',
        afFieldInput:{
          type:"text"

        }

      }
    },
    weight:{
      type:Number,
      label:"Weight",
      max:600,
      autoform:{
        placeholder:'Enter Weight'


      }

    },
    bmi:{
      type:Number,
      label:"BMI",
      optional:true,
      max:100,
      autoform:{
        placeholder:'BMI'
      }
    },
    fitness:{
      type:Number,
      optional:true,
      label:"Fitness Level",
      max:100,
      autoform:{
        placeholder:'Fitness'
      }

    },
    waist:{
      type:Number,
      optional:true,
      label:"Waist",
      max:100,
      autoform:{
        placeholder:'Waist'
      }

    },
    chest:{
      type:Number,
      optional:true,
      label:"Chest",
      max:100,
      autoform:{
        placeholder:'Chest'
      }

    },

    hips:{
      type:Number,
      optional:true,
      label:"Hips",
      max:1000,
      autoform:{
        placeholder:'Hips'
      }

    },
    thighs:{
      type:Number,
      optional:true,
      label:"Thighs",
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
      label:"Biceps",
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
      label:"Calves",
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
      label:"Girth",
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
      label:"Neck",
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
      label:"BFP",
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
