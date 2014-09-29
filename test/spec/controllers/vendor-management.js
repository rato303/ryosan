'use strict';

describe('Controller: VendorManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var VendorManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VendorManagementCtrl = $controller('VendorManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
