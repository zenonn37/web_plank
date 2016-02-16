
var companion = FlowRouter.group({
  triggersEnter:[function() {
    console.log("customers only");

  }],
  prefix:'/companion'
});
//sidenav routes
companion.route('/',{
  name:'dashboard',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.BaseDash/>});
  }

});

companion.route('/settings',{
  name:'settings',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.BaseSettings/>});
  }

});
companion.route('/messages',{
  name:'messages',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Messages/>});
  }

});
companion.route('/friends',{
  name:'friends',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Friends />});
  }

});
companion.route('/help',{
  name:'help',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Help />});
  }

});

companion.route('/graduation',{
  name:'graduation',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Graduation/>});
  }

});

//sub routes
companion.route('/profile',{
  name:'profile',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.BaseProfile />});
  }

});
companion.route('/challenges',{
  name:'challenges',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Challenges />});
  }

});
companion.route('/goals',{
  name:'goals',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Goals />});
  }

});
companion.route('/stats',{
  name:'stats',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Stats />});
  }

});
companion.route('/account',{
  name:'account',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Accounts />});
  }

});
companion.route('/services',{
  name:'services',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Services />});
  }

});
companion.route('/training',{
  name:'training',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Training />});
  }

});
companion.route('/store',{
  name:'Store',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Store />});
  }

});
companion.route('/health',{
  name:'health',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Health />});
  }

});
companion.route('/gallery',{
  name:'gallery',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.Gallery />});
  }
});
