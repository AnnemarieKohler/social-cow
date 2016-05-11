angular
  .module('socialCal')
  .service('socialCalPostService', ['$http', function($http) {
    var self = this;

    self.postEventsToDB = function(eventTitle, eventDate, eventTime, eventUserId) {
      var dateArray = eventTime.toString().split(" ");
      var correctTimeFormat = dateArray[4];
      var correctDate = moment(eventDate).add(1, 'days')._d;
      var formData = { title: eventTitle,
                       date: correctDate,
                       time: correctTimeFormat,
                       userid: eventUserId};
      var url = '/events';
      var data = JSON.stringify(formData);
      var headers = { headers: { 'Content-Type': 'application/json' }};

      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        return res;
      }).catch(function(res) {
        console.log(res);
        self.status = 'Failed';
        return self.status;
      });
    };

    self.postCommentToDB = function(userId, eventId, text) {
      var commentData = { body: text,
                          userid: userId,
                          eventid: eventId
                        };
      var url = '/comments';
      var data = JSON.stringify(commentData);
      var headers = { headers: { 'Content-Type': 'application/json' }};

      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        console.log("POST REQUEST FROM POST SERVICE MADE");
        return res;
      }).catch(function() {
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
