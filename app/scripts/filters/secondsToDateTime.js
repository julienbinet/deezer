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
 .filter('secondsToDateTime', function() {
    return function(seconds) {
        var d = new Date(0,0,0,0,0,0,0);
        d.setSeconds(seconds);
        return d;
    };
});
