'use strict';

describe('Directive: rssFeedResults', function () {

  // load the directive's module
  beforeEach(module('borisTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rss-feed-results></rss-feed-results>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rssFeedResults directive');
  }));
});
