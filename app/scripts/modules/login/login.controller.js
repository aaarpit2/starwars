(function () {
    'use strict';

    angular
        .module('starwarApp.login')
        //login page controller
        .controller('LoginController', ['$scope','$location','authenticationFactory',function($scope,$location,authenticationFactory) {

        	//contains the user object from page.
        	$scope.user = {};
            //use to display various errors on the page.
        	$scope.errorObject = {};
        	$scope.errorObject.showError = false;

        	//Disable the login button untill the response came from the backend API
        	$scope.responsePending = false;

        	//call the factory method to get the data and validate that user is valid
        	$scope.authenticate = function(){
        		$scope.responsePending = true;
        		authenticationFactory.authenticateUser($scope.user.username).then(
		            function(response){
		            	var responseObject = response.data;
		            	if(responseObject.count == 1){
		            		if(responseObject.results[0].birth_year == $scope.user.password){
		            			//store loggedin user details for the next pages.
		            			authenticationFactory.setLoggedInuser(responseObject.results[0]);
		            			$location.path('search');
		            		}
		            		else{
		            			$scope.errorObject.showError = true;
		            			$scope.errorObject.showErrorMessage = 'Please Enter Correct Password!';
		            		}

		            	}
		            	else{
		            		$scope.errorObject.showError = true;
		            		$scope.errorObject.showErrorMessage = 'Please Enter Correct Username & Password!';
		            	}
		            	$scope.responsePending = false;
		            },
		            function(errorResponse){
		              console.log(errorResponse);
		              $scope.responsePending = false;
		            }
		          );

        	};
		}]);
})();