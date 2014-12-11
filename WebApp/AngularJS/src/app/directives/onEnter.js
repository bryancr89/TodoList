/**
 * Created by bazofeifa-as on 10/12/2014.
 */
'use strict';
angular.module('angularJs')
	.directive('onEnter', function () {
		return {
			restrict : 'A',
			link: function (scope, element, attrs) {
				element.bind('keypress keydown', function (event) {
					if(event.which === 13) {
						scope.$apply(function() {
							scope.$eval(attrs.onEnter);
						});
						event.preventDefault();
					}
				})
			}
		}
	});