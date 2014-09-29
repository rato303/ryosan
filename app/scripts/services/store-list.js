'use strict';

/**
 * @ngdoc service
 * @name ryosanApp.storeList
 * @description
 * # storeList
 * Factory in the ryosanApp.
 */
angular.module('ryosanApp')
  .factory('storeList', function ($http) {
    return {
    	/**
    	 * <p>
    	 * 全ての店舗情報を取得します。
    	 * </p>
    	 */
    	getAllData : function() {
    	    return $http.get('store/list').success(
    	    		function(data, status, headers, config) {
    	    			return data;
    	    		}
    	    );
    	}
    }
  })
;