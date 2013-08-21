'use strict';

/* Controllers */

var fireBaseUrl = 'https://hercax.firebaseio.com/';

angular.module('myApp.controllers', []).
	controller('MainCtrl', ['$scope', 'chatService', 'angularFire', function($scope, chatService, angularFire) {
		$scope.chatService = chatService;
		$scope.user = function () { return chatService.user };

	}]).
	controller('NavCtrl', ['$scope', 'chatService', 'angularFire', 'angularFireAuth', function($scope, chatService, angularFire, angularFireAuth) {
		$scope.chatService = chatService;
		$scope.user = function () { return chatService.user };

		angularFireAuth.initialize(fireBaseUrl, {scope: $scope, name: "chatService.user"});

		$scope.login = function() {
			angularFireAuth.login("facebook", {scope: 'email, user_likes, read_friendlists'});
		};

		$scope.logout = function() {
			angularFireAuth.logout();
		};
	}]);
