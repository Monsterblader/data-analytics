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
  $(".BUBclass").hide();
  variancePerc();
  grOp();
  $scope.heatMapHead = ["Asia Minor", "SuperCard", "Western", "Africa", "Banking", "Corporate", "Wealth", "Head"];
  var heatMapRaw = [[{value: 0, sub: "abc"}, {value: 1}, {value: 2}],
                    [{value: 0}, {value: 1}, {value: 2}],
                    [{value: 35}, {value: 1}, {value: 2}],
                    [{value: 0}, {value: 1}, {value: 2}],
                    [{value: 0}, {value: 1}, {value: 2}],
                    [{value: 0}, {value: 1}, {value: 2}],
                    [{value: 0}, {value: 1}, {value: 2}],
                    [{value: 0}, {value: 1}, {value: 2}],
                    [{value: "a"}, {value: "b"}, {value: "c"}]];
  heatMapRaw.forEach(function(subArray, key, origArray){
    subArray.forEach(function(val, key, subArr){
      if (val.value < 1) {
        subArr[key].color = "green";
      } else if (val.value < 6) {
        subArr[key].color = "yellow";
      } else {
        subArr[key].color = "red";
      }
    });
  });
  $scope.BUBreakdown = heatMapRaw;
  $scope.headerarray = [{title: "Actual", subTitle: "Current", value: "18,220", icon: "icon-arrow-down", delta: "112 from prior week"},
                   {title: "Projection", subTitle: "End MandY", value: "18,404", icon: "icon-ok", delta: "411 below target"},
                   {title: "Projection", subTitle: "End MandY", value: "16,887", icon: "icon-ok", delta: "453 below target"}];

  $scope.change = function (){
    if ($scope.numTypeProp === "typePerc") {
      variancePerc();
    } else {
    }
  };

  $scope.GOClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp active");
    $(".BUBreakdown").attr("class", "btn BUBreakdown rightBtnGrp");
    $(".GOclass").show();
    $(".BUBclass").hide();
    // $("#containerRight").attr("class", "");
    $(".heatTable").hide();
    grOp();
  };
  $scope.BUBClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp");
    $(".BUBreakdown").attr("class", "btn BUBreakdown rightBtnGrp active");
    $(".GOclass").hide();
    $(".BUBclass").show();
    // $("#containerRight").attr("class", "hide");
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
