'use strict';


// Declare app level module which depends on filters, and services
angular.module('McApp', ['McApp.filters', 'McApp.services', 'McApp.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home',
      {templateUrl: 'partials/home.html', controller: HomeCtrl}
    );
    $routeProvider.when('/operations_costs',
      {templateUrl: 'partials/operations_costs.html', controller: OperationsCtrl}
    );
    $routeProvider.when('/headcount',
      {templateUrl: 'partials/headcount.html', controller: HeadCountCtrl}
    );
    $routeProvider.when('/capacity',
      {templateUrl: 'partials/capacity.html', controller: CapacityCtrl}
    );
    $routeProvider.when('/colleagues',
      {templateUrl: 'partials/colleagues.html', controller: ColleaguesCtrl}
    );
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
