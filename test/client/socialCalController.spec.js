describe('socialCalController', function() {
  beforeEach(module('socialCal'));

  var ctrl, $httpBackend, socialCalPostService;

  var title = 'title';
  var date = '13/05/2016';
  var time = '19:00';

  beforeEach(inject(function($controller, _socialCalPostService_, _$httpBackend_) {
    ctrl = $controller('socialCalController');
    socialCalPostService = _socialCalPostService_;
    $httpBackend = _$httpBackend_;
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
