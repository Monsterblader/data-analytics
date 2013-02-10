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

function ColleaguesCtrl($scope, $http) {
  $http.get('../data/Colleagues.json').success(function(data, status, headers, config){
    var values = data.AGREE.values;
    // console.log(values[0]);
    // var x = values.

    var colorObject = {
      'Cardiff': 'orange',
      'Chester': 'red',
      'Leeds': 'red',
      'Glasgow': 'orange',
      'Birmingham': 'red',
      'Edinburgh': 'orange',
      'Belfast': 'orange',
      'Manchester': 'green',
      'Newport': 'green',
      'Dunfermline': 'green',
      'Wolverhampton': 'green'
    };

    var dataArray = [];
    for (var i = 0; i < values.length; i++) {
      var radius =  values[i].pop() / 100;
      var name = values[i].shift();
      var pointColor = colorObject[name];
      var xC = _.reduce(values[i].slice(0, 3), function(memo, num) {
        return memo + num;
      }, 0);

      var yC = _.reduce(values[i].slice(3), function(memo, num) {
        return memo + num;
      }, 0);
      var dataPoint = {
        x : xC,
        y : yC,
        radius: radius,
        name: name,
        fillColor: pointColor
      };
      dataArray.push(dataPoint);
    }

    var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'stackbar-colleagues',
          type: 'bar',
          style: {
            position: 'absolute'
          }
        },
        credits: { enabled: false },
        title: {
          text: 'Colleagues'
        },
        xAxis: {
          categories: ['I have clear targets and objectives', 'I recieve training/coaching/feedback', 'There is a clear link between my performance and reward', 'I am satisfied with my job', 'I intend to stay in the company', 'I am willing to exert extraordinary effort', 'I continuously find ways and am encouraged to innovate'],
          labels: {
            enabled: true,
            align: 'left',
            x: 5,
            y: -14,
            style: {
              width: '350px'
            }
          },
          lineWidth: 0,
          tickLength: 0
        },
        yAxis: {
          gridLineWidth: 0,
          labels: { enabled: false },
          title: { text: '' },
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
          color: 'green',
          data: [57, 43, 30, 73, 54, 79, 29]
        }, {
          name: 'Disagree',
          color: 'red',
          data: [39, 45, 32, 18, 41, 7, 29]
        }, {
          name: 'Neutral',
          color: 'orange',
          data: [4, 12, 38, 9, 5, 14, 42]
        }]
      });
      var scatterChart = new Highcharts.Chart({
      chart: {
        renderTo: 'scatterchart-colleagues',
        type: 'scatter',
        zoomType: 'xy'
      },
      credits: { enabled: false },
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
        },
        tickLength: 0,
        lineWidth: 0
      },
      yAxis: {
        gridLineWidth: 0,
        title: {
          text: 'Skill'
        },
        labels: {
          enabled: false
        }
      },
      tooltip: {
        formatter: function() {
          return 'x: ' + this.x + '<br>y: ' + this.y;
        }
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 10,
            states: {
              hover: {
                enabled: false,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          dataLabels: {
            formatter: function() {
              return this.point.name;
            },
            enabled: true,
            y: -15
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
                  data: dataArray,
                  marker: {
                      symbol: 'circle'
                  }
                },
                {
                  showInLegend: false
                }
              ]
    });
  }).error(function(err) {
    console.log(err);
  });
}
// ColleaguesCtrl.$inject = [];
