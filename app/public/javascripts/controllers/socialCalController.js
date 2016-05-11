angular
  .module('socialCal')
  .controller('socialCalController', ['alert', '$window', '$cookies', '$http', 'socialCalGetService', 'socialCalPostService', 'userPersistenceService', 'notificationService',
                        function(alert, $window, $cookies, $http, socialCalGetService, socialCalPostService, userPersistenceService, notificationService) {

    var self = this;
    self.commentsArray = [];

    self.user = userPersistenceService.getCookieData();

    self.checkboxModel = {
      value1 : "Yes"
    };

    self.eventSources = [{
      title: "PUB PLEASE",
      start: "2016-05-06T19:00",
      end: "2016-05-06T21:00"
    }];

    socialCalGetService.getEventsFromDB().then(function(events) {
      return events.map(function(singleEvent) {
        var correctDateFormat = moment(singleEvent.date.replace("00:00:00", singleEvent.time)).format('YYYY-MM-DDTHH:mm');
        var dateTime = moment(correctDateFormat).subtract(1, 'hours');

        self.showLoginNotifications(events, parseInt(self.user.userId));

        return self.eventSources.push({
          title: singleEvent.title,
          start: dateTime,
          EventId: singleEvent.id
        });
      });
    });

    self.getComments = function(id, singleEvent) {
      self.commentsArray = [];
      return socialCalGetService.getCommentsFromDB(id).then(function(comments) {
        return comments.map(function(singleComment) {
          return self.commentsArray.push(singleComment);
        });
      });
    };

    self.postComment = function(eventId, text) {
      return socialCalPostService.postCommentToDB(self.user.userId, eventId, text).then(function(response) {
        console.log("Posted to backend");
      });
    };

    self.belongsToCurrentUser = function(singleEvent) {
      return singleEvent.UserId === parseInt(self.user.userId);
    };

    self.showLoginNotifications = function(events, id) {
        notificationService.showCommentNotifications(events, id);
        notificationService.showAttendingNotifications(events, id);
    };

    self.attendingNotification = function(checkValue) {
      console.log(self.checkboxModel);
    };

    self.signUpUser = function(username, password) {
      return socialCalPostService.postUserToDB(username, password).then(function(response) {
        if(response.status === 200){
          userPersistenceService.setCookieData(response.data.id, response.data.username);
          $window.location.reload();
        } else {
          console.log(response.status);
        }
      });
    };

    self.signInUser = function(username, password) {
      return socialCalPostService.validateUserInDB(username, password).then(function(response) {
        if(response.data.length === 0){
          alert("NO");
        } else {
          userPersistenceService.setCookieData(response.data.id, response.data.username);
          $window.location.reload();
        }
      });
    };

    self.signOutUser = function() {
      userPersistenceService.clearCookieData();
    };

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime, self.user.userId)
      .then(function(response) {
        if(response.status === 200){
          var dateArray = eventTime.toString().split(" ");
          var correctTimeFormat = dateArray[4];
          var dateTime = moment(eventDate.toString().replace("00:00:00", correctTimeFormat)).format('YYYY-MM-DDTHH:mm');
          self.eventSources.push({
            title: eventTitle,
            start: dateTime
          });
        }
      })
      .catch(function(){
        console.log("Failed");
      });
    };


    self.alertOnEventClick = function(singleEvent, jsEvent, view) {
      self.getComments(singleEvent.EventId);
      setTimeout(function() {
        showCalendar(singleEvent);
      } , 500);
    };

    function showCalendar(singleEvent) {
      alert.show('Clicked', singleEvent, self.commentsArray);
      $('#calendar').fullCalendar('updateEvent', singleEvent);
    }

    self.uiConfig = {
      calendar:{
        height: 450,
        contentHeight: 700,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        timeFormat: "H:mm",
        eventClick: self.alertOnEventClick,
        eventDrop: self.alertOnDrop,
        eventResize: self.alertOnResize,
        events: self.eventSources
      }
    };

  }]);
