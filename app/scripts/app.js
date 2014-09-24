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
    'ngTouch'
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
      .when('/sales-reference', {
        templateUrl: 'views/sales-reference.html',
        controller: 'SalesReferenceCtrl'
      })
      .when('/employee-management', {
        templateUrl: 'views/employee-management.html',
        controller: 'EmployeeManagementCtrl'
      })
      .when('/store-management', {
        templateUrl: 'views/store-management.html',
        controller: 'StoreManagementCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
