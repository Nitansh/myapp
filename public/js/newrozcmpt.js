
   
  

  
/*  newrozApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'home.html', controller: customerController}).
      when('/ratingplan', {templateUrl: 'ratingplan.html', controller: ratinPlanCtrl}).
      otherwise({redirectTo: '/'});
}]); */ 

	// configure our routes
	newrozApp.config(function($routeProvider) {
		$routeProvider
		
			// route for the home page
			.when('/', {
				templateUrl : '/template/login.html',
				controller  : 'loginController'
			})


			.when('/generalInformation', {
				templateUrl : '/template/general-information.html',
				controller  : 'customerController'
			})

			// route for the about page
			.when('/ratingplan', {
				templateUrl : '/template/ratingplan.html',
				controller  : 'ratinPlanCtrl'
			})
			// route for the account refill page.
			
			// route for the logout page
			.when('/logout', {
				templateUrl : '/template/login.html',
				controller  : 'loginController'
			})  

	});
