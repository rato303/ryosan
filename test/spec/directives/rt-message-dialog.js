'use strict';

describe('Directive: rtMessageDialog', function () {

  // load the directive's module
  beforeEach(module('ryosanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rt-message-dialog></rt-message-dialog>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rtMessageDialog directive');
  }));
});
