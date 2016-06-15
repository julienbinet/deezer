'use strict';

/**
 * @ngdoc directive
 * @name DeezerApp.directive:loading
 * @description
 * # loading
 */
angular.module('DeezerApp')
  .directive('loading', function () {
 	return {
 		template: '<div><div ng-show="loading" class="loading-container"></div><div ng-hide="loading" ng-transclude></div></div>',
 		restrict: 'A',
 		transclude: true,
 		replace: true,
 		scope:{
 			loading: "=loading"
 		},
 		compile: function compile(element, attrs, transclude){
 			// var opts = {position:'relative'};
 			// var spinner = new Spinner(opts).spin();
 			// var loadingContainer = element.find(".loading-container")[0];
 			// loadingContainer.appendChild(spinner.el);


var loader ='<div layout="row" layout-sm="column" layout-align="space-around"><md-progress-circular md-mode="indeterminate" md-diameter="150"></md-progress-circular></div>';

 			$(".loading-container").append(loader);
 		}
 	};
  });
