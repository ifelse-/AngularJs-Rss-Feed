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
     $scope.rssFeed = 'http://www.feedforall.com/blog-feed.xml';
     $scope.urlHistory = [];

        $scope.updateModel = function() {
          FeedService.parseRSS($scope.rssFeed)
            .then(function(data) {
              if (data === null) {
                return;
              }

            $scope.urlHistory.push($scope.rssFeed);  
             console.log($scope.urlHistory);
    

             $scope.feeds = data.data.responseData.feed.entries;


            });
        };

         $scope.removeHistory = function() {
              //console.log(this.urlHistorys);
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

}]).factory('FeedService', ['$http', function($http){
  return {
      parseRSS : function(url) {
          return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
  };
}]);
