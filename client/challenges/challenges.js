Meteor.subscribe("challenges");
Template.Challenges.helpers({
  items: function(){
    return Challenges.find({});

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.Challenges.events({
  "click .new-challenge": function(e, template){
      e.preventDefault();
      $('#challenge-form').openModal();

  }


});

Template.challengeView.helpers({
  oneObj: function(){
    return Challenges.findOne(this._id);

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.challengeView.events({
  "click .edit-challenge": function(e, template){
      e.preventDefault();
      $('#edit-challenge-form').openModal();

  },
});
