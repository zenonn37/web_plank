formsPres = {

  setSlideCount:function(max) {

    var max = max;
      Session.set('slideSet',max);
    console.log(max);


  },

  resetSlides:function() {

    console.log('test');

    Session.set('slides',1);
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive  =   $('.slide-five');


      var globalDataSeq6 = [
            //{e:$globalSlidesFive,p:{opacity:0,top:'0px'},o:{display:'block',duration:100,easing:"ease-in-out"}},
            {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:'block',duration:100,easing:"ease-in-out"}},
            {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:'block',duration:100,easing:"ease-in-out"}},
            {e:$globalSlidesTwo,p:{opacity:0},o:{display:'none',duration:100,easing:"ease-in"}},
            {e:$globalSlidesOne,p:{opacity:1},o:{display:'block',duration:100,easing:"ease-in"}}
      ];
          $.Velocity.RunSequence(globalDataSeq6);

  },

  globalSlidesCtrl:function() {
    //get current slide
      var current  =  Session.get('slides');
    var max =  Session.get('slideSet');

    if (current === max || current  > max) {
      Session.set('slides',max);
    }
    if (current === 1 || current < 1) {
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
        SlideFoward(3);
        console.log('slide three');
        break;
        case 4:
        SlideFoward(4);
        console.log('slide four');
        break;
        case 5:
        SlideFoward(5);
        console.log('slide five');
        break;

      default:
        SlideFoward(1);
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
      var $assist = $('.assist');
      var $percentage = $('.percentage');
      var durn = 200;

      switch (n) {
        case 1:
        var globalDataSeq = [
              {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
          //{e:$assist,p:{opacity:0},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesOne,p:{opacity:1,top:'0px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
          //{e:$assist,p:{opacity:1},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}}
        ];
             $.Velocity.RunSequence(globalDataSeq);
        console.log('called in switch slide one');


          break;
          case 2:
            console.log('called in switch slide two');
            var globalDataSeq = [
                  {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
              //{e:$assist,p:{opacity:0},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesTwo,p:{opacity:1,top:'0px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
              //{e:$assist,p:{opacity:1},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}}
            ];
                 $.Velocity.RunSequence(globalDataSeq);

            break;
            case 3:
              console.log('called in switch slide three');
              var globalDataSeq = [
                    {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesThree,p:{opacity:1,top:'0px'},o:{display:'block',duration:durn,easing:"ease-in-out"}}
              ];
                   $.Velocity.RunSequence(globalDataSeq);

              break;


              case 4:
                console.log('called in switch slide four');
                var globalDataSeq = [
                  {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesFour,p:{opacity:1,top:'0px'},o:{display:'block',duration:durn,easing:"ease-in-out"}}
                ];
                     $.Velocity.RunSequence(globalDataSeq);

                break;

                case 5:
                  console.log('called in switch slide five');
                  var globalDataSeq = [
                    {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:'none',duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesFive,p:{opacity:1,top:'0px'},o:{display:'block',duration:durn,easing:"ease-in-out"}}
                  ];
                       $.Velocity.RunSequence(globalDataSeq);

                  break;
        default:
        var globalDataSeq6 = [
              {e:$globalSlidesFive,p:{opacity:0,top:'0px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:'block',duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesTwo,p:{opacity:0},o:{display:'none',duration:200,easing:"ease-in"}},
              {e:$globalSlidesOne,p:{opacity:1},o:{display:'block',duration:200,easing:"ease-in"}}
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
