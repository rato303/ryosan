'use strict';

/**
 * @ngdoc directive
 * @name ryosanApp.directive:rtMessageDialog
 * @description
 * # rtMessageDialog
 */
angular.module('ryosanApp')
	.factory('rtAlertModel', function() {

		var properties = {
			rtBgClass: 'bg-warning',
			okBtnClass: 'btn-success',
			cancelBtnClass: 'btn-info',
			okLabel: 'OK',
			cancelLabel: 'キャンセル',
			rtAlertTitle: '',
			rtAlertMessage: '',
			rtAlertClick: angular.noop
		};

		return {
			rtBgClass: properties.rtBgClass,
			okBtnClass: properties.okBtnClass,
			cancelBtnClass: properties.cancelBtnClass,
			okLabel: properties.okLabel,
			cancelLabel: properties.cancelLabel,
			rtAlertTitle: properties.rtAlertTitle,
			rtAlertMessage: properties.rtAlertMessage,
			rtAlertClick: properties.rtAlertClick,
			getModel: function(attrs) {
				angular.forEach(attrs, function(value, key) {
					if (angular.isDefined(properties[key])) {
						properties[key] = value;
					}
				});
				return properties;
			}
		};

	})
	.controller('RtAlertClickCtrl', ['$rootScope', '$scope', '$parse', '$modalInstance', function($rootScope, $scope, $parse, $modalInstance) {

			$scope.config = $rootScope.rtAlertModel;

			$scope.clickOk = function() {
				if (angular.isDefined($scope.config.rtAlertClick)) {
					$scope.config.rtAlertClick();
				}
				delete $rootScope.rtAlertModel;
				$modalInstance.dismiss('close');
			};

			$scope.clickCancel = function() {
				delete $rootScope.rtAlertModel;
				$modalInstance.dismiss('cancel');
			};

	}])
	.directive('rtAlertClick', ['$rootScope', '$parse', '$modal', 'rtAlertModel', function ($rootScope, $parse, $modal, rtAlertModel) {

		return {
			restrict: 'A',
			scope: {
				rtAlertClick: '&',
			},
			link: function postLink(scope, element, attrs) {
				element.bind('click', function() {

					$rootScope.rtAlertModel = rtAlertModel.getModel(attrs);
					$rootScope.rtAlertModel.rtAlertClick = scope.rtAlertClick;

					//var modalInstance = $modal.open({
					$modal.open({
						templateUrl: 'scripts/directives/rt-message-dialog.html',
						controller: 'RtAlertClickCtrl',
					});

				});
			}
		};

	}]);
