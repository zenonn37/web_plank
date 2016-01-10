Session.setDefault("slides", 1);
Session.setDefault("slideSet", 1);




Template.globalDataPopout.onRendered(function() {
 //Session.set("slideSet",1);

});
Template.globalDataPopout.helpers({

    finish:function() {
      if (Session.get('slides') === Session.get('slideSet')) {
          formsPres.setSlideCount(4);
         return "Finish";
      }else {
        //  formsPres.setSlideCount(3);
        return "Next";
      }
    },

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
    if (Session.get('slides') === 1) {
          $('#previous').addClass('disabled');
    }else {




    }

  formsPres.globalSlidesCtrl();


  },
  "click .forward": function(event, template){
    Session.set('slides',Number(Session.get('slides')) + 1 );
    if (Session.get('slides') > 1) {
      $('#previous').removeClass('disabled');

    }
  formsPres.globalSlidesCtrl();


  }
});
