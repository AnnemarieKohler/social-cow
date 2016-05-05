describe('socialCalPostService', function() {
  beforeEach(module('socialCal'));

  var service;

  var newEventDetails = { title: 'New Event',
                   date: '13/05/2016',
                   time: '19:00' }

  beforeEach(inject(function(_socialCalPostService_, _$httpBackend_) {
    socialCalPostService = _socialCalPostService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('#postEventsToDB', function() {
    it('calls $http', function() {
      $httpBackend.expectPOST("/events").respond(200);
      socialCalPostService.postEventsToDB(newEventDetails).then(function(res) {
        expect(res.status).toEqual(200);
      });
      $httpBackend.flush();
    });
  });
});
