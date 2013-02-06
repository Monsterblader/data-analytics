'use strict';

/* Controllers */

function HomeCtrl(){

}
// HomeCtrl.$inject = [];

function OperationsCtrl() {
}
// OperationsCtrl.$inject = [];

function HeadCountCtrl() {
}
// HeadCountCtrl.$inject = [];

function CapacityCtrl($scope, $http, getXAxis, getTargetTotalColumnData) {
  // var capacityData;
  $http.get('../data/Capacity.json').success(function(data, status, headers, config){
    // capacityData = data;
    $scope.capacityData = data;
    console.log($scope.capacityData);

    // Extract axis, which is the same for 'Target' and 'Actual'
    var targetXAxis = getXAxis($scope.capacityData);
    // Extract data
    var targetTotalColumnData = getTargetTotalColumnData($scope.capacityData);

    // Get container elements
    var $targetChartContainer = $('.target-volume');
    var $actualChartContainer = $('.actual-volume');
    // Create chart
    var volumeChart = new Highcharts.Chart({
      chart: {
        renderTo: $targetChartContainer,
        type: 'line'
      },
      xAxis: {
        categories: targetXAxis
      }
    });
  }).error(function(data, status, headers, config){
    console.log(data, status, headers, config);
  });
}
// CapacityCtrl.$inject = ['$scope', '$http'];

function ColleaguesCtrl() {
}
// ColleaguesCtrl.$inject = [];
