Template.globalDataPopout.onRendered(function() {
  var routeName = Router.current().route.getName();
  console.log(routeName);
  return routeName;
});
Template.globalDataPopout.helpers({

    intructions:function() {
      switch (Session.get('slides')) {
        case 1:
          var intructions = "Lets get started with some basic information about your new Member! Please enter their full name,age and gender.";
          return intructions;
          break;
        case 2:
            var intructions = "Please Enter Contact information";
            return intructions;
            break;
        case 3:
            var intructions = "Please Enter Address information";
            return intructions;
            break;
        default:
          var intructions = "Lets get started with some basic information about your new Member! Please enter their full name,age and gender.";
          return intructions;
      }

    },
    checkUrl:function() {
      var routeName = Router.current().route.getName();
      console.log(routeName);
      return routeName;
    }
});

function memberForms() {

}


Template.slides.helpers({
  intro:function() {

    //presentation text new members
    var intro = "Basic Information";
      return intro;
  },

    intro2:function() {
      var intro2 = "Contact Information";
      return intro2;
    }
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
