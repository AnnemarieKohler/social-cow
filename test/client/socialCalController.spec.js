describe('socialCalController', function() {
  beforeEach(module('socialCal'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('socialCalController');
  }))

  it('adds a new event', function() {
    ctrl.addEvent('New Event', '13/05/2016', '19:00');

    var newEvent = {title: 'New Event',
                    date: '13/05/2016',
                    time: '19:00'}
    expect(ctrl.events.pop()).toEqual(newEvent);
  });
})
