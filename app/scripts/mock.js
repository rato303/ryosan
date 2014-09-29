angular
	.module('ryosanApp')
		.run(function($httpBackend) {

			$httpBackend.whenGET(/^views\//).passThrough();

			var tenpoItems = [
			                 { tenpoCd : 100, tenpoName : '静内' }
			                 , { tenpoCd : 200, tenpoName : '北見' }
			                 , { tenpoCd : 300, tenpoName : '帯広' }
			                 , { tenpoCd : 300, tenpoName : '旭川' }
			                 ]

			$httpBackend.whenGET('store/list').respond(tenpoItems);
		});