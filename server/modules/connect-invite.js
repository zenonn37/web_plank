var settings = Meteor.settings.private.mailgun,
  mailGun = new Mailgun({
    apiKey:settings.apiKey,
    domain:settings.domain
  }),
  address = settings.domain;

//public funtion called from meteor method
var connect  = function(docs) {
  //call insert connect function
  _insertConnect(docs);
  //call setupEmail funtion
var template =   _setupEmail(docs.token);
  //send email with connect address and email template
  _sendConnectEmail( docs.email, template);

};
//private function to insert connect invite toDB
var _insertConnect = function(docs) {
  Companion.insert(docs);


};

//private function to pull from settings fro email setup
var _setupEmail = function(token) {
  console.log('called in  setup email');
  var domain = Meteor.settings.private.domain;
  console.log(domain);
  console.log(token);
  var url = `http://${ domain }/invite/${ token }`;
console.log(url);
SSR.compileTemplate( 'connect', Assets.getText( 'email/templates/connect.html' ) );
var html = SSR.render( 'connect', { url: url } );
console.log(html);
return html;
};
//private function send email
var _sendConnectEmail = function(email, template) {
  console.log('called in send email');
  var settings = Meteor.settings.private.mailgun,
    mailGun = new Mailgun({
      apiKey:settings.apiKey,
      domain:settings.domain
    }),
    address = settings.domain;

    console.log(email);
  mailGun.send({
    from:'plank@plankcompany.io',
    to:email,
    subject:"Customer connect invite",
    html:template

  },function(err, body) {
    if (err) {
      console.log(err.reason);
    }else{
      console.log('no email sent ' + body);
    }
  });
};
//call public function
Modules.server.connectInvite = connect;
