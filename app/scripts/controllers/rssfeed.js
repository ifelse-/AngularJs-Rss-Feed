'use strict';

/**
 * @ngdoc function
 * @name borisTestApp.controller:RssfeedCtrl
 * @description
 * # RssfeedCtrl
 * Controller of the borisTestApp
 */
angular.module('rssFeedApp')
  .controller('RssfeedCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).controller('FeedCtrl', ['$http', '$interval', '$scope','FeedService', function ($http, $interval, $scope, FeedService) {    
     
     //Default feed
     $scope.rssFeed = 'http://www.feedforall.com/blog-feed.xml';
     //Create array to hold enter url feed entered
     $scope.urlHistory = [];

        //Update the DOM when data is received
        $scope.updateModel = function() {
          //Use Feed Service factory to parse returned data
          FeedService.parseRSS($scope.rssFeed)
            .then(function(data) {
              if (data === null) {
                return;
              }
            //Use urlHistory array to push new url
            $scope.urlHistory.push($scope.rssFeed);  
            //Hold feed data
            $scope.feeds = data.data.responseData.feed.entries;

            });
        };

         //Remove url history function
         $scope.removeHistory = function() {
            //If found matching string in array remove it 
            if ($scope.urlHistory.indexOf(this.urlHistorys) > -1) {
                    var index = $scope.urlHistory.indexOf(this.urlHistorys);
                    if (index > -1) {
                        $scope.urlHistory.splice(index, 1);
                    }
                    console.log($scope.urlHistory);
                } else {
                    return false;
                }
         };
 
       // update initially
        $scope.updateModel(); 

        //then update every 30 secs
        $interval(function() {
            $scope.updateModel();
        }, 30000);   
//Create a factory and return object with a function with jsonp wrapper to wait for a callback to append.
}]).factory('FeedService', ['$http', function($http){   
  return {
      parseRSS : function(url) {
          return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
  };
}]);
