'use strict';

/**
 * @ngdoc function
 * @name DeezerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DeezerApp
 */
 angular.module('DeezerApp')
 .controller('InfoArtistCtrl', function ($scope, $routeParams, serviceAjax) {
 	$scope.loading = true;
 	var id = $routeParams.id;

 	var loadArtist = function(){
 		serviceAjax.getInfoArtist(id).success(function(data){
 			$scope.artist = data;
 		}).then(function(){
 			serviceAjax.getAlbumsArtist(id).success(function(data){
 				$scope.albums = data.data;
 			})
 		}).then(function(){
 			serviceAjax.getRelatedArtist(id).success(function(data){
 				$scope.similarArtists = data.data;
 			})
 		}).then(function(){
 			serviceAjax.getTopTracksArtist(id).success(function(data){
 				$scope.tracks = data.data;
 				$scope.loading = false;
 			})
 		});
 	};


 	loadArtist();

 });
