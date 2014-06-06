// create the controller and inject Angular's $scope
myApp.controller('homeController', function ($scope, $location, $rootScope, $routeParams, myService, cities) {

    var loadData = function (city) {
        /*
        enable the forecast button
        */
        $scope.noCitySelected = false;
        myService.getResponse("http://api.openweathermap.org/data/2.5/weather", {
            "q": city,
            "units": "metric"
        }).then(function (response) {
     
            $scope.weather = response;
        });

    }
    $scope.states = cities;
     /*
        disable the forecast button before selecting the city
     */
    $scope.noCitySelected = true;
    /*
          get the route param, if any and fire the API call
    */
    var selectedCity = $routeParams.city;
    if (selectedCity) {
        $scope.selected = selectedCity;
        loadData(selectedCity);
    }
    $scope.onSelect = function ($item) {

    /*
     fire the API call on select 
    */
        loadData($item);

    }

    $scope.forecastMethod = function () {

        /*
        navigate to the forecast view
        */

        $location.path("/city/" + $scope.selected);


    };

});