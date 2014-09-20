"use strict";

/* JShint config settings */
/* jshint -W097 */
/* global angular */

angular.module("page.controllers").controller("PageCtrl", [
'$scope',
'$log',
'$window',
'$interval',
'$http',
'$modal',
'$location',
'$anchorScroll',
'pageService',
function($scope, $log, $window, $interval, $http, $modal, $location, $anchorScroll, pageService){

    $scope.status;
    $scope.contacts;
	$scope.pageService = pageService;

    getContacts();

    function getContacts() {
        pageService.getContacts()
            .success(function(contacts) {
                $scope.contacts = contacts;
            })
            .error(function(error) {
                $scope.status = 'Unable to load list' + error.message;
            });
    }

	$scope.submitForm = function(isValid) {
        if (isValid) {
            alert('this works');
        }
    };

    $scope.addContact = function(person) {
        pageService.addContact(person)
            .success(function() {
                $scope.status = 'Inserted new recipient, refreshing list.';
                $scope.contacts.push(person);
            })
            .error(function(error) {
                $scope.status = 'Unable to add recipient: ' +  error.message;
        });

    };

	

}]);