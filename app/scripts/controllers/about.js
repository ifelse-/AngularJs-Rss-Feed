'use strict';

/**
 * @ngdoc function
 * @name rssFeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rssFeedApp
 */
angular.module('rssFeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
