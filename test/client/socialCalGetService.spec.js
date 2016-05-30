describe('socialCalGetService', function() {
  beforeEach(module('socialCal'));

  var socialCalGetService, $httpBackend;

  var newEvent = { title: 'New Event',
                   date: '13/05/2016',
                   time: '19:00' };

  var newUser = { id: 1,
                  username: 'Username',
                  password: "password",
                  createdAt: "2016-05-29T12:44:00.261Z",
                  updatedAt: "2016-05-29T12:44:00.261Z" };

  beforeEach(inject(function(_socialCalGetService_, _$httpBackend_) {
    socialCalGetService = _socialCalGetService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('.getEventsFromDB', function() {
    it('gets the response data', function() {
      $httpBackend.expectGET('/events').respond(newEvent);
      socialCalGetService.getEventsFromDB().then(function(res) {
        expect(res).toEqual(newEvent);
      });
    });
  });

  describe('.getCommentsFromDB', function() {
    it('gets the response data', function() {
      var id = 1;
      $httpBackend.expectGET('/comments?eventid=1').respond(newEvent);
      socialCalGetService.getCommentsFromDB(id).then(function(res) {
        expect(res).toEqual(newEvent);
      });
    });
  });

  describe('.getCommentsUserFromDB', function() {
    it('gets the response data', function() {
      var id = 1;
      $httpBackend.expectGET('/commentusers?userid=1').respond(newUser);
      socialCalGetService.getCommentsUserFromDB(id).then(function(res) {
        expect(res).toEqual(newUser);
      });
    });
  });
});
