//overlay animatons object
Overlays = {



 openSideNav:function() {
  var $navInner = $('.nav-inner');
    var $navOverlay = $('.nav-overlay');

    var mySeq = [

      {e:$navOverlay,p:{left:'0px'},o:{duration:100,easing:"swing"}},
      {e:$navInner,p:{left:'0px'},o:{stagger:150,duration:200,easing:"swing"}}

    ];

    $.Velocity.RunSequence(mySeq);
 },
 closeSideNav:function() {
  var $navInner = $('.nav-inner');
    var $navOverlay = $('.nav-overlay');

    var mySeq = [
      {e:$navInner,p:{left:'-100px'},o:{duration:200,easing:"swing"}},
      {e:$navOverlay,p:{left:'-400px'},o:{stagger:150,duration:100,easing:"swing"}},


    ];

    $.Velocity.RunSequence(mySeq);
 }

};
