angular
  .module('socialCal')
  .controller('socialCalController', ['$http', 'socialCalGetService', 'socialCalPostService', function($http, socialCalGetService, socialCalPostService) {
    var self = this;

    self.events = [];
    self.eventSources = [{
      title: "PUB PLEASE",
      start: "2016-05-06T19:00",
      end: "2016-05-06T21:00"
    }];

    socialCalGetService.getEventsFromDB().then(function(events) {
      return events.map(function(singleEvent) {
        return self.eventSources.push({
          title: singleEvent.title,
          start: "2016-05-06T09:00",
          color: "blue"
        });
      });
    });

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      console.log("addEvent function");
      socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime);
      $('#calendar').fullCalendar('refetchEvents');
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
        eventClick: self.alertOnEventClick,
        eventDrop: self.alertOnDrop,
        eventResize: self.alertOnResize,
        events: self.eventSources
      }
    };

  }]);
