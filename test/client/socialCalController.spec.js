describe('socialCalController', function() {
  beforeEach(module('socialCal', ['ngCookies']));

  var ctrl, $httpBackend, socialCalPostService, $cookies;

  var title = 'title';
  var date = '13/05/2016';
  var time = '19:00';

  beforeEach(inject(function($controller, _socialCalPostService_, _$httpBackend_, _$cookies_) {
    ctrl = $controller('socialCalController', ['ngCookies']);
    socialCalPostService = _socialCalPostService_;
    $httpBackend = _$httpBackend_;
    $cookies = _$cookies;
  }));

  describe('#addEvent', function() {
    it('calls the socialCalPostService', function(done) {
      spyOn(socialCalPostService, 'postEventsToDB').and.returnValue(200);
      expect(ctrl.addEvent()).toEqual(200);
      done();
    });
  });

  describe('#signUpUser', function() {
    it('creates a new user', function(done) {
      var username = "Test User";
      var password = "password";
      spyOn(socialCalPostService, 'postUserToDB').and.returnValue(200);
      expect(ctrl.signUpUser(username,password)).toEqual(200);
      done();
    });
  });
});
