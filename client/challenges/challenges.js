AutoForm.debug();

AutoForm.hooks({

  newChallenges:{
     onSuccess:function(formType, result) {
      console.log('excellent');
       formsPres.resetSlides();
     }
  }
});

Template.newChallenge.onRendered(function() {

    formsPres.setSlideCount(3);
    formsPres.globalSlidesCtrl();
    console.log('rendered');
    $('.datepicker')
      .pickadate({
        selectMonths:true,
        selectYears:1
      });
      $('.counts')
        .characterCounter();
});


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
  "click .open-data ": function(event, template){
   event.preventDefault();
        //$('#member-form').openModal();
        Presentation.globalDataPopout();
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
