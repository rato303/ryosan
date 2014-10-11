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
				$scope.showDialog(tenpoItem);
			};

			/**
			 * 店舗情報追加ダイアログを表示します。
			 */
			$scope.showStoreDialog = function() {
				$scope.showDialog(store);
			};

			/**
			 * 店舗情報を削除します。
			 */
			$scope.deleteTenpoRow = function(index) {
				$scope.tenpoItems.splice(index, 1);
				$('#confirm').modal('hide');
			};

			/**
			 * 店舗追加(編集)ダイアログを表示します。
			 *
			 * @param formModel ダイアログに表示するモデル
			 */
			$scope.showDialog = function(formModel) {

				var modalInstance = $modal.open({
					templateUrl: 'views/store/dialog/store-edit.html',
					controller: 'StoreEditCtrl',
					'backdrop': 'static',
					resolve: {
						items: function() {
							return $scope.tenpoItems;
						},
						item: function() {
							return formModel;
						}
					}
				});

			};

	}]);