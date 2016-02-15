Challenges = new Mongo.Collection('challenges');
/*
Challenges.attachSchema(new SimpleSchema({
    name:{
      type:String,
      label:"Challenge Name",
      max:100,
      autoform:{
        afFieldInput:{
          class:"counts",
          length:100
        }
      }

    },
    challenge:{
      type:String,
      label:"Fitness Type",
      autoform:{
        type:"select",
        options: function() {
          return[
            {label:"Aerobics",value:"Aerobics"},
            {label:"Boxing",value:"Boxing"},
            {label:"Circuit Training",value:"Circuit Training"},
            {label:"Cycling",value:"Cycling"},
            {label:"Dancing",value:"Dancing"},
            {label:"Fencing",value:"Fencing"}
          ];
        }


      }
    },
    goal:{
      type:String,
      label:"Challenge Goal",

    },
    start:{
      type:Date,
      label:"Start Date",
      max:60,
      autoform:{
        placeholder:"Start",
        afFieldInput:{
          class:"datepicker active"
        }
      }
    },
    end:{
      type:Date,
      label:"End Date",
      max:60,
      autoform:{
          placeholder:"End",
        afFieldInput:{
          class:"datepicker active"
        }
      }
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
*/
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
