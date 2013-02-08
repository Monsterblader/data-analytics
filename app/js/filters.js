'use strict';

/* Filters */

angular.module('McApp.filters', [])
  .filter('mark', function(){
    return function(difference){
      var mark;
      if (difference < -5){
        mark = 'cross';
      } else if (difference < 0){
        mark = 'exclamation';
      } else {
        mark = 'tick';
      }
      return mark;
    };
  })
  .filter('negative', function(){
    return function(difference){
      return Math.abs(difference);
    };
  })
  .filter('color', function(){
    return function(difference){
      var zone;
      if (difference < -5){
        zone = 'red';
      } else if (difference < 0){
        zone = 'yellow';
      } else {
        zone = 'green';
      }
      return zone;
    };
  })
  .filter('relative', function(){
    return function(difference){
      return (difference < 0) ? 'below' : 'above';
    };
  });