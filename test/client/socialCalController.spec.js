describe('socialCalController', function() {
  beforeEach(module('socialCal'));

  var ctrl, $httpBackend, socialCalPostService, $cookies;

  var title = 'title';
  var date = '13/05/2016';
  var time = '19:00';
  var resolvingPromise;

  beforeEach(inject(function($controller, _socialCalPostService_, _$httpBackend_, _$cookies_) {
    ctrl = $controller('socialCalController');
    socialCalPostService = _socialCalPostService_;
    $httpBackend = _$httpBackend_;
    $cookies = _$cookies_;
    resolvingPromise = new Promise(function(resolve, reject) {
      resolve({status: 200});
    });
  }));

  describe('#addEvent', function() {
    it('calls the socialCalPostService.postEventsToDB with title, date and time', function(done) {
      spyOn(socialCalPostService, 'postEventsToDB').and.returnValue(resolvingPromise);
      ctrl.addEvent(title, date, time);
      expect(socialCalPostService.postEventsToDB).toHaveBeenCalledWith(title, date, time);
      done();
    });
  });

  describe('#signUpUser', function() {
    it('calls the socialCalPostService.postUserToDB with username and password', function(done) {
      var username = "Test User";
      var password = "password";
      spyOn(socialCalPostService, 'postUserToDB').and.returnValue(resolvingPromise);
      ctrl.signUpUser(username, password);
      expect(socialCalPostService.postUserToDB).toHaveBeenCalledWith(username, password);
      done();
    });
  });
});
