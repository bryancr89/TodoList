'use strict';

angular.module('angularJs', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/main/main.html'
			});

		$urlRouterProvider.otherwise('/');
	});
