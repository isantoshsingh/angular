var app = angular.module("listing", []);

app.controller("campaignCtrl", function($scope, $http) {
    $scope.isHide = false;
    $http.get("http://api.ang.local/rest/rest/getcampaigns")
    .success(function(response) {
        $scope.isHide = true;
        $scope.campaigns = response;
        });
    
});