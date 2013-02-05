'use strict';

/* Services */

angular.module('McApp.services', ['ngResource'])
  .factory('CapacityData', function($resource){
    return $resource('../data/Capacity.json', {}, {query: {method:'GET'}
  });
});
