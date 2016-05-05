angular
  .module('socialCal')
  .service('socialCalPostService', ['$http', function($http) {
    var self = this;

    self.postEventsToDB = function(eventTitle, eventDate, eventTime) {
      var formData = { title: eventTitle,
                       date: eventDate,
                       time: eventTime };
      var url = '/events';
      var data = JSON.stringify(formData);
      var headers = { headers: { 'Content-Type': 'application/json' }};

      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        // console.log(res)
        return res;
      }).catch(function() {
        return self.status = 'Failed';
      });

    };
  }]);
