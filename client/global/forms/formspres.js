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
    var $globalSlidesSix  =   $('.slide-six');
    var $globalSlidesSeven   =   $('.slide-seven');
    var $globalSlidesEight =   $('.slide-eight');
    var $globalSlidesNine =   $('.slide-nine');
    var $globalSlidesTen  =   $('.slide-ten');
    var $assist = $('.assist');
    var $percentage = $('.percentage');
    var durn = 100;
    var disNo = "none";
    var disYes = "block";


      var globalDataSeq6 = [
        {e:$globalSlidesTen,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
        {e:$globalSlidesNine,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
         {e:$globalSlidesEight,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesSeven,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesSix,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesFive,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesFive,p:{opacity:0,top:'0px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesTwo,p:{opacity:0},o:{display:disNo,duration:200,easing:"ease-in"}},
            {e:$globalSlidesOne,p:{opacity:1},o:{display:disYes,duration:200,easing:"ease-in"}}
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
      slideOne();
        console.log('slide one');
        break;
        case 2:
        slideTwo();

        console.log('slide two');
        break;
        case 3:
        slideThree();
        console.log('slide three');
        break;
        case 4:
        slideFour();
        console.log('slide four');
        break;
        case 5:
          slideFive();
        console.log('slide five');
        break;

      default:
        SlideFoward(1);
        console.log('slide one');
        break;

    }
    console.log(Session.get('slides'));

    function slideOne() {
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree   =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive =   $('.slide-five');
      var durn = 100;
      var invisible =  0.1;
      var disNo = "none";
      var disYes = "block";

      var globalDataSeq = [
        //get rid of current slide first!
        {e:$globalSlidesTwo,p:{opacity:0},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
        //current
        //prior slide
          {e:$globalSlidesFive,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        //
        {e:$globalSlidesFour,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        {e:$globalSlidesThree,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        {e:$globalSlidesTwo,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        //render needed slide
        {e:$globalSlidesOne,p:{opacity:1},o:{display:disYes,duration:durn,easing:"ease-in-out"}}

      ];
           $.Velocity.RunSequence(globalDataSeq);
      console.log('called in switch slide one');

    };
    function slideTwo() {
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree   =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive =   $('.slide-five');
      var durn = 100;
      var invisible =  0.1;
      var disNo = "none";
      var disYes = "block";

      var globalDataSeq = [
        //get rid of current slide first!
        {e:$globalSlidesOne,p:{opacity:0},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
        //current
        //prior slide
          {e:$globalSlidesThree,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        //
        {e:$globalSlidesFive,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        {e:$globalSlidesFour,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},

        //render needed slide
        {e:$globalSlidesTwo,p:{opacity:1},o:{display:disYes,duration:durn,easing:"ease-in-out"}}

      ];
           $.Velocity.RunSequence(globalDataSeq);
      console.log('called in switch slide two');


    };

    function slideThree() {
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree   =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive =   $('.slide-five');
      var durn = 100;
      var invisible =  0.1;
      var disNo = "none";
      var disYes = "block";

      var globalDataSeq = [
        //get rid of current slide first!
        {e:$globalSlidesTwo,p:{opacity:0},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
        //current
        //prior slide
          {e:$globalSlidesOne,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        //
        {e:$globalSlidesFive,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        {e:$globalSlidesFour,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},

        //render needed slide
        {e:$globalSlidesThree,p:{opacity:1},o:{display:disYes,duration:durn,easing:"ease-in-out"}}

      ];
           $.Velocity.RunSequence(globalDataSeq);
      console.log('called in switch slide three');

    };

    function slideFour() {
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree   =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive =   $('.slide-five');
      var durn = 100;
      var invisible =  0.1;
      var disNo = "none";
      var disYes = "block";

      var globalDataSeq = [
        //get rid of current slide first!
        {e:$globalSlidesThree,p:{opacity:0},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
        //current
        //prior slide
          {e:$globalSlidesTwo,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        //
        {e:$globalSlidesFive,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        {e:$globalSlidesOne,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},

        //render needed slide
        {e:$globalSlidesFour,p:{opacity:1},o:{display:disYes,duration:durn,easing:"ease-in-out"}}

      ];
           $.Velocity.RunSequence(globalDataSeq);
      console.log('called in switch slide three');

    };
    function slideFive() {
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree   =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive =   $('.slide-five');
      var durn = 100;
      var invisible =  0.1;
      var disNo = "none";
      var disYes = "block";

      var globalDataSeq = [
        //get rid of current slide first!
        {e:$globalSlidesFour,p:{opacity:0},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
        //current
        //prior slide
          {e:$globalSlidesThree,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        //

        {e:$globalSlidesOne,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        {e:$globalSlidesTwo,p:{opacity:0},o:{display:disNo,duration:invisible,easing:"ease-in-out"}},
        //render needed slide
        {e:$globalSlidesFive,p:{opacity:1},o:{display:disYes,duration:durn,easing:"ease-in-out"}}

      ];
           $.Velocity.RunSequence(globalDataSeq);
      console.log('called in switch slide three');

    };

    function SlideFoward(n) {
      var n = n;
      console.log('called '  + n);
      var $globalSlidesOne  =   $('.slide-one');
      var $globalSlidesTwo   =   $('.slide-two');
      var $globalSlidesThree =   $('.slide-three');
      var $globalSlidesFour  =   $('.slide-four');
      var $globalSlidesFive  =   $('.slide-five');
      var $globalSlidesSix  =   $('.slide-six');
      var $globalSlidesSeven   =   $('.slide-seven');
      var $globalSlidesEight =   $('.slide-eight');
      var $globalSlidesNine =   $('.slide-nine');
      var $globalSlidesTen  =   $('.slide-ten');
      var $assist = $('.assist');
      var $percentage = $('.percentage');
      var durn = 100;
      var disNo = "none";
      var disYes = "block";

      switch (n) {
        case 1:
        var globalDataSeq = [
            {e:$globalSlidesTen,p:{opacity:0,top:'-10px'},o:{display:disNo ,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesNine,p:{opacity:0,top:'-10px'},o:{display:disNo ,duration:durn,easing:"ease-in-out"}},
             {e:$globalSlidesEight,p:{opacity:0,top:'-10px'},o:{display:disNo ,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesSeven,p:{opacity:0,top:'-10px'},o:{display:disNo ,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesSix,p:{opacity:0,top:'-10px'},o:{display:disNo ,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesFive,p:{opacity:0,top:'-10px'},o:{display:disNo ,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:disNo ,duration:durn,easing:"ease-in-out"}},
          //{e:$assist,p:{opacity:0},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesOne,p:{opacity:1,top:'0px'},o:{display:disYes,duration:durn,easing:"ease-in-out"}},
          //{e:$assist,p:{opacity:1},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}}
        ];
             $.Velocity.RunSequence(globalDataSeq);
        console.log('called in switch slide one');


          break;
          case 2:
            console.log('called in switch slide two');
            var globalDataSeq = [
              {e:$globalSlidesTen,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesNine,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
               {e:$globalSlidesEight,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesSeven,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesSix,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesFive,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              //{e:$assist,p:{opacity:0},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesTwo,p:{opacity:1,top:'0px'},o:{display:disYes,duration:durn,easing:"ease-in-out"}},
              //{e:$assist,p:{opacity:1},o:{stagger:150,display:'block',duration:durn,easing:"ease-in-out"}}
            ];
                 $.Velocity.RunSequence(globalDataSeq);

            break;
            case 3:
              console.log('called in switch slide three');
              var globalDataSeq = [
                {e:$globalSlidesTen,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesNine,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                 {e:$globalSlidesEight,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesSeven,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesSix,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesFive,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                {e:$globalSlidesThree,p:{opacity:1,top:'0px'},o:{display:disYes,duration:durn,easing:"ease-in-out"}}
              ];
                   $.Velocity.RunSequence(globalDataSeq);

              break;


              case 4:
                console.log('called in switch slide four');
                var globalDataSeq = [
                  {e:$globalSlidesTen,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesNine,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                   {e:$globalSlidesEight,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesSeven,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesSix,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesFive,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                  {e:$globalSlidesFour,p:{opacity:1,top:'0px'},o:{display:disYes,duration:durn,easing:"ease-in-out"}}
                ];
                     $.Velocity.RunSequence(globalDataSeq);

                break;

                case 5:
                  console.log('called in switch slide five');
                  var globalDataSeq = [
                    {e:$globalSlidesTen,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesNine,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                     {e:$globalSlidesEight,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                      {e:$globalSlidesSeven,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                      {e:$globalSlidesSix,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},

                    {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesTwo,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesOne,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
                    {e:$globalSlidesFive,p:{opacity:1,top:'0px'},o:{display:disYes,duration:durn,easing:"ease-in-out"}}
                  ];
                       $.Velocity.RunSequence(globalDataSeq);

                  break;
        default:
        var globalDataSeq6 = [
          {e:$globalSlidesTen,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
          {e:$globalSlidesNine,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
           {e:$globalSlidesEight,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesSeven,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesSix,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
            {e:$globalSlidesFive,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesFive,p:{opacity:0,top:'0px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesFour,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesThree,p:{opacity:0,top:'-10px'},o:{display:disNo,duration:durn,easing:"ease-in-out"}},
              {e:$globalSlidesTwo,p:{opacity:0},o:{display:disNo,duration:200,easing:"ease-in"}},
              {e:$globalSlidesOne,p:{opacity:1},o:{display:disYes,duration:200,easing:"ease-in"}}
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
