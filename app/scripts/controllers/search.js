'use strict';

/**
 * @ngdoc function
 * @name DeezerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DeezerApp
 */
 angular.module('DeezerApp')
 .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax, $location) {

 	$scope.loading = false;
 	var text = $routeParams.query;

 	$scope.submit = function() {
 		if ($scope.search) {
 			// console.log(this.search);
 			$location.path("/search/"+this.search);
 			$scope.search = '';
 		}
 	};

 	var search = function(){
 		$scope.loading = true;
 		$scope.text = text;

 		serviceAjax.getSearchArtists(text).success(function(data){
 			$scope.artists = data.data;
 		}).then(function(){
 			serviceAjax.getSearchAlbums(text).success(function(data){
 				$scope.albums = data.data;
 			})
 		}).then(function(){
 			serviceAjax.getSearchTracks(text).success(function(data){
 				$scope.tracks = data.data;
 				$scope.loading = false;
 			})
 		});

 	};

 	search();

 });
