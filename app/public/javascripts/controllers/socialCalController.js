angular
  .module('socialCal')
  .controller('socialCalController', ['$http', 'socialCalGetService', 'socialCalPostService', function($http, socialCalGetService, socialCalPostService) {
    var self = this;

    self.events = [];

    socialCalGetService.getEventsFromDB().then(function(events) {
      return events.map(function(singleEvent) {
        return self.events.push(singleEvent);
      });
    });

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      console.log("addEvent function");
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime);
    };

  }]);
