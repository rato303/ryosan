'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:RoleManagementCtrl
 * @description
 * # RoleManagementCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('RoleManagementCtrl', function ($scope) {

	  $scope.items = [
			  {'yakuwariCd' : '1000', 'yakuwariName': '役割1'},
			  {'yakuwariCd' : '2000', 'yakuwariName': '役割2'},
			  {'yakuwariCd' : '3000', 'yakuwariName': '役割3'}
	  ];

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
