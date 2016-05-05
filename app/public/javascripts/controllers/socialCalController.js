angular
  .module('socialCal')
  .controller('socialCalController', ['$http', function($http) {
    var self = this;

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      var formData = { title: eventTitle,
                       date: eventDate,
                       time: eventTime };

      var req = {
        method: 'POST',
        url: '/events',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(formData)
      };
      // console.log(Object.keys($http));
      $http.post(req);
    };
  }]);
