'use strict';

/* Controllers */

function HomeCtrl($scope){
  console.log($scope)
  $scope.boxes = [
  {icon:'money',header:'Cost', alert:'ok-sign', text:'Projected month end total cost below target (£1347 M versus target of £1560 M)'},
  {icon:'warning-sign',header:'Control', alert:'ok-sign', text:'3 HRI actions due in Q4 2012, all mitigating actions on track and all audit actions are green'},
  {icon:'group',header:'Customer', alert:'ok-sign', text:'26 new complaints in August down 4% from last month'},
  {icon:'user',header:'Colleagues', alert:'ok-sign', text:'Colleague satisfaction up 5% to 75%'},
  {icon:'exchange',header:'Transform Initiatives', alert:'exclamation-sign', text:'2/5 regulatory projects and 3/3 integration projects are amber'},
  {icon:'bar-chart',header:'Benchmarks', alert:'exclamation-sign', text:'Compare CB Bank to benchmarks based on a sample of 16 European banks'}
  ];

  $scope.randt = [
    { picture: 'url(img/bank.png)' , date:'October 2012', text:'The triple transformation - Achieving a sustainable business model'},
    {picture: 'url(img/city.png)', date:'October 2012', text:'Multichannel transformation - 10 steps towards customer experience and economic leadership'},
    {picture: 'url(img/thinker.png)', date:'October 2012', text:'Using lean in wholesale financial services boosts productivity'}
  ]

  $scope.documents = [
    {title: 'Published Reports'},{title: 'Benchmark Findings'},{title: 'CB Bank News'},{title: 'March reports'}
  ]
}

// HomeCtrl.$inject = [];

function OperationsCtrl() {
}
// OperationsCtrl.$inject = [];

function HeadCountCtrl($scope) {
  debugger
  $scope.numTypeProp = "typePerc";
  $scope.headerarray = [{title: "Actual", subTitle: "Current", value: "18,220", icon: "icon-arrow-down", delta: "112 from prior week"},
                   {title: "Projection", subTitle: "End September 2012", value: "18,404", icon: "icon-ok", delta: "411 below target"},
                   {title: "Projection", subTitle: "End December 2012", value: "16,887", icon: "icon-ok", delta: "453 below target"}];
  $scope.heatMapHead = ["Asia Minor", "SuperCard", "Western", "Africa", "Banking", "Corporate", "Wealth", "Head"];
  var heatMapRaw = [[{value: -122, sub: "to 3,447"}, {value: 20, sub: "to 1,033"}, {value: -45, sub: "to 2,044"}, {value: 17, sub: "to 1,076"}, {value: -20, sub: "to 1,012"}, {value: 23, sub: "to 1,950"}, {value: -12, sub: "to 730"}, {value: -5, sub: "to 197"}],
                    [{value: -112, sub: "to 221"}, {value: -28, sub: "to 66"}, {value: 24, sub: "to 131"}, {value: -20, sub: "to 69"}, {value: -35, sub: "to 65"}, {value: 25, sub: "to 125"}, {value: -24, sub: "to 47"}, {value: 0, sub: "to 13"}],
                    [{value: -45, sub: "to 114"}, {value: 10, sub: "to 34"}, {value: -12, sub: "to 68"}, {value: -20, sub: "to 36"}, {value: -16, sub: "to 33"}, {value: -54, sub: "to 65"}, {value: 14, sub: "to 24"}, {value: 65, sub: "to 7"}],
                    [{value: -30, sub: "to 536"}, {value: -32, sub: "to 161"}, {value: 24, sub: "to 318"}, {value: -20, sub: "to 167"}, {value: -2, sub: "to 158"}, {value: -50, sub: "to 304"}, {value: 17, sub: "to 114"}, {value: 55, sub: "to 31"}],
                    [{value: -5, sub: "to 45"}, {value: 5, sub: "to 14"}, {value: 3, sub: "to 27"}, {value: 0, sub: "to 14"}, {value: 0, sub: "to 13"}, {value: -2, sub: "to 26"}, {value: 0, sub: "to 10"}, {value: -1, sub: "to 3"}],
                    [{value: 15, sub: "to 296"}, {value: -12, sub: "to 89"}, {value: 3, sub: "to 75"}, {value: 1, sub: "to 92"}, {value: -2, sub: "to 87"}, {value: -10, sub: "to 167"}, {value: 0, sub: "to 63"}, {value: 5, sub: "to 17"}],
                    [{value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 1729"}],
                    [{value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 960"}],
                    [{value: -299, sub: "to 5,466"}, {value: -37, sub: "to 1,638"}, {value: -3, sub: "to 3,242"}, {value: -42, sub: "to 1,706"}, {value: -75, sub: "to 1,605"}, {value: -68, sub: "to 3,093"}, {value: -5, sub: "to 1,158"}, {value: 119, sub: "to 312"}]];
  var heatMapPercRaw = [[{value: -122, sub: "to 3,447", color: "purple"}, {value: 20, sub: "to 1,033"}, {value: -45, sub: "to 2,044"}, {value: 17, sub: "to 1,076"}, {value: -20, sub: "to 1,012"}, {value: 23, sub: "to 1,950"}, {value: -12, sub: "to 730"}, {value: -5, sub: "to 197"}],
                        [{value: -112, sub: "to 221"}, {value: -28, sub: "to 66"}, {value: 24, sub: "to 131"}, {value: -20, sub: "to 69"}, {value: -35, sub: "to 65"}, {value: 25, sub: "to 125"}, {value: -24, sub: "to 47"}, {value: 0, sub: "to 13"}],
                        [{value: -45, sub: "to 114"}, {value: 10, sub: "to 34"}, {value: -12, sub: "to 68"}, {value: -20, sub: "to 36"}, {value: -16, sub: "to 33"}, {value: -54, sub: "to 65"}, {value: 14, sub: "to 24"}, {value: 65, sub: "to 7"}],
                        [{value: -30, sub: "to 536"}, {value: -32, sub: "to 161"}, {value: 24, sub: "to 318"}, {value: -20, sub: "to 167"}, {value: -2, sub: "to 158"}, {value: -50, sub: "to 304"}, {value: 17, sub: "to 114"}, {value: 55, sub: "to 31"}],
                        [{value: -5, sub: "to 45"}, {value: 5, sub: "to 14"}, {value: 3, sub: "to 27"}, {value: 0, sub: "to 14"}, {value: 0, sub: "to 13"}, {value: -2, sub: "to 26"}, {value: 0, sub: "to 10"}, {value: -1, sub: "to 3"}],
                        [{value: -299, sub: "to 5,466"}, {value: -37, sub: "to 1,638"}, {value: -3, sub: "to 3,242"}, {value: -42, sub: "to 1,706"}, {value: -75, sub: "to 1,605"}, {value: -68, sub: "to 3,093"}, {value: -5, sub: "to 1,158"}, {value: 119, sub: "to 312"}]];
  heatMapRaw.forEach(function(subArray, key, origArray){
    subArray.forEach(function(val, key, subArr){
      if (val.value < 1) {
        subArr[key].color = "MediumSeaGreen";
      } else if (val.value < 6) {
        subArr[key].color = "yellow";
      } else {
        subArr[key].color = "red";
      }
    });
  });
  $scope.BUBreakdown = heatMapPercRaw;
  $(".BUBclass").hide();
  grOp();
  if (!$("#chartLabel").length) {
    labelChart();
    varPercChart([0.2, 2.3, 4.5, -8.2, -26.9, 24.5, 0, 0.6, 1], true);
    varPercChart([-0.4, -0.2, -0.3, 0.1, 0.2, 0.3, 0, -0.1, -0.4], false);
  }

  $scope.change = function (){
    if ($scope.numTypeProp === "typePerc") {
      $(".highcharts-container").remove();
      $scope.BUBreakdown = heatMapPercRaw;
      labelChart();
      varPercChart([0.2, 2.3, 4.5, -8.2, -26.9, 24.5, 0, 0.6, 1], true);
      varPercChart([-0.4, -0.2, -0.3, 0.1, 0.2, 0.3, 0, -0.1, -0.4], false);
    } else {
      $scope.BUBreakdown = heatMapRaw;
      variancePerc();
    }
  };

  $scope.GOClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp active");
    $(".BUBr").attr("class", "btn BUBr rightBtnGrp");
    $(".GOclass").show();
    $(".BUBclass").hide();
    $(".heatTable").hide();
    grOp();
  };

  $scope.BUBClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp");
    $(".BUBr").attr("class", "btn BUBr rightBtnGrp active");
    $(".GOclass").hide();
    $(".BUBclass").show();
    $(".heatTable").show();
  };
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
          value: 75,
          color: '#008000',
          width: 2,
          zIndex: 4,
          label: {
            text: 'Target (75%)',
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

  $scope.$on('$viewContentLoaded', function(){
    $('#target-volume').on('scroll', function () {
      $('#actual-volume').scrollLeft($(this).scrollLeft());
    });

    $('#actual-volume').on('scroll', function () {
      $('#target-volume').scrollLeft($(this).scrollLeft());
    });
  });
}
// CapacityCtrl.$inject = ['$scope', '$http'];

function ColleaguesCtrl() {
}
// ColleaguesCtrl.$inject = [];

function CostCtrl() {
}
// ColleaguesCtrl.$inject = [];
