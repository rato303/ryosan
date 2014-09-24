'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('IndexCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
