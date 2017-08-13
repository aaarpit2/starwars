(function () {
    'use strict';

    angular
        .module('starwarApp.authentication.services')
        .factory('authenticationFactory',['$rootScope', '$http', '$q' ,'Constants' ,function authenticationFactory($rootScope, $http, $q, Constants) {

        var service = {};
        var loggedInUserObject = null;

        //get authentication data from backend API
        service.authenticateUser = function(username) {
	        var df = $q.defer();
	        $http({
				method : "GET",
				url : Constants.baseUrl+"/people",
	            headers: {'Content-Type':'application/json'},
	            params: {search: username}
	        })
	        .then(
	        function(response){
	            df.resolve(response);
	        },
	        function(response){
	            console.log('ERROR - Couldn\'t get User data');
	            df.reject(response);
	        }
        );

        return df.promise;
      };

      //store loggedin user object
      service.getLoggedInuser = function(){
      	return loggedInUserObject;
      };

      //return loggedin user object
      service.setLoggedInuser = function(userObject){
      	loggedInUserObject = userObject;
      };

      
      return service;
    }])
})();
