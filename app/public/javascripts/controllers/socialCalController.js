angular
  .module('socialCal')
  .controller('socialCalController', ['$window', '$cookies', '$http', 'socialCalGetService', 'socialCalPostService', 'userPersistenceService', function($window, $cookies, $http, socialCalGetService, socialCalPostService, userPersistenceService) {

    var self = this;

    self.user = userPersistenceService.getCookieData();

    self.events = [];
    self.eventSources = [{
      title: "PUB PLEASE",
      start: "2016-05-06T19:00",
      end: "2016-05-06T21:00"
    }];

    socialCalGetService.getEventsFromDB().then(function(events) {
      return events.map(function(singleEvent) {
        var correctDateFormat = moment(singleEvent.date.replace("00:00:00", singleEvent.time)).format('YYYY-MM-DDTHH:mm');
        var dateTime = moment(correctDateFormat).subtract(1, 'hours');
        return self.eventSources.push({
          title: singleEvent.title,
          start: dateTime
        });
      });
    });

    self.signUpUser = function(username, password) {
      userPersistenceService.setCookieData(username);
      return socialCalPostService.postUserToDB(username, password).then(function(response) {
        if(response.status === 200){
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
          userPersistenceService.setCookieData(username);
          $window.location.reload();
        }
      });
    };

    self.signOutUser = function() {
      userPersistenceService.clearCookieData();
    };

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime)
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

    self.alertOnEventClick = function(date, jsEvent, view) {
      date.color = "green";
      $('#calendar').fullCalendar('updateEvent', date);
    };

    self.uiConfig = {
      calendar:{
        height: 450,
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
