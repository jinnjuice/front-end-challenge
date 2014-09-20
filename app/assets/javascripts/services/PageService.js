"use strict";

/* JShint config settings */
/* jshint -W097 */
/* global angular */

angular.module("yiftee.services")
    .factory('pageService', ['$http', '$q', function($http, $q){

	var pageService = {};
	var initPromise = $q.defer();
    var urlBase = '/programming_challenge';
	
	pageService.initPromise = initPromise.promise;

	
	pageService.sendMessage = function(recipients, message){

        return $http.post(urlBase + '/send', recipients, message);

	};

    pageService.getContacts = function() {
        return $http.get(urlBase + '/autocomplete', {params: {"name": "Aldo Briano"}});
    };

	pageService.autocomplete = function(input_text){

        return $http.get(urlBase + '/autocomplete', {params: input_text});
		
	};

	pageService.addContact = function(contact){

        return $http.post(urlBase + '/add', contact);
		
	};

	return pageService;

}]);
