'use strict';

describe('Controller: RoleManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var RoleManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoleManagementCtrl = $controller('RoleManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
