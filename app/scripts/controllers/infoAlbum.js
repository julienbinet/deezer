'use strict';

/**
 * @ngdoc function
 * @name DeezerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DeezerApp
 */
 angular.module('DeezerApp')
 .controller('InfoAlbumCtrl', function ($scope,$routeParams, serviceAjax) {
 	$scope.loading = true;
 	var idAlbum = $routeParams.idAlbum;

 	var loadAlbum = function(){
 		serviceAjax.getInfoAlbum(idAlbum).success(function(data){
 			$scope.album = data;
 			$scope.loading = false;
 		});
 	};


 	loadAlbum();

 });
