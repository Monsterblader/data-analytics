'use strict';

// Declare app level module which depends on filters, and services
angular.module('McApp', ['McApp.services', "headcountFilters"])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {templateUrl: 'partials/home.html', controller: HomeCtrl})
      .when('/operations_costs', {templateUrl: 'partials/operations_costs.html', controller: OperationsCtrl})
      .when('/headcount', {templateUrl: 'partials/headcount.html', controller: HeadCountCtrl})
      .when('/capacity', {templateUrl: 'partials/capacity.html', controller: CapacityCtrl})
      .when('/colleagues', {templateUrl: 'partials/colleagues.html', controller: ColleaguesCtrl})
      .otherwise({redirectTo: '/home'});
}]);
