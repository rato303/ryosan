'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:StoreManagementCtrl
 * @description
 * # StoreManagementCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('StoreManagementCtrl', function ($scope) {

	 /** 店舗一覧 */
    $scope.tenpoItems = [
        { tenpoCd : 100, tenpoName : '静内' }
      , { tenpoCd : 200, tenpoName : '北見' }
      , { tenpoCd : 300, tenpoName : '帯広' }
    ];

    /** 編集中の店舗コード */
    $scope.editTenpoCd = '';

    /** 編集中の店舗名 */
    $scope.editTenpoName = '';

    /** 選択中の行情報 */
    $scope.selectedRow = null;

    /** 削除確認時の店舗名 */
    $scope.confirmTenpoName = '';

    /**
     * クリックされた行を保持します。
     */
    $scope.setSelected = function (index) {
    	$scope.selectedRow = this;
    };

    /**
     * 選択した店舗情報を編集するダイアログを表示します。
     */
    $scope.showEditStoreDialog = function() {
    	/*
    	 * TODO 追加時は空文字を(または引数なし)編集時は項目を渡すようにしてService化する
    	 */
    	$scope.editTenpoCd = this.tenpoItem.tenpoCd;
    	$scope.editTenpoName = this.tenpoItem.tenpoName;
    	$('#storeDialog').modal({backdrop : 'static'});
    };

    /**
     * 店舗情報追加ダイアログを表示します。
     */
    $scope.showStoreDialog = function() {
    	$scope.editTenpoCd = '';
    	$scope.editTenpoName = '';
    	$('#storeDialog').modal({backdrop : 'static'});
    };

    /**
     * 店舗情報を削除確認ダイアログを表示します。
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

    /**
     * 店舗情報を追加します。
     */
	$scope.addStore = function() {
		$scope.tenpoItems.push({tenpoCd : $scope.editTenpoCd, tenpoName : $scope.editTenpoName});
    	$('#storeDialog').modal('hide');
    }

  });
