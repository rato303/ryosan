'use strict';

/**
 * @ngdoc directive
 * @name ryosanApp.directive:exDataGrid
 * @description
 * # exDataGrid
 */
angular.module('ryosanApp')
  .directive('exDataGrid', function () {
    return {
      templateUrl: 'scripts/directives/templates/ex-data-grid.html',
      restrict: 'E',
      transclude: true,
      scope:{
    	  'items': '='
      },
      link: function postLink(scope, element, attrs) {
//        element.text('this is the exDataGrid directive');
      }
    };
  });
