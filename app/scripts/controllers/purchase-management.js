'use strict';

/**
 * @ngdoc function
 * @name ryosanApp.controller:PurchaseManagementCtrl
 * @description
 * # PurchaseManagementCtrl
 * Controller of the ryosanApp
 */
angular.module('ryosanApp')
  .controller('PurchaseManagementCtrl', function ($scope) {

	  /** 仕入情報一覧 */
	  $scope.purchaseItems = [
	        {'tenpoCd' : '100', 'purchaseDate' : '2014/08/01', 'merchandiseName' : '烏龍茶', 'unitPrice' : '100', 'quantity' : 2}
	      , {'tenpoCd' : '200', 'purchaseDate' : '2014/08/01', 'merchandiseName' : '緑茶', 'unitPrice' : '100', 'quantity' : 3}
	      , {'tenpoCd' : '300', 'purchaseDate' : '2014/08/01', 'merchandiseName' : 'ジャスミンティー', 'unitPrice' : '100', 'quantity' : 6}
	  ];

	  /** 選択中の行情報 */
	  $scope.selectedRow = null;

	  /** 編集中の店舗コード */
	  $scope.editTenpoCd = '';

	  /** 編集中の仕入日 */
	  $scope.editPurchaseDate = '';

	  /** 編集中の商品名 */
	  $scope.editMerchandiseName = '';

	  /** 編集中の単価 */
	  $scope.editUnitPrice = '';

	  /** 編集中の数量 */
	  $scope.editQuantity = '';

	  /**
	   * クリックされた行を保持します。
	   */
	  $scope.setSelected = function(index) {
		  $scope.selectedRow = this;
	  };

	  /**
	   * 選択した仕入情報を編集するダイアログを表示します。
	   */
	  $scope.showEditPurchaseDialog = function() {
		  /*
          * TODO 追加時は空文字を(または引数なし)編集時は項目を渡すようにしてService化する
	       */
		  $scope.editTenpoCd = this.purchaseItem.tenpoCd;
		  $scope.editPurchaseDate = this.purchaseItem.purchaseDate;
		  $scope.editMerchandiseName = this.purchaseItem.merchandiseName;
		  $scope.editUnitPrice = this.purchaseItem.unitPrice;
		  $scope.editQuantity = this.purchaseItem.quantity;

		  $('#purchaseDialog').modal({backdrop : 'static'});
	  };

	  /**
	   * 仕入情報追加ダイアログを表示します。
	   */
	  $scope.showPurchaseDialog = function() {
		  $scope.editTenpoCd = '';
		  $scope.editPurchaseDate = '';
		  $scope.editMerchandiseName = '';
		  $scope.editUnitPrice = '';
		  $scope.editQuantity = '';
		  $('#purchaseDialog').modal({backdrop : 'static'});
	  };

	  /**
	   * 仕入情報削除確認ダイアログを表示します。
	   */
	  $scope.showPurchaseDeleteConfirm = function(clickRowIndex) {
		  $scope.confirmPurchaseName = '';
		  $('#confirm').modal({backdrop : 'static'});
	  };

	  /**
	   * 仕入情報を削除します。
	   */
	  $scope.deletePurchaseRow = function() {
		  $scope.purchaseItems.splice($scope.selectedRow.index, 1);
		  $('#confirm').modal('hide');
	  };

	  /**
	   * 仕入情報を追加します。
	   */
	  $scope.addPurchase = function() {
		  $scope.purchaseItems.push({
			  'tenpoCd' : $scope.editTenpoCd,
			  'purchaseDate' : $scope.editPurchaseDate,
			  'merchandiseName' : $scope.editMerchandiseName,
			  'unitPrice' : $scope.editUnitPrice,
			  'Quantity' : $scope.editQuantity
		  });
		  $('#purchaseDialog').modal('hide');
	  };

  });
