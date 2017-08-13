(function() {
    'use strict';

    angular
        .module('starwarApp.common')
        .directive('searchPlanet', searchPlanet);

    function searchPlanet() {

        return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {            
                scope.$apply(function (){
                    scope.$eval(attrs.searchPlanet);
                });
                //event.preventDefault();
	        });
    	};
    }
})();
