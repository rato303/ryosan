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
        { 'employeeName' : 'オーナーさん', 'yakushoku' : 'オーナー' },
        { 'employeeName' : '店長さん', 'yakushoku' : '店長' },
        { 'employeeName' : '従業員さん', 'yakushoku' : '従業員' }
    ];
  });
