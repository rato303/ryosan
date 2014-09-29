'use strict';

describe('Service: storeList', function () {

  // load the service's module
  beforeEach(module('ryosanApp'));

  // instantiate service
  var storeList;
  beforeEach(inject(function (_storeList_) {
    storeList = _storeList_;
  }));

  it('should do something', function () {
    expect(!!storeList).toBe(true);
  });

});
