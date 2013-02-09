'use strict';

/* Controllers */

function HomeCtrl($scope){
  $scope.boxes = [
  {icon:'money',header:'Cost', alert:'check', text:'Projected month end total cost below target (£1347 M versus target of £1560 M)'},
  {icon:'warning-sign',header:'Control', alert:'check', text:'3 HRI actions due in Q4 2012, all mitigating actions on track and all audit actions are green'},
  {icon:'group',header:'Customer', alert:'check', text:'26 new complaints in August down 4% from last month'},
  {icon:'user',header:'Colleagues', alert:'check', text:'Colleague satisfaction up 5% to 75%'},
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
  $scope.numTypeProp = "typePerc";
  variancePerc();
  grOp();
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
    if ($scope.numTypeProp === "typePerc") {
      // $scope.imgLeft = "containerLeft";
      variancePerc();
      // var heatTable = '<ul>\n<ul ng-repeat="subArray in BUBreakdown">\n<span class="horBox" ng-repeat="variance in subArray">{{variance.value}}</span>\n</ul>\n</ul>';
      // $(".container-fluid .span9").append(heatTable);
    } else {
    };
  }
  $scope.GOClick = function (){
    $(".GOclass").css("visibility", "visible");
    $(".BUBclass").css("visibility", "hidden");
    // $("#containerRight").attr("class", "");
    $(".heatTable").attr("class", "hide heatTable");
    grOp();
  };
  $scope.BUBClick = function (){
    $(".GOclass").css("visibility", "hidden");
    $(".BUBclass").css("visibility", "visible");
    // $("#containerRight").attr("class", "hide");
    $(".heatTable").attr("class", "heatTable");
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
