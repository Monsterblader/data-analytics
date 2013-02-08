'use strict';

/* Filters */

angular.module('McApp.filters', [])
  .filter('mark', function(){
    return function(difference){
      var mark;
      switch (true){
        case (difference < -5):
          mark = 'cross';
          break;
        case (difference < 0):
          mark = 'exclamation';
          break;
        default:
          mark = 'tick';
          break;
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
      switch (true){
        case (difference < -5):
          zone = 'red';
          break;
        case (difference < 0):
          zone = 'yellow';
          break;
        default:
          zone = 'green';
          break;
      }
      return zone;
    };
  })
  .filter('relative', function(){
    return function(difference){
      var relative;
      switch (true){
        case (difference < 0):
          relative = 'below';
          break;
        default:
          relative = 'above';
          break;
      }
      return relative;
    };
  });