formsPres = {

  globalSlidesCtrl:function() {
    var $globalSlidesOne  =   $('.slide-one');
    var $globalSlidesTwo   =   $('.slide-two');
    var tracker =  Session.get('slides');
    if (tracker > 4) {
      Session.set('slides',5);
    }
    if (tracker < 2) {
      Session.set('slides',1);
    }

    switch (Session.get('slides')) {
        case 1:
      SlideFoward(1);
        console.log('slide one');
        break;
        case 2:
        SlideFoward(2);

        console.log('slide two');
        break;
        case 3:
        console.log('slide three');
        break;
        case 4:
        console.log('slide four');
        break;
        case 5:
        console.log('slide five');
        break;

      default:
        console.log('slide one');
        break;

    }
    console.log(Session.get('slides'));

    function SlideFoward(n) {
      var n = n;
      console.log('called '  + n);
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive  =   $('.slide-five');

      switch (n) {
        case 1:
        var globalDataSeq = [

          {e:$globalSlidesTwo,p:{opacity:0},o:{duration:300,easing:"ease-in-out"}},
          {e:$globalSlidesOne,p:{opacity:1},o:{duration:300,easing:"ease-in-out"}}
        ];
             $.Velocity.RunSequence(globalDataSeq);
        console.log('called in switch slide one');


          break;
          case 2:
            console.log('called in switch slide two');
            var globalDataSeq = [

              {e:$globalSlidesOne,p:{opacity:0},o:{duration:300,easing:"ease-in-out"}},
              {e:$globalSlidesTwo,p:{opacity:1},o:{duration:300,easing:"ease-in-out"}}
            ];
                 $.Velocity.RunSequence(globalDataSeq);

            break;
        default:
        var globalDataSeq6 = [

          {e:$globalSlidesTwo,p:{opacity:0},o:{duration:200,easing:"ease-in"}},
          {e:$globalSlidesOne,p:{opacity:1},o:{duration:200,easing:"ease-in"}}
        ];
            $.Velocity.RunSequence(globalDataSeq6);

      }




    }

    function SlideBack() {
      // body...
    }
  },

  globalSlidesOne:function() {
     var $globalSlidesOne = $('.slide-one');
      var $globalSlidesTwo = $('.slide-two');


     var globalDataSeq = [
          {e:$globalSlidesTwo,p:{opacity:0},o:{duration:100,easing:"ease-in"}},
       {e:$globalSlidesOne,p:{opacity:1},o:{duration:100,easing:"ease-in"}}


     ];
       $.Velocity.RunSequence(globalDataSeq);
 },
 globalSlidesTwo:function() {
    var $globalSlidesTwo = $('.slide-two');
       var $globalSlidesOne = $('.slide-one');


    var globalDataSeq = [
      {e:$globalSlidesOne,p:{opacity:0},o:{duration:100,easing:"ease-in"}},
      {e:$globalSlidesTwo,p:{opacity:1},o:{duration:100,easing:"ease-in"}}


    ];
      $.Velocity.RunSequence(globalDataSeq);
}


}
