describe('socialCalController', function() {
  beforeEach(module('socialCal'));

  var ctrl, $httpBackend, socialCalPostService, $cookies;

  var title = 'title';
  var date = '13/05/2016';
  var time = '19:00';
  var promise, res;

  beforeEach(inject(function($controller, _socialCalPostService_, _$httpBackend_, _$cookies_) {
    ctrl = $controller('socialCalController');
    socialCalPostService = _socialCalPostService_;
    $httpBackend = _$httpBackend_;
    $cookies = _$cookies_;
    promise = new Promise(function(resolve, reject) {
      res = resolve;
    });
  }));

  describe('#addEvent', function() {
    it('calls the socialCalPostService', function(done) {
      spyOn(socialCalPostService, 'postEventsToDB').and.returnValue(promise);
      expect(ctrl.addEvent()).toEqual(promise);
      done();
    });
  });

  describe('#signUpUser', function() {
    it('creates a new user', function(done) {
      var username = "Test User";
      var password = "password";
      spyOn(socialCalPostService, 'postUserToDB').and.returnValue(promise);
      expect(ctrl.signUpUser(username,password)).toEqual(promise);
      done();
    });
  });
});
