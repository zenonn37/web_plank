Router.configure({
  layoutTemplate:'layout'
});

Router.route('/',{name:'Home'});

Router.route('/about',{name:'About'});

Router.route('/contact',{name:'Contact'});

Router.route('/members',{name:'Members'});

Router.route('/staff',{name:'Staff'});

Router.route('/companion',{name:'Companion'});
