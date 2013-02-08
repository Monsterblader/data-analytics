'use strict';

/* Controllers */

function HomeCtrl(){

}
// HomeCtrl.$inject = [];

function OperationsCtrl() {
}
// OperationsCtrl.$inject = [];

function HeadCountCtrl($scope) {
	$scope.headCountData = {percentage: {grOp: {left: "l1", right: "r1"}, BUBreak: {left: "l2", right: "r2"}},
		 absolute: {grOp: {left: "l3", right: "r3"}, BUBreak: {left: "l4", right: "r4"}}};
}
// HeadCountCtrl.$inject = [];

function CapacityCtrl($scope, CapacityData) {
  $scope.capacityData = CapacityData.query();
}
// CapacityCtrl.$inject = [];

function ColleaguesCtrl() {
}
// ColleaguesCtrl.$inject = [];
