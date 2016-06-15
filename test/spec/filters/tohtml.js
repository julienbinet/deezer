'use strict';

describe('Filter: tohtml', function () {

  // load the filter's module
  beforeEach(module('lastFmApp'));

  // initialize a new instance of the filter before each test
  var tohtml;
  beforeEach(inject(function ($filter) {
    tohtml = $filter('tohtml');
  }));

  it('should return the input prefixed with "tohtml filter:"', function () {
    var text = 'angularjs';
    expect(tohtml(text)).toBe('tohtml filter: ' + text);
  });

});
