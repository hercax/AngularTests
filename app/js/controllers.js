'use strict';

/* Controllers */

var fireBaseUrl = 'https://hercax.firebaseio.com/';

angular.module('myApp.controllers', []).
	controller('MainCtrl', ['$scope', 'chatService', 'angularFire', function($scope, chatService, angularFire) {

	}]).
	controller('NavCtrl', ['$scope', 'chatService', 'angularFire', 'angularFireAuth', function($scope, chatService, angularFire, angularFireAuth) {
		angularFireAuth.initialize(fireBaseUrl, {scope: $scope, name: "user"});

		$scope.login = function() {
			angularFireAuth.login("facebook", {scope: 'email, user_likes, read_friendlists'}).then(function (){
				chatService.user = $scope.user;
			});
		};

		$scope.logout = function() {
			angularFireAuth.logout().then(function() {
				chatService.user = $scope.user;
			});
		};
	}]);
