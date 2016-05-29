describe('socialCalGetService', function() {
  beforeEach(module('socialCal'));

  var socialCalPostService, socialCalGetService;

  var newEventDetails = { title: 'New Event',
                   date: '13/05/2016',
                   time: '19:00' };

  beforeEach(inject(function(_socialCalPostService_, _socialCalGetService_, _$httpBackend_) {
    socialCalPostService = _socialCalPostService_;
    socialCalGetService = _socialCalGetService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('#getEventsFromDB', function() {
    it('gets the response data', function() {
      $httpBackend.expectGET('/events').respond(newEventDetails);
      socialCalGetService.getEventsFromDB().then(function(res) {
        expect(res).toEqual(newEventDetails);
      });
    });
  });
});
