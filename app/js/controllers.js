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

function CapacityCtrl($scope, CapacityData) {
  $scope.capacityData = CapacityData.query();
}
// CapacityCtrl.$inject = [];

function ColleaguesCtrl() {
}
// ColleaguesCtrl.$inject = [];
