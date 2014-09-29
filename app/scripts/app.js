'use strict';

/**
 * @ngdoc overview
 * @name ryosanApp
 * @description
 * # ryosanApp
 *
 * Main module of the application.
 */
angular
  .module('ryosanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMockE2E',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/index', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/employee-management', {
        templateUrl: 'views/employee-management.html',
        controller: 'EmployeeManagementCtrl'
      })
      .when('/store-management', {
        templateUrl: 'views/store-management.html',
        controller: 'StoreManagementCtrl'
      })
      .when('/purchase-management', {
        templateUrl: 'views/purchase-management.html',
        controller: 'PurchaseManagementCtrl'
      })
      .when('/sales-management', {
        templateUrl: 'views/sales-management.html',
        controller: 'SalesManagementCtrl'
      })
      .when('/item-of-expense-management', {
        templateUrl: 'views/item-of-expense-management.html',
        controller: 'ItemOfExpenseManagementCtrl'
      })
      .when('/item-management', {
        templateUrl: 'views/item-management.html',
        controller: 'ItemManagementCtrl'
      })
      .when('/vendor-management', {
        templateUrl: 'views/vendor-management.html',
        controller: 'VendorManagementCtrl'
      })
      .when('/role-management', {
        templateUrl: 'views/role-management.html',
        controller: 'RoleManagementCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
