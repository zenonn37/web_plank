Transactions = new Mongo.Collection('transactions');
Transactions.allow({
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
Transactions.deny({
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
Transactions.attachSchema(new SimpleSchema({
    amount:{
      type:Number,
      optional:true,
      autoform:{
        omit:true
      }
    },
    sessions:{
      type:Number,
      max:100,
      autoform:{
        placeholder:'Please Enter Sessions'
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
    serviceID:{
      type:String,
       optional:true,
      autoform:{
           omit:true

      }


    },
    memberID:{
      type:String,
      optional:true,
      autoform:{
        omit:true

      }
    },
    flag:{
      type:String,
      optional:true,
      autoform:{
        omit:true

      }
    }
}));
*/
