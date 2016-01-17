Athletes = new Mongo.Collection("athletes");
Athletes.allow({
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
Athletes.deny({
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

Athletes.attachSchema(new SimpleSchema({
  first:{
    type:String,
    label:"Firstname"
  },
  last:{
    type:String,
    label:"Lastname"
  },

  number:{
    type:String,
    label:"Jersey Number"
  },

photo:{
  type:String,
  label:"Photo"
},
class:{
  type:String,
  label:'Class'
},
state:{
  type:String,
  label:"State"
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

  pos1:{
    type:String,
    label:"Position Main"

  },
  pos2:{
    type:String,
    label:"Position Secondary"

  },
  pos3:{
    type:String,
    label:"Position Third"

  },


  enrolled:{
    type:Object,
    optional:true,
    blackbox: true,
    autoform:{
      omit:true
    }
  },

  'enrolled.training':{
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
  training:{
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
