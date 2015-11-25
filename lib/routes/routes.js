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



Router.route('/members-edit/:_id/edit',{
  name:'editMember',
  data:function() {
    return Members.findOne(this.params._id);

  }
})

Router.route('/coach',{
  name:'Coach'
});

Router.route('/coach/:_id',{
  name:'Team',
  data:function() {
    return Teams.findOne(this.params._id);
  }
});
//for now no params
Router.route('/edu',{name:'Edu'});
Router.route('/help',{name:'Help'});
//

Router.route('/message',{
  name:'Messages'
});
Router.route('/message/:_id',{
  name:'Message',
  data:function() {
    return Messages.findOne(this.params._id);
  }
});


Router.route('/staff',{
  name:'Staff'
});
Router.route('/staff/:_id',{
  name:'staff-view',
  data:function() {
    return Staff.findOne(this.params._id);
  }
});
//come back later
Router.route('/companion',{
  name:'Companion'
});

Router.route('/services',
{
  name:'Services'
});
Router.route('/services/:_id',{
  name:'service-view',
  data:function() {
    return Services.findOne(this.params._id);
  }
});


Router.route('/schedule',{
  name:'Schedule'
});
Router.route('/schedule/:_id',{
  name:'Schedules',
  data:function() {
    return Schedules.findOne(this.params._id);
  }
});

Router.route('/challenges',{name:'Challenges'});
Router.route('/challenges/:_id',{
  name:'challenge-view',
  data:function() {
    return Challenges.findOne(this.params._id);
  }
});

Router.route('/goals',{
  name:'Goals'
  });
  Router.route('/goals/:_id',{
    name:'goal-view',
    data:function() {
      return Goals.findOne(this.params._id);
    }
  });
//come back later
Router.route('/store',{name:'Store'});
//come back later
Router.route('/settings',{name:'Settings'});

Router.route('/diet',{
  name:'Diet'
});
Router.route('/diets/:_id',{
  name:'diet-view',
  data:function() {
    return Diets.findOne(this.params._id);
  }
});
Router.route('/event',{
  name:'Events'
});
Router.route('/event/:_id',{
  name:'Event',
  data:function() {
    return Events.findOne(this.params._id);
  }
});
