'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:ItemManagementCtrl
 * @description
 * # ItemManagementCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('ItemManagementCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
