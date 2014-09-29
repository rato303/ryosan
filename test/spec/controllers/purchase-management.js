'use strict';

describe('Controller: PurchaseManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var PurchaseManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PurchaseManagementCtrl = $controller('PurchaseManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
