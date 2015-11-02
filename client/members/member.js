Template.editMember.rendered = function() {
    $('.select-gender').material_select();
    $('.select-state').material_select();
}


Template.editMember.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.editMember.events({
  "submit .edit-members": function(event){
     event.preventDefault();

     var currentId = this._id;

     var obj = {
       first: event.target.first.value,
       age:  event.target.age.value,
       gender: $('.select-gender').find(':selected').data('gen'),
       last:  event.target.last.value,
       email: event.target.email.value,
       phone: event.target.phone.value,
       street: event.target.street.value,
       city: event.target.city.value,
       state: $('.select-state').find(':selected').data('state'),
       zip: event.target.zip.value,
       photo: event.target.photo.value,
       id:currentId
     }

     console.log(obj.first);

     Meteor.call('editMember', obj, function(error){
       if(error){
         console.log("error", error);
       }
  });

}

});


Template.memberPage.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.memberPage.events({
  "click btn": function(event, template){
      $('.fixed-action-btn').openFAB();
  }
});



var data = [

  {
    value:50,
    color:'#FF6D5B',
    highlight: "#FF5A5E",
    label: "Red"

  },
  {
    value:50,
    color:'#efefef',
    highlight: "#FF5A5E",
    label: "Red"
  }


]

var data2 = {
    labels: ["October", "November"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(106, 27, 154,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [10, 15]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(74, 20, 140,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [3, 12]
        }
    ]
};
var options2 = {
//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
   scaleBeginAtZero : true,

   //Boolean - Whether grid lines are shown across the chart
   scaleShowGridLines : false,

   //String - Colour of the grid lines
   scaleGridLineColor : "rgba(0,0,0,.05)",

   //Number - Width of the grid lines
   scaleGridLineWidth : 1,

   //Boolean - Whether to show horizontal lines (except X axis)
   scaleShowHorizontalLines: true,

   //Boolean - Whether to show vertical lines (except Y axis)
   scaleShowVerticalLines: true,

   //Boolean - If there is a stroke on each bar
   barShowStroke : true,

   //Number - Pixel width of the bar stroke
   barStrokeWidth : 2,

   //Number - Spacing between each of the X value sets
   barValueSpacing : 5,

   //Number - Spacing between data sets within X values
   barDatasetSpacing : 1,

   //String - A legend template
   legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}


var options = {

  //Boolean - Whether we should show a stroke on each segment
   segmentShowStroke : false,

   //String - The colour of each segment stroke
   segmentStrokeColor : "#fff",

   //Number - The width of each segment stroke
   segmentStrokeWidth : 2,

   //Number - The percentage of the chart that we cut out of the middle
   percentageInnerCutout : 80, // This is 0 for Pie charts

   //Number - Amount of animation steps
   animationSteps : 100,

   //String - Animation easing effect
   animationEasing : "easeOutBounce",

   //Boolean - Whether we animate the rotation of the Doughnut
   animateRotate : true,

   //Boolean - Whether we animate scaling the Doughnut from the centre
   animateScale : false,

   //String - A legend template
   legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}


Template.memberPage.rendered = function() {
  var ctx = $('#guageChart').get(0).getContext("2d");
    var ctx2 = $('#guageChart2').get(0).getContext("2d");

  var guageChart = new Chart(ctx).Bar(data2,options2);
  var guageChart2 = new Chart(ctx2).Pie(data,options);

  $(".dial").knob({
    'stepsize': 0.1,
    val:45
  });

  $(".arc").knob({
    'stepsize': 0.1,
      val:20
  });
}
