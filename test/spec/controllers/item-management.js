'use strict';

describe('Controller: ItemManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var ItemManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItemManagementCtrl = $controller('ItemManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
