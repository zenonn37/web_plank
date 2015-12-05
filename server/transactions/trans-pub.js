Meteor.publish("transactions", function(){
 return Transactions.find({user:this.userId});
});

Meteor.publish("transaction", function(ID){
 return Transactions.find({_id:ID});
});
