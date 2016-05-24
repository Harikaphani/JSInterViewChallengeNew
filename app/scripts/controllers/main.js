'use strict';

/**
 * @ngdoc function
 * @name jsangularNewCodeTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsangularNewCodeTestApp
 */
angular.module('jsangularNewCodeTestApp', [])
            .controller('MainCtrl', function($scope, $http) {
                $scope.sortBool = false;
                $http.get("http://jsonplaceholder.typicode.com/posts")
                    .then(function(response) {
                        $scope.postsData = response.data;
						$scope.showData=true;
                    });
                $scope.sortData = function(sortField) {
                    $scope.sortValue = sortField;
                    $scope.sortBool = !$scope.sortBool;
                }
            });
