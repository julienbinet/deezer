'use strict';

/**
 * @ngdoc filter
 * @name DeezerApp.filter:tohtml
 * @function
 * @description
 * # tohtml
 * Filter in the DeezerApp.
 */
angular.module('DeezerApp')
  .filter("nl2br", function($filter) {
 return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
 };
})
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])