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

function CapacityCtrl($scope, $http, getXAxis, getVolumeDifference, getTotalColumnData) {
  $http.get('../data/Capacity.json').success(function(data, status, headers, config){
    $scope.capacityData = data;
    $scope.targetVolumeDifference = getVolumeDifference($scope.capacityData, 'target');
    $scope.actualVolumeDifference = getVolumeDifference($scope.capacityData, 'actual');
    // console.log($scope.capacityData);

    // Set the active graph
    $scope.activeGraph = 'target';
    // Function to change the activeGraph
    $scope.changeActiveGraph = function(){
      if (this.activeGraph === 'target') {
        $scope.activeGraph = 'actual';
      } else {
        $scope.activeGraph = 'target';
      }
    };

    // Extract axis, which is the same for 'Target' and 'Actual'
    var targetXAxis = getXAxis($scope.capacityData);
    // Extract data
    var targetTotalColumnData = getTotalColumnData($scope.capacityData, 'target');
    var actualTotalColumnData = getTotalColumnData($scope.capacityData, 'actual');

    // Create volume chart
    var volumeChart = new Highcharts.Chart({
      chart: {
        renderTo: 'target-volume',
        type: 'line',
        width: 4000,
        marginTop: 100,
        marginBottom: 50
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: targetXAxis
      },
      yAxis: {
        plotLines: [{
          value: 70,
          color: '#008000',
          width: 2,
          zIndex: 4,
          label: {
            text: 'Target (70%)',
            style: {
              color: '#349EEB',
              fontWeight: 'bold'
            }
          }
        }],
        title: ''
      },
      series: [{
        data: targetTotalColumnData,
        showInLegend: false
      }],
      tooltip: {
        formatter: function(){
          return this.x + '<br />Target Volume Total: '+ this.y +'%';
        }
      },
      plotOptions: {
        series: {
          color: '#D3D3D3',
          marker: {
            fillColor: '#FFD700',
            lineWidth: 2,
            lineColor: '#FFD700',
            radius: 6
          },
          dataLabels: {
            enabled: true,
            y: -15,
            style: {
              fontWeight: 'bold'
            }
          }
        }
      }
    });
    // Create actual chart
    var actualChart = new Highcharts.Chart({
      chart: {
        renderTo: 'actual-volume',
        type: 'column',
        width: 4000,
        marginTop: 100,
        marginBottom: 50
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: targetXAxis
      },
      yAxis: {
        title: ''
      },
      series: [{
        data: actualTotalColumnData,
        showInLegend: false
      }],
      tooltip: {
        formatter: function(){
          return this.x + '<br />Target Volume Total: '+ this.y +'%';
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            y: -15,
            style: {
              fontWeight: 'bold'
            }
          },
          borderColor: null,
          borderWidth: 0
        }
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
