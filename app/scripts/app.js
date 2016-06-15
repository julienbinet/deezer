'use strict';

/**
 * @ngdoc overview
 * @name DeezerApp
 * @description
 * # DeezerApp
 *
 * Main module of the application.
 */
 angular
 .module('DeezerApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngMaterial'
  ])
 .config(function ($routeProvider, $locationProvider) {


  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/artiste/:id', {
    templateUrl: 'views/infoArtist.html',
    controller: 'InfoArtistCtrl'
  })
  .when('/album/:idAlbum', {
    templateUrl: 'views/infoAlbum.html',
    controller: 'InfoAlbumCtrl'
  })
  .when('/search/:query', {
    templateUrl: 'views/search.html',
    controller: 'SearchCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
