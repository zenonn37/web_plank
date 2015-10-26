Router.configure({
  layoutTemplate:'layout',
  yieldTemplates:{
    plankNav:{to:'nav'}
  }
});

AccountsTemplates.configure({
  defaultLayout:'authLayout'


});



AccountsTemplates.configureRoute('signIn',{
  name:'signin',
  path:'/login',
  template:'Auth',
  layoutTemplate:'authLayout',
  redirect:'/'
});

AccountsTemplates.configureRoute('signUp',{
  name:'atSignUp',
  path:'/sign-up',
  template:'Auth',
  layoutTemplate:'authLayout',
  redirect:'/'
});


Router.plugin('ensureSignedIn',{
  except:['signin','atSignUp']
});

//Router.route('/',{name:'Home'});
//Router.route('/auth',{name:'Auth'});
Router.route('/',{name:'Dashboard'});

Router.route('/about',{name:'About'});

Router.route('/contact',{name:'Contact'});


//members routes
Router.route('/members',{
  name:'Members',

});
Router.route('/members/:_id',{
  name:'memberPage',
  data:function() {
    return Members.findOne(this.params._id);

  }
});

Router.route('/edu',{name:'Edu'});
Router.route('/help',{name:'Help'});
Router.route('/message',{name:'Message'});


Router.route('/staff',{name:'Staff'});

Router.route('/companion',{name:'Companion'});

Router.route('/services',{name:'Services'});

Router.route('/schedule',{name:'Schedule'});

Router.route('/challenges',{name:'Challenges'});

Router.route('/goals',{name:'Goals'});

Router.route('/store',{name:'Store'});

Router.route('/settings',{name:'Settings'});
Router.route('/diet',{name:'Diet'});
