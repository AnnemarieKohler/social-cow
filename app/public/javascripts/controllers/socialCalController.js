angular
  .module('socialCal')
  .controller('socialCalController', ['$http', 'socialCalPostService', function($http, socialCalPostService) {
    var self = this;

    var events = [];

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime);
    };

  }]);
