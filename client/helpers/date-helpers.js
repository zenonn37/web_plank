Template.registerHelper('allCaps', ( string ) => {
return string.toUpperCase();
});

Template.registerHelper('epochToHuman', ( timestamp ) => {
  if ( timestamp ) {
    let length = timestamp.toString().length;
    if ( length === 10 ) {
      return moment.unix( timestamp ).format( 'MMMM Do, YYYY' );
    } else {
      return moment.unix( timestamp / 1000 ).format( 'MMMM Do, YYYY' );
    }
  }
});
