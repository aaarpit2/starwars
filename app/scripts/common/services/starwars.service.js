(function () {
    'use strict';

    angular
        .module('starwarApp.starwars.services')
        .factory('starwarsFactory',['$rootScope', '$http', '$q' ,'Constants' ,function starwarsFactory($rootScope, $http, $q, Constants) {

        var service = {};

        //get list of planets based on the input from user.
        service.searchPlanet = function(planetname,pageNumber) {
        	var paramObject = {};
        	if(!pageNumber){
        		paramObject.search = planetname;
        	}
        	else{
        		paramObject.search = planetname;
        		paramObject.page = pageNumber;
        	}
	        var df = $q.defer();
	        $http({
				method : "GET",
				url : Constants.baseUrl+"/planets",
	            headers: {'Content-Type':'application/json'},
	            params: paramObject
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
