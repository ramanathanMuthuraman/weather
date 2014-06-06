myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/:city?', {
				templateUrl : 'partials/home.html',
				controller: 'homeController'
			
			})

			// route for the contact page
			.when('/city/:city', {
				templateUrl : 'partials/city.html',
				controller: 'cityController'
			
			});

	});