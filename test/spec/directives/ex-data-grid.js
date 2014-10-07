'use strict';

describe('Directive: exDataGrid', function () {

  // load the directive's module
  beforeEach(module('ryosanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ex-data-grid></ex-data-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the exDataGrid directive');
  }));
});
