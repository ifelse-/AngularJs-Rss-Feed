'use strict';

/**
 * @ngdoc directive
 * @name rssFeedAppApp.directive:rssUrlHistory
 * @description
 * # rssUrlHistory
 */
angular.module('rssFeedApp')
  .directive('rssUrlHistory', function () {
    return {
      templateUrl: 'views/partials/rssurlhistory.html',	
      restrict: 'E'
    };
  });
