(function () {
    'use strict';

    angular
        .module('starwarApp.starwars.services')
        .factory('starwarsFactory',['$rootScope', '$http', '$q' ,'Constants' ,function starwarsFactory($rootScope, $http, $q, Constants) {

        var service = {};

        //get list of planets based on the input from user.
        service.searchPlanet = function(planetname,pageNumber) {
        	if(!pageNumber){
        		pageNumber = 1;
        	}
	        var df = $q.defer();
	        $http({
				method : "GET",
				url : Constants.baseUrl+"/planets",
	            headers: {'Content-Type':'application/json'},
	            params: {search: planetname,page: pageNumber}
	        })
	        .then(
	        function(response){
	            df.resolve(response);
	        },
	        function(response){
	            console.log('ERROR - Couldn\'t get planet data');
	            df.reject(response);
	        }
        );

        return df.promise;
      };
      
      	return service;
    }])
})();
