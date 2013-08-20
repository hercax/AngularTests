'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory('chatService', function($rootScope){
	var chatService = {};

	chatService.user = null;
	chatService.messages = [];
});
