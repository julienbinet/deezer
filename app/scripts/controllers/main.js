'use strict';

/**
 * @ngdoc function
 * @name DeezerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DeezerApp
 */
 angular.module('DeezerApp')
 .controller('MainCtrl', function ($scope, serviceAjax) {
 	$scope.loading = true;


 	var loadTops = function(){
 		serviceAjax.topArtists().success(function(data){
 			$scope.artists = data.data;
 		}).then(function(){
 			serviceAjax.topAlbums().success(function(data){
 				$scope.albums = data.data;
 				$scope.loading = false;
 			})
 		});
 	};


 	loadTops();

 });
