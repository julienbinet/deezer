'use strict';

/**
 * @ngdoc service
 * @name DeezerApp.ajax
 * @description
 * # ajax
 * Service in the DeezerApp.
 */
 angular.module('DeezerApp')
 .factory('serviceAjax', function serviceAjax($http) {
 	$http.defaults.useXDomain = true;

 	var api_key = 'cdc197f0a8ab064ff8e79c770c3d6746';
 	var secret = 'd8a076e492733dbc2c850894e736271d';

 	return{
 		/* Tops */
 		topArtists: function(){
 			var url ='http://api.deezer.com/chart/0/artists&limit=15&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		topAlbums: function(){
 			var url ='http://api.deezer.com/chart/0/albums&limit=15&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		topTracks: function(){
 			var url ='http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key='+api_key+'&format=json';
 			return $http.get(url);
 		},
 		/* Artist */
 		getInfoArtist: function(id){
 			var url ='http://api.deezer.com/artist/'+id+'&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		getAlbumsArtist: function(id){
 			var url ='http://api.deezer.com/artist/'+id+'/albums&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		getRelatedArtist: function(id){
 			var url ='http://api.deezer.com/artist/'+id+'/related&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		getTopTracksArtist: function(id){
 			var url ='http://api.deezer.com/artist/'+id+'/top&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		/* Album */
 		getInfoAlbum: function(id){
 			var url ='http://api.deezer.com/album/'+id+'&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		/* Search */
 		getSearchArtists: function(query){
 			var url ='http://api.deezer.com/search/artist?q='+query+'&limit=6&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		getSearchAlbums: function(query){
 			var url ='http://api.deezer.com/search/album?q='+query+'&limit=6&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		},
 		getSearchTracks: function(query){
 			var url ='http://api.deezer.com/search/track?q='+query+'&limit=10&output=jsonp&callback=JSON_CALLBACK';
 			return $http.jsonp(url);
 		}
 	};




 });
