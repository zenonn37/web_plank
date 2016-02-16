
var customers = FlowRouter.group({
  triggersEnter:[function() {
    console.log("customers only");

  }],
  prefix:'/companion'
});

customers.route('/',{
  name:'dashboard',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.BaseDash/>});
  }

});
customers.route('/profile',{
  name:'profile',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.BaseProfile />});
  }

});

customers.route('/settings',{
  name:'settings',
  action:function() {
    ReactLayout.render(Customers.Customer,{yield:<Customers.BaseSettings/>});
  }

});
