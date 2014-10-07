angular
	.module('ryosanApp')
		.run(function($httpBackend) {
			$httpBackend.whenGET(/^views\//).passThrough();
			$httpBackend.whenGET(/^scripts\//).passThrough();
		})
		/**
		 * 店舗一覧取得用APIスタブ
		 */
		.run(function($httpBackend) {
			var tenpoItems = [
				                 { storeCd : 100, storeName : '静内' }
				                 , { storeCd : 200, storeName : '北見' }
				                 , { storeCd : 300, storeName : '帯広' }
				                 , { storeCd : 400, storeName : '旭川' }
				                 ]

			$httpBackend.whenGET('store/list').respond(200, tenpoItems);
		})
		/**
		 * 役割一覧取得用APIスタブ
		 */
		.run(function($httpBackend) {
			var result = [
			              {'yakuwariCd' : '1000', 'yakuwariName': '管理者'},
			              {'yakuwariCd' : '2000', 'yakuwariName': 'オーナー'},
			              {'yakuwariCd' : '3000', 'yakuwariName': '店長'},
			              {'yakuwariCd' : '3000', 'yakuwariName': '従業員'}
			              ];
		})
		;