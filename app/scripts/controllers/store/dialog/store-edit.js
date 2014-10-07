'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:StoreEditCtrl
 * @description
 * # StoreEditCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
	.controller('StoreEditCtrl', ['$scope', '$modalInstance', 'item', 'items', function ($scope, $modalInstance, item, items) {
		
		$scope.form = item;
		$scope.master = angular.copy(item);

		/**
		 * 店舗を追加します。
		 */				
		$scope.addStore = function() {
			// TODO サーバーサイド処理
			items.push(angular.copy($scope.form));
			$scope.form.clear();
			$scope.close();
		};
		
		/**
		 * 店舗を保存します。
		 */
		$scope.saveStore = function() {
			// TODO サーバーサイド処理
			$scope.close();
		};

		/**
		 * 編集をキャンセルします。
		 */		
		$scope.cancel = function() {
			angular.copy($scope.master, $scope.form);
			$scope.close();
		};
		
		/**
		 * ダイアログを閉じます。
		 */
		$scope.close = function() {
			$modalInstance.dismiss('cancel');
		};
		
	}]);