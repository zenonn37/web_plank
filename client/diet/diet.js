AutoForm.debug();

AutoForm.hooks({

  newChallenges:{
     onSuccess:function(formType, result) {
      console.log('excellent');
       formsPres.resetSlides();
     }
  }
});

Template.newDiet.onRendered(function() {

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



Template.newDiet.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.Diet.events({
  "click .open-data ": function(event, template){
   event.preventDefault();

        //$('#member-form').openModal();
        Presentation.globalDataPopout();
  }
});


Template.Diet.onCreated(function() {
    this.subscribe("diets");
});
Template.dietView.onCreated(function() {
    this.subscribe("diets");
});
Template.Diet.created = function() {
  // body...
}

Template.Diet.rendered = function() {
  // body...
}


Template.Diet.helpers({
  items: function(){
    return Diets.find({});

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.Diet.events({
  "click .open-modal": function(e, template){
     e.preventDefault();
     $('#diet-form').openModal();
  }
});
Template.dietView.events({
  "click .open-modal": function(e, template){
     e.preventDefault();
     $('#edit-diet-form').openModal();
  }
});
