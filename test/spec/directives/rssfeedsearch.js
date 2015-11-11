'use strict';

describe('Directive: rssFeedSearch', function () {

  // load the directive's module
  beforeEach(module('borisTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rss-feed-search></rss-feed-search>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rssFeedSearch directive');
  }));
});
