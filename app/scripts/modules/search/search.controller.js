(function () {
    'use strict';

    angular
        .module('starwarApp.search')
        //Search page controller
        .controller('SearchController', ['$scope','$location','$q','Constants','starwarsFactory','authenticationFactory',function($scope,$location,$q,Constants,starwarsFactory,authenticationFactory) {
    		
            //Stores plantes list
    		$scope.planets = [];
            //use to display various errors on the page.
            $scope.errorObject = {};
            $scope.errorObject.showError = false;

            //Get planet data from a factory method and render it on the UI.
    		$scope.showPlanets = function(){
                $scope.errorObject.showError = false;
        		if($scope.searchParam){
        			starwarsFactory.searchPlanet($scope.searchParam).then(
			            function(response){
			            	if(response.data.count != 0){
                                if(response.data.next == null){
                                    $scope.planets = response.data.results;
                                    console.log($scope.planets);
                                }
                                else{
                                    //For ajax call chaining in case result contain multiple pages.
                                    chainNextCalls(2);
                                }
			            	}
                            else{
                                $scope.errorObject.showError = true;
                                $scope.errorObject.showErrorMessage = 'Please Enter Valid Planet Name!';
                            }
			            },
			            function(errorResponse){
			              console.log(errorResponse);
                          $scope.errorObject.showError = true;
                          $scope.errorObject.showErrorMessage = 'Error in Getting Response!';
			            }
			        );
        		}
        	};
            
            var promises = [];

            //Create promise array and resolve all of them.
            var chainNextCalls = function(pageNumber){
                var promise = starwarsFactory.searchPlanet($scope.searchParam,pageNumber).then(
                    function(response){
                        if(response.data.next != null){
                            chainNextCalls(pageNumber++);
                        }
                        $scope.planets.push(response.data.results);
                });
                promises.push(promise);
                $q.all(promises).then(function(results){
                    console.log(results);
                });
            };

            //Logout the logged in user.
            $scope.logout = function(){
                authenticationFactory.setLoggedInuser(null);
                $location.path('login');
            };

            //Randomly calculate the size of the font on the basis of the population of the planet.
            $scope.setFontSize = function(population){
                 var randomnumber = Math.ceil(3*population.toString().length);
                 return { 'font-size': randomnumber+"px" }
            };

            //Init method to check that any authenticated user is logged in or not.
            var init = function(){
                if(authenticationFactory.getLoggedInuser()){
                    $scope.loddedInUser = authenticationFactory.getLoggedInuser();
                }
                else{
                    $location.path('login');
                }
            }
            init();
		}]);
})();