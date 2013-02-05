'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser().navigateTo('#/home');
    });


    xit('should render view1 when user navigates to /view1', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 1/);
    });

  });


  describe('capacity', function() {

    beforeEach(function() {
      browser().navigateTo('#/capacity');
    });


    xit('should render capacity when user navigates to /capacity', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
});
