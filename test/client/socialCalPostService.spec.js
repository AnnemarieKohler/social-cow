describe('socialCalPostService', function() {
  beforeEach(module('socialCal'));

  var service, socialCalPostService;

  var title = 'New Event';
  var date = '13/05/2016';
  var time = 'Thu Jan 01 1970 19:00:00 GMT+0000 (BST)';

  var newUserDetails = { username: 'Test User',
                         password: 'password'
                       };

  beforeEach(inject(function(_socialCalPostService_, _$httpBackend_) {
    socialCalPostService = _socialCalPostService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('#postEventsToDB', function() {
    it('calls $http', function() {
      $httpBackend.expectPOST("/events").respond(200);
      socialCalPostService.postEventsToDB(title, date, time).then(function(res) {
        expect(res.status).toEqual(200);
      });
      $httpBackend.flush();
    });
  });

  describe('#postUserToDB', function() {
    it('calls $http', function() {
      $httpBackend.expectPOST("/users").respond(200);
      socialCalPostService.postUserToDB(newUserDetails).then(function(res) {
        expect(res.status).toEqual(200);
      });
      $httpBackend.flush();
    });
  });
});
