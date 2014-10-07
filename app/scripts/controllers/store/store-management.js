'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:StoreManagementCtrl
 * @description
 * # StoreManagementCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
	.controller('StoreManagementCtrl', ['$scope', 'store', 'storeList', '$modal',
		function ($scope, store, storeList, $modal) {
	
			/** 店舗一覧 */
			storeList.getAllData().then(function(res) {
				$scope.tenpoItems = res.data;
			});
	
			/** 選択中の行情報 */
			$scope.selectedRow = null;
			
			/** 削除確認時の店舗名 */
			$scope.confirmTenpoName = '';
	
			/**
			 * クリックされた行を保持します。
			 *
			 * @param tenpoItem クリックされた店舗の情報
			 *
			 */
			$scope.setSelected = function(tenpoItem) {
				$scope.selectedRow = tenpoItem;
			};
	
			/**
			 * 選択した店舗情報を編集するダイアログを表示します。
			 */
			$scope.showEditStoreDialog = function(tenpoItem) {
				/*
				 * TODO 追加時は空オブジェクトを編集時は項目を渡すようにしてService化する
				 */
				var modalInstance = $modal.open({
					templateUrl: 'views/store/dialog/store-edit.html',
					controller: 'StoreEditCtrl',
					'backdrop': 'static',
					resolve: {
						items: function() {
							return $scope.tenpoItems;
						},
						item: function() {
							return tenpoItem;
						}
					}
				});
			};
			
			/**
			 * 店舗情報追加ダイアログを表示します。
			 */
			$scope.showStoreDialog = function() {
				var modalInstance = $modal.open({
					templateUrl: 'views/store/dialog/store-edit.html',
					controller: 'StoreEditCtrl',
					'backdrop': 'static',
					resolve: {
						items: function() {
							return $scope.tenpoItems;
						},
						item: function() {
							return store;
						}
					}
				});
			};
	
			/**
			 * 店舗情報削除確認ダイアログを表示します。
			 */
			$scope.showTenpoDeleteConfirm = function(clickRowIndex) {    	
				$scope.confirmTenpoName = this.tenpoItem.tenpoName;
				$('#confirm').modal({backdrop : 'static'});
			};
	
			/**
			 * 店舗情報を削除します。
			 */
			$scope.deleteTenpoRow = function() {
				$scope.tenpoItems.splice($scope.selectedRow.index, 1);
				$('#confirm').modal('hide');
			};
		
	}]);