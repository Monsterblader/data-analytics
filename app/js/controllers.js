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
	$scope.headCountData = {percentage: {grOp: {left: "l1", right: "r1"}, BUBreak: {left: "l2", right: "r2"}},
		 absolute: {grOp: {left: "l3", right: "r3"}, BUBreak: {left: "l4", right: "r4"}}};
  $scope.change = function (){
    if ($scope.numTypeProp==="typePerc") { $scope.imgLeft = "Moohaha"; $scope.imgRight = "Brouhaha" }
      else {$scope.imgLeft = "Brouhaha"; $scope.imgRight = "Moohaha" };
  }
}
// HeadCountCtrl.$inject = [];

function CapacityCtrl($scope, CapacityData) {
  $scope.capacityData = CapacityData.query();
}
// CapacityCtrl.$inject = [];

function ColleaguesCtrl() {
}
// ColleaguesCtrl.$inject = [];
