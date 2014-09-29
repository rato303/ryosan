'use strict';

describe('Controller: VendorCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var VendorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VendorCtrl = $controller('VendorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
