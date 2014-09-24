'use strict';

describe('Controller: StoreDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var StoreDialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoreDialogCtrl = $controller('StoreDialogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
