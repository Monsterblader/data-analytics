'use strict';

/* Filters */

// angular.module('McApp.filters', []).
//   filter('interpolate', ['version', function(version) {
//     return function(text) {
//       return String(text).replace(/\%VERSION\%/mg, version);
//     }
//   }]);
console.log("runniing")

angular.module("headcountFilters", []).filter("showChart", function() {
  console.log("in showchart");
  return function(input){
    console.log(input);
    return "asdfasdfsadfdsafasdfasdf"
  }
})
