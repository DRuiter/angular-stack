'use strict';

describe('Service: inbox', function () {

  // load the service's module
  beforeEach(module('angularStackApp'));

  // instantiate service
  var inbox;
  beforeEach(inject(function (_inbox_) {
    inbox = _inbox_;
  }));

  it('should do something', function () {
    expect(!!inbox).toBe(true);
  });

});
