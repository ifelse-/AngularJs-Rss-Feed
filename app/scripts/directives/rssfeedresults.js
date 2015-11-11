'use strict';

/**
 * @ngdoc directive
 * @name rssFeedApp.directive:rssFeedResults
 * @description
 * # rssFeedResults
 */
angular.module('rssFeedApp')
  .directive('rssFeedResults', function () {
    return {
      templateUrl: 'views/partials/rssfeedresults.html',	
      restrict: 'E'
    };
  });
