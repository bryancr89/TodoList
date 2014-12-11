/**
 * Created by bazofeifa-as on 11/12/2014.
 */
'use strict';
angular.module('angularJs')
	.directive('onFocus', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				onFocus: '='
			},
			link: function (scope, element) {
				scope.$watch('onFocus', function (currentValue, previousValue) {
					if (currentValue === true && !previousValue) {
						$timeout(function () {
							element[0].focus();
						});
					} else if (currentValue === false && previousValue) {
						element[0].blur();
					}
				})
			}
		}
	});