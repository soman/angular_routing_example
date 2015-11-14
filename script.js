	// create the module and name it somshApp
	var somsApp = angular.module('somsApp', ['ngRoute']);

	// configure our routes
	somsApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'contact.html',
				controller  : 'contactController'
			});
	});

  var mainController = function($scope) {
    $scope.message = 'This is Home Page.';
  };
  
  var aboutController = function($scope) {
    $scope.message = 'This is About Us Page.';
  };
  
  var contactController = function($scope) {
    $scope.message = 'This is Contact Us Page.';
  };
  
	// create the controller
	somsApp.controller('mainController', mainController);
	somsApp.controller('aboutController', aboutController);
	somsApp.controller('contactController', contactController);