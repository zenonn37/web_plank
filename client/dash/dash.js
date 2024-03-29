
Template.dashboard.helpers({
  current:function() {
    var routeName = Router.current().route.getName();
    console.log(routeName);
    return routeName;
  }
});

Template.dashboard.events({
  "click .logout": function(e, template){
      e.preventDefault();
      AccountsTemplates.logout();
      Router.go('login')
  }
});




Template.dashboard.profit = function() {
    return {
      chart: {
           type: 'bar'
       },
       title: {
           text: 'Fruit Consumption'
       },
       xAxis: {
           categories: ['Apples', 'Bananas', 'Oranges']
       },
       yAxis: {
           title: {
               text: 'Fruit eaten'
           }
       },
       series: [{
           name: 'Jane',
           data: [1, 0, 4]
       }, {
           name: 'John',
           data: [5, 7, 3]
       }]

    };
};




Template.dashboard.topGenresChart = function() {
    return {
      chart: {
           plotBackgroundColor: null,
           plotBorderWidth: 0,
           plotShadow: false
       },
       title: {
           text: 'Browser<br>shares<br>2015',
           align: 'center',
           verticalAlign: 'middle',
           y: 40
       },
       tooltip: {
           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       },
       plotOptions: {
           pie: {
               dataLabels: {
                   enabled: true,
                   distance: -50,
                   style: {
                       fontWeight: 'bold',
                       color: 'white',
                       textShadow: '0px 1px 2px black'
                   }
               },
               startAngle: -90,
               endAngle: 90,
               center: ['50%', '75%']
           }
       },
       series: [{
           type: 'pie',
           name: 'Browser share',
           innerSize: '50%',
           data: [
               ['Firefox',   10.38],
               ['IE',       56.33],
               ['Chrome', 24.03],
               ['Safari',    4.77],
               ['Opera',     0.91],
               {
                   name: 'Proprietary or Undetectable',
                   y: 0.2,
                   dataLabels: {
                       enabled: false
                   }
               }
           ]
       }]

    };
};
