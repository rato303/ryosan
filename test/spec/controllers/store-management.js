'use strict';

describe('Controller: StoreManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var StoreManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoreManagementCtrl = $controller('StoreManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
