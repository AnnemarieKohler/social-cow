describe('socialCalController', function() {
  beforeEach(module('socialCal'));

  var ctrl, $httpBackend, socialCalPostService, $cookies, resolvingPromise, $window;
  var userPersistenceService;

  var title = 'title';
  var date = '13/05/2016';
  var time = '19:00';
  var username = "Test User";
  var password = "password";

  var fakeWindow = { location: { href: '' } };

  beforeEach(
    inject(function($controller, _socialCalPostService_, _userPersistenceService_,
                    _$httpBackend_, _$cookies_) {
      ctrl = $controller('socialCalController', { $window: fakeWindow });
      socialCalPostService = _socialCalPostService_;
      userPersistenceService = _userPersistenceService_;
      $httpBackend = _$httpBackend_;
      $cookies = _$cookies_;
      resolvingPromise = new Promise(function(resolve, reject) {
        resolve({status: 200});
      });
  }));

  describe('.eventSources', function() {
    it('initialises with an empty array for the eventSources', function() {
        expect(ctrl.eventSources).toEqual([]);
    });
  });

  describe('.addEvent', function() {
    it('calls socialCalPostService.postEventsToDB with title,date and time', function(done) {
      spyOn(socialCalPostService, 'postEventsToDB').and.returnValue(resolvingPromise);
      ctrl.addEvent(title, date, time);
      expect(socialCalPostService.postEventsToDB).toHaveBeenCalledWith(title, date, time);
      done();
    });
  });

  describe('.signUpUser', function() {
    it('calls socialCalPostService.postUserToDB with username and password',
    function(done) {
        spyOn(socialCalPostService,'postUserToDB').and.returnValue(resolvingPromise);
        ctrl.signUpUser(username, password);
        expect(socialCalPostService.postUserToDB).toHaveBeenCalledWith(username, password);
        done();
    });
  });

  describe('.signInUser', function() {
    it('calls socialCalPostService.validateUserInDB with username and password',
    function(done) {
      spyOn(socialCalPostService,'validateUserInDB').and.returnValue(resolvingPromise);
      ctrl.signInUser(username, password);
      expect(socialCalPostService.validateUserInDB).toHaveBeenCalledWith(username, password);
      done();
    });
  });

  describe('.signOutUser', function() {
    it('calls userPersistenceService.clearCookieData',
    function(done) {
      spyOn(userPersistenceService,'clearCookieData').and.returnValue('');
      ctrl.signOutUser();
      expect(userPersistenceService.clearCookieData).toHaveBeenCalled();
      done();
    });
  });




});
