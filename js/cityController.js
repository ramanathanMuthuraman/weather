// create the controller and inject Angular's $scope
	myApp.controller('cityController', function($scope,$routeParams,$location,$rootScope,myService) {

		
          /*
          get the route param and fire the API call
          */
          $scope.selectedCity =  $routeParams.city; 
		  myService.getResponse("http://api.openweathermap.org/data/2.5/forecast/daily", {
            "q": $scope.selectedCity,
            "units": "metric",
            cnt:7
        }).then(function(response) {
          /*
          bind response to the scope
          */
                 $scope.forecast=response;
  
                   
        });

        $scope.back = function(){
              /*
                 navigate to the home view with the selected city
              */
        	 $location.path("/"+$scope.selectedCity);
        }
		
	});