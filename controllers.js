

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

campaignControllers.controller('campaignDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    
    $http.get("http://api.ang.local/rest/rest/campaign/url/" +  $routeParams.url)
    .success(function(response) {
        $scope.campaigns = response;
    });
    
}]);