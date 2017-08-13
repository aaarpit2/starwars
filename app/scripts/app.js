'use strict';

// Declare app level module which depends on views, and components
angular.module('starwarApp', [
  'ngRoute',
  'starwarApp.common',
  'starwarApp.authentication.services',
  'starwarApp.starwars.services',
  'starwarApp.login',
  'starwarApp.search',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  //login page route
  $routeProvider.when('/login',{
	    templateUrl: 'scripts/modules/login/login.view.html',
	    controller:'LoginController'
	});

  //Search page route
	$routeProvider.when('/search',{
	    templateUrl: 'scripts/modules/search/search.view.html',
	    controller:'SearchController'
	});

  //Default Route
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
