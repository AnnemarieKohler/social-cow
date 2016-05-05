describe('socialCalController', function() {
  beforeEach(module('socialCal'));

  var ctrl, httpBackend;

  var newEvent = { title: 'New Event',
                   date: '13/05/2016',
                   time: '19:00' }

  beforeEach(inject(function($controller, $httpBackend) {
    ctrl = $controller('socialCalController');
    httpBackend = $httpBackend;
    spyOn(httpBackend, "post");
  }))

  describe('#addEvent', function() {
    it('calls $http', function() {
      ctrl.addEvent(newEvent);
      expect(httpBackend.post().calls.any()).toEqual(true);
    });
  })
})
