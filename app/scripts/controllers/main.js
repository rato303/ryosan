'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.doLogin = function() {
      $location.path('/index');
    };
  });
