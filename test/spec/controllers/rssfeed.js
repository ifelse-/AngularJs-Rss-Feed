'use strict';

describe('Controller: RssfeedCtrl', function () {

  // load the controller's module
  beforeEach(module('borisTestApp'));

  var RssfeedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RssfeedCtrl = $controller('RssfeedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
