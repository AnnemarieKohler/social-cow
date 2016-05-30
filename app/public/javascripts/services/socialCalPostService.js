angular
  .module('socialCal')
  .service('socialCalPostService', ['$http', function($http) {
    var self = this;
    var headers = { headers: { 'Content-Type': 'application/json' }};

    self.postEventsToDB = function(title, date, time) {
      var url = '/events';
      var data = _formatEventData(title, time, date);

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
      var url = '/users';
      var data = _formatUserData(username, password);

      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        return res;
      }).catch(function() {
        self.status = 'Failed';
        return self.status;
      });
    };

    self.validateUserInDB = function(username, password) {
      var url = '/sessions';
      var data = _formatUserData(username, password);
      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        return res;
      }).catch(function() {
        self.status = 'Failed';
        return self.status;
      });
    };

    function _formatUserData(username, password) {
      JSON.stringify({ username: username, password: password });
    };

    function _formatEventData(title, time, date) {
      var formattedTime = _formatEventTime(time);
      var formattedDate = _formatEventDate(date)
      var formData = { title: title,
                       date: formattedDate,
                       time: formattedTime };

      return JSON.stringify(formData);
    };

    function _formatEventTime(time) {
      var splittedDate = time.toString().split(" ");
      return splittedDate[4];
    };

    function _formatEventDate(date) {
      return moment(date).add(1, 'days')._d;
    };

  }]);
