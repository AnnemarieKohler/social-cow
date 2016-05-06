angular
  .module('socialCal')
  .controller('socialCalController', ['$http', 'socialCalGetService', 'socialCalPostService', function($http, socialCalGetService, socialCalPostService) {
    var self = this;

    var events = [];

    socialCalGetService.getEventsFromDB().then(function(events) {
      return events.map(function(singleEvent) {
        self.events.push(singleEvent);
      });
    });

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime);
    };

  }]);
