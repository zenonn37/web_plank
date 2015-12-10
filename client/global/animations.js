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
 },

 smallPopoutOpen:function() {
    var $superCoverSmall = $('.super-cover-small');
    var $head = $('.head');
    var $closeSmallPopout = $('.close-small-popout');
   //e:element/p:properties/o:options
    var mySeq = [
      {e:$superCoverSmall,p:{left:'200px'},o:{duration:400,easing:"swing"}},
      {e:$head,p:{opacity:1},o:{stagger:150,duration:200,easing:"swing"}},
      {e:$closeSmallPopout,p:{opacity:1, rotateZ:'360deg'},o:{stagger:150,duration:800,easing:"swing"}},


    ];

  $.Velocity.RunSequence(mySeq);
 },
 smallPopoutClose:function() {
   var $superCoverSmall = $('.super-cover-small');
   var $head = $('.head');
   var $closeSmallPopout = $('.close-small-popout');
   var mySeq = [
     {e:$closeSmallPopout,p:{opacity:0, rotateZ:'-360deg'},o:{duration:400,easing:"swing"}},
     {e:$head,p:{opacity:0},o:{stagger:150,duration:200,easing:"swing"}},
     {e:$superCoverSmall,p:{left:'-1000px'},o:{stagger:150,duration:400,easing:"swing"}},




   ];

     $.Velocity.RunSequence(mySeq);
 }

};
