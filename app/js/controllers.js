'use strict';

/* Controllers */

var fireBaseUrl = 'https://hercax.firebaseio.com/';

angular.module('myApp.controllers', []).
	controller('MainCtrl', ['$scope', 'angularFire', function($scope, angularFire) {

	}]).
	controller('NavCtrl', ['$scope', 'angularFire', 'angularFireAuth', function($scope, angularFire, angularFireAuth) {
		angularFireAuth.initialize(fireBaseUrl, {scope: $scope, name: "user"});
		
		$scope.login = function() {
			angularFireAuth.login("facebook");
		};

		$scope.logout = function() {
			angularFireAuth.logout();
		};
	}]);
