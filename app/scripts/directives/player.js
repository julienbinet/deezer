'use strict';

/**
 * @ngdoc directive
 * @name DeezerApp.directive:loading
 * @description
 * # loading
 */
 angular.module('DeezerApp')
 .directive('player', function () {
 	return {
 		template: '<iframe scrolling="no" frameborder="0" allowTransparency="true" ng-src="{{\'http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=600&height=100&color=007FEB&layout=dark&size=medium&type=tracks&id=\' + ida + \'&app_id=1\'  | trustAsResourceUrl}}" width="600" height="100"></iframe>',
 		restrict: 'E',
 		transclude: true,
 		replace: true,
 		scope:{
 			ida: "=idtrack"
 		}
 	};
 });
