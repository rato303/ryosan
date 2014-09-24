'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('MenuCtrl', function ($scope, $location) {
    $scope.showSalesReference = function() {
      $location.path('sales-reference');
    };
    $scope.showEmployeeManagement = function() {
      $location.path('employee-management');
    };
    $scope.showStoreManagement = function() {
      $location.path('store-management');
    };
  });
