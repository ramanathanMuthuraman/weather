'use strict';

/* Filters */


  myApp.filter('moment', function() {
    return function(date) {
      return moment(date, 'X').format('dddd DD MMMM  YYYY');
    };
  });
