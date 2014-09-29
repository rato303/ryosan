'use strict';

describe('Controller: ItemOfExpenseManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var ItemOfExpenseManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItemOfExpenseManagementCtrl = $controller('ItemOfExpenseManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
