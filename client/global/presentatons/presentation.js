Presentation = {
  //Release function
   globalDataPopout:function() {
      var $globalPopout = $('.global-popout');
      var $closeDataPopout = $('.close-data-popout');
      var $globalWrap = $('.wrap-presentation');
      var $qContent = $('.q-content');
      var $globalQuick = $('.global-quick');
      var $panelDecor =  $('.panel-decor');
      var $dataCoverOverlay = $('.data-cover-overlay');
      var $assist = $('.assist');
      var $percentage = $('.percentage');

      var globalDataSeq = [
        {e:$dataCoverOverlay,p:{left:'0px'},o:{duration:100,easing:"ease-in"}},
        {e:$dataCoverOverlay,p:{opacity:0.9},o:{duration:200,easing:"ease-in"}},
        {e:$globalWrap,p:{left:'0px'},o:{duration:600,easing:"spring"}},
        {e:$panelDecor,p:{left:'0px'},o:{stagger:100,duration:200,easing:"ease-in"}},
        {e:$qContent,p:{opacity:0.9},o:{stagger:100,duration:200,easing:"ease-in"}},
        {e:$assist,p:{opacity:1.0},o:{stagger:100,duration:300,easing:"ease-in"}},
        {e:$closeDataPopout,p:{rotateZ:'180deg',opacity:1.0},o:{stagger:100,duration:300,easing:"ease-in"}},
        {e:$dataCoverOverlay,p:{opacity:0.4},o:{stagger:100,duration:200,easing:"ease-in"}}

      ];
        $.Velocity.RunSequence(globalDataSeq);
  },
  //reverse function
  globalDataPopoutClose:function() {
    Session.set('slides',1);
    var $globalPopout = $('.global-popout');
    var $closeDataPopout = $('.close-data-popout');
    var $globalWrap = $('.wrap-presentation');
    var $qContent = $('.q-content');
    var $globalQuick = $('.global-quick');
    var $panelDecor =  $('.panel-decor');
    var $dataCoverOverlay = $('.data-cover-overlay');
    var $assist = $('.assist');
    var $percentage = $('.percentage');

     var globalDataSeq = [
       {e:$dataCoverOverlay,p:{opacity:0.9},o:{duration:100,easing:"ease-out"}},
       {e:$closeDataPopout,p:{rotateZ:'-180deg',opacity:0},o:{stagger:100,duration:100,easing:"ease-out"}},
       {e:$assist,p:{opacity:0},o:{stagger:50,duration:100,easing:"ease-out"}},
       {e:$qContent,p:{opacity:0},o:{stagger:50,duration:100,easing:"ease-out"}},
       {e:$panelDecor,p:{left:'-40px'},o:{stagger:100,duration:200,easing:"ease-out"}},
       {e:$globalWrap,p:{left:'-3000px'},o:{stagger:100,duration:300,easing:"ease-out"}},
       {e:$dataCoverOverlay,p:{opacity:0},o:{stagger:100,duration:200,easing:"ease-in"}},
       {e:$dataCoverOverlay,p:{left:'-2000px'},o:{duration:100,easing:"ease-in"}}





     ];
       $.Velocity.RunSequence(globalDataSeq);
 }

  //end Release function

};
