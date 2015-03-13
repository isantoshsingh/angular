'use strict';

var app = angular.module("listing", ['ngRoute', 'campaignControllers']);


app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/partials/campaign-list.html',
        controller: 'campaignListCtrl'
      }).
      when('/:url', {
        templateUrl: 'views/partials/campaign-detail.html',
        controller: 'campaignDetailCtrl'
      });
      
      //to remove # from url
      $locationProvider.html5Mode({ enabled: true, requireBase: false});
  }]);
