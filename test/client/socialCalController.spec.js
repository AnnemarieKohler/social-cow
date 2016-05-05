describe('socialCalController', function() {
  beforeEach(module('socialCal'));

  var ctrl, $httpBackend;

  var newEvent = { title: 'New Event',
                   date: '13/05/2016',
                   time: '19:00' }

  beforeEach(inject(function($controller, _$httpBackend_) {
    ctrl = $controller('socialCalController');
    $httpBackend = _$httpBackend_;
  }));

  describe('#addEvent', function() {
    it('calls $http', function() {
      $httpBackend.expectPOST("/events").respond(200);
      ctrl.addEvent(newEvent).then(function(res) {
        expect(res.status).toEqual(200);
      });

      $httpBackend.flush();
    });
  })
})
