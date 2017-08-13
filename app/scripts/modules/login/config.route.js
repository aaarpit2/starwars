(function () {
    'use strict';

    angular
        .module('starwarApp.login')
        //configuration routes for login module
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/login', {
            templateUrl: 'scipts/login/login.view.html',
            controller: 'LoginController'
        });
    }])
})();