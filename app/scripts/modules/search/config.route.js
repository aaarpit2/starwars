(function () {
    'use strict';

    angular
        .module('starwarApp.search')
        //configuration routes for the search module.
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/search', {
            templateUrl: 'search/search.view.html',
            controller: 'SearchController'
        });
    }])
})();