'use strict';

var campaignControllers = angular.module('campaignControllers', []);

campaignControllers.controller('campaignListCtrl', ['$scope', '$http',
 function($scope, $http) {
    $scope.isHide = false;
    $http.get("http://api.ang.local/rest/rest/getcampaigns")
    .success(function(response) {
        $scope.isHide = true;
        $scope.campaigns = response;
        });
    
}]);

campaignControllers.controller('campaignDetailCtrl', ['$scope', '$routeParams', '$http', '$sce',
  function($scope, $routeParams, $http, $sce) {
    $scope.isHide = false;
    
    $http.get("http://api.ang.local/rest/rest/campaign/url/" +  $routeParams.url)
    .success(function(response) {
        $scope.isHide = true;

        $scope.campaign = response;
        document.title = $scope.campaign.title;
    });
    
    $scope.setImage = function(imageUrl) {
      $scope.campaign.image = imageUrl;
    }
    
    $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    
}]);