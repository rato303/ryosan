'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:EmployeeManagementCtrl
 * @description
 * # EmployeeManagementCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('EmployeeManagementCtrl', function ($scope) {
    $scope.employeeItems = [
        { employeeName : '木村', yakushoku : 'したっぱ' }
      , { employeeName : '濱さん', yakushoku : 'オーナー' }
      , { employeeName : '瑠美さん', yakushoku : '偉い人' }
    ];
/*
    $scope.showStoreDialog = function() {
      $('#storeDialog').modal({backdrop : 'static'});
    };
*/
  });
