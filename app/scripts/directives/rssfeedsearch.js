'use strict';

/**
 * @ngdoc directive
 * @name rssFeedApp.directive:rssFeedSearch
 * @description
 * # rssFeedSearch
 */
angular.module('rssFeedApp')
  .directive('rssFeedSearch', function () {
    return {
      templateUrl: 'views/partials/rssfeedsearch.html',
      restrict: 'E'
    };
  });
