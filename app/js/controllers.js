'use strict';

/* Controllers */

function HomeCtrl(){

}
// HomeCtrl.$inject = [];

function OperationsCtrl() {
}
// OperationsCtrl.$inject = [];

function HeadCountCtrl($scope) {
  $scope.imgLeft = "l1";
  $scope.imgRight = "r1";
  $scope.BUBreakdown = [[{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                       [{value: 0}, {value: 1}, {value: 2}],
                        [{value: "a"}, {value: "b"}, {value: "c"}]];
  $scope.change = function (){
    if ($scope.numTypeProp==="typePerc") { $scope.imgLeft = "container2"; imgLeft(); $scope.imgRight = "Brouhaha" }
      else {$scope.imgLeft = "Brouhaha"; $scope.imgRight = "Moohaha" };
  }
}
// HeadCountCtrl.$inject = [];

function CapacityCtrl($scope, $http, getXAxis, getVolumeDifference, getTotalColumnData) {
  $http.get('../data/Capacity.json').success(function(data, status, headers, config){
    $scope.capacityData = data;
    $scope.targetVolumeDifference = getVolumeDifference($scope.capacityData, 'target');
    $scope.actualVolumeDifference = getVolumeDifference($scope.capacityData, 'actual');
    // console.log($scope.capacityData);

    // Extract axis, which is the same for 'Target' and 'Actual'
    var targetXAxis = getXAxis($scope.capacityData);
    // Extract data
    var targetTotalColumnData = getTotalColumnData($scope.capacityData, 'target');
    var actualTotalColumnData = getTotalColumnData($scope.capacityData, 'actual');

    // Create chart
    var volumeChart = new Highcharts.Chart({
      chart: {
        // renderTo: $targetChartContainer,
        renderTo: 'target-volume',
        type: 'line',
        width: 4000
      },
      xAxis: {
        categories: targetXAxis
      },
      series: [{
        data: targetTotalColumnData
      }]
    });
  }).error(function(data, status, headers, config){
    console.log(data, status, headers, config);
  });
}
// CapacityCtrl.$inject = ['$scope', '$http'];

function ColleaguesCtrl() {
}
// ColleaguesCtrl.$inject = [];
