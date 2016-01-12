Staff = new Mongo.Collection('staff');
Staff.attachSchema(new SimpleSchema({
    firstname:{
      type:String,
      label:"Firstname",
      max:200
    },
    lastname:{
      type:String,
      label:"Lastname",
      max:200
    },

    email:{
      type:String,
      regEx: SimpleSchema.RegEx.Email,
      max:100,
      autoform:{
        afFieldInput:{
          length:"100"
        }
      }
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

    zip:{
      type:String,
      label:"Zip"
    },
    position:{
      type:String,
      max:50
    },
    user:{
      type:String,
       optional:true,
      autoform:{
           omit:true      }
    },
    created:{
      type:Date,
      optional:true,
      autoform:{
        omit:true

      }

    },
    photo:{
      type:String
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
Staff.allow({
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
Staff.deny({
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
