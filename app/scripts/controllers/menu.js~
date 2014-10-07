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

    /**
     * 仕入管理画面に遷移します。
     */
    $scope.showPurchaseManagement = function() {
    	$location.path('purchase-management')
    };

	/**
	 * 売上管理画面に遷移します。
	 */
   $scope.showSalesManagement = function() {
      $location.path('sales-management');
    };

    /**
     * 店舗管理画面に遷移します。
     */
   $scope.showStoreManagement = function() {
     $location.path('store-management');
    };

     /**
      * 役割管理画面に遷移します。
      */
     $scope.showRole = function() {
    	 $location.path('role-management');
     };

     /**
      * 従業員管理画面に遷移します。
      */
     $scope.showEmployeeManagement = function() {
       $location.path('employee-management');
      };

      /**
       * 費目管理画面に遷移します。
       */
     $scope.showItemOfExpense = function() {
    	 $location.path('item-of-expense-management');
     };

     /**
      * 品目管理画面に遷移します。
      */
     $scope.showItem = function() {
    	 $location.path('item-management');
     };

     /**
      * 仕入先管理画面に遷移します。
      */
     $scope.showVendor = function() {
    	 $location.path('vendor-management');
     };

  });
