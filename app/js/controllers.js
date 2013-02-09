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
  $(function () {
    var chart;
    var scatterChart;
    $(document).ready(function() {
      chart = new Highcharts.Chart({
        chart: {
          renderTo: 'stackbar-colleagues',
          type: 'bar'
        },
        title: {
          text: 'Colleagues'
        },
        xAxis: {
          categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7']
        },
        legend: {
          backgroundColor: '#FFFFFF',
          reversed: true
        },
        tooltip: {
          formatter: function() {
            return ''+ this.series.name +': '+ this.y +'%';
          }
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'Agree',
          data: [57, 43, 30, 73, 54, 79, 29]
        }, {
          name: 'Disagree',
          data: [39, 45, 32, 18, 41, 7, 29]
        }, {
          name: 'Neutral',
          data: [4, 12, 38, 9, 5, 14, 42]
        }]
      });
      scatterChart = new Highcharts.Chart({
      chart: {
        renderTo: 'scatter-colleagues',
        type: 'scatter',
        zoomType: 'xy'
      },
      legend: { 
          enabled: false 
      },
      title: {
        text: 'Sites'
      },
      xAxis: {
        title: {
          text: 'Will'
        },
        labels: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Skill'
        },
        labels: {
          enabled: false
        }
      },
      tooltip: {
        formatter: function() {
          return ''+
          this.x +' will, '+ this.y +' skill';
        }
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 10,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          }
        }
      },
        series: [ 
                {
                  data: [[1.2702, 2.2645], [1.3141, 2.6819], [1.3028, 2.6819], [1.3208, 2.6883], [1.4548, 2.6717], [1.1933, 2.0888], [1.401, 2.2237], [1.3671, 2.6646], [1.3738, 2.2567], [1.1023, 2.5663], [1.2717, 2.4029]],
                  marker: {
                      symbol: 'circle'
                  }
                },
                {
                  showInLegend: false
                }
              ]
    });
    });   
});
}
// ColleaguesCtrl.$inject = [];
