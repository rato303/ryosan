'use strict';

describe('Directive: StoreTable', function () {

  // load the directive's module
  beforeEach(module('ryosanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-store-table></-store-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the StoreTable directive');
  }));
});
