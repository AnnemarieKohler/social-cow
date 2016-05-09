angular
  .module('socialCal')
  .controller('socialCalController', ['$location', '$cookies', '$http', 'socialCalGetService', 'socialCalPostService', 'userPersistenceService',
                                      function($location, $cookies, $http, socialCalGetService, socialCalPostService, userPersistenceService) {

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
        var dateTime = moment(singleEvent.date.replace("00:00:00", singleEvent.time)).format('YYYY-MM-DDTHH:mm');
        return self.eventSources.push({
          title: singleEvent.title,
          start: dateTime
        });
      });
    });

    self.signUpUser = function(username, password) {
      userPersistenceService.setCookieData(username);
      return socialCalPostService.postUserToDB(username, password);
    };

    self.signOutUser = function() {
      userPersistenceService.clearCookieData();
    };

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime)
      .then(function(response) {
        if(response.status === 200){
          console.log(eventDate);
          var dateTime = moment(eventDate.replace("00:00:00", eventTime)).format('YYYY-MM-DDTHH:mm');
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
