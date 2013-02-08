'use strict';

/* jasmine specs for controllers go here */

describe('McApp Controllers', function(){

  beforeEach(module('McApp.services'));

  describe('CapacityCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('../data/Capacity.json')
        .respond();
        // .respond(["Availability","R&WO","Wholesale","Credit Ops","Fraud Ops","PPI","Global Payments","Customer Service","Total"]);

      scope = $rootScope.$new();
      ctrl = $controller(CapacityCtrl, {$scope: scope});
    }));

    it('should fetch Capacity.json data from xhr', function() {
      expect(scope.capacityData).toBe;
      $httpBackend.flush();
      expect(scope.capacityData).toEqualData(
        ["Availability","R&WO","Wholesale","Credit Ops","Fraud Ops","PPI","Global Payments","Customer Service","Total"]
      );
    });
  });

});