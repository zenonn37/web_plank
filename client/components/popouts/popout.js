
Template.globalDataPopout.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});



Template.globalDataPopout.events({
  "click .back": function(event, template){
    Session.set('slides',Number(Session.get('slides')) - 1 );

  formsPres.globalSlidesCtrl();


  },
  "click .forward": function(event, template){
    Session.set('slides',Number(Session.get('slides')) + 1 );

  formsPres.globalSlidesCtrl();


  }
});
