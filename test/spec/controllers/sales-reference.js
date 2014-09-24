'use strict';

describe('Controller: SalesReferenceCtrl', function () {

  // load the controller's module
  beforeEach(module('ryosanApp'));

  var SalesReferenceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalesReferenceCtrl = $controller('SalesReferenceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
