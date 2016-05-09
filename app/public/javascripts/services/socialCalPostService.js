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
        console.log("Service done");
        return res;
      }).catch(function(res) {
        console.log(res);
        self.status = 'Failed';
        return self.status;
      });
    };

    self.postUserToDB = function(username, password) {
      var formData = { username: username,
                       password: password};
      var url = '/users';
      var data = JSON.stringify(formData);
      var headers = { headers: { 'Content-Type': 'application/json' }};

      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        return res;
      }).catch(function() {
        self.status = 'Failed';
        return self.status;
      });
    };

    self.validateUserInDB = function(username, password) {
      var formData = { username: username,
                       password: password};
      var url = '/sessions';
      var data = JSON.stringify(formData);
      var headers = { headers: { 'Content-Type': 'application/json' }};

      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        return res;
      }).catch(function() {
        self.status = 'Failed';
        return self.status;
      });
    };
  }]);
