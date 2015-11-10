'use strict';

/**
 * @ngdoc overview
 * @name rssFeedApp
 * @description
 * # rssFeedApp
 *
 * Main module of the application.
 */
angular
  .module('rssFeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'RssfeedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
