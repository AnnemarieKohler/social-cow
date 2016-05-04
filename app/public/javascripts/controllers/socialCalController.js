angular
  .module('socialCal')
  .controller('socialCalController', function() {
    var self = this;

    self.events = [];

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      self.events.push({title: eventTitle,
                   date: eventDate,
                   time: eventTime});
    };
  });
