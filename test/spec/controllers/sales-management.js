'use strict';

describe('Controller: SalesManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var SalesManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalesManagementCtrl = $controller('SalesManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
