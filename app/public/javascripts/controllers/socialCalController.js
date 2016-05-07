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
        var dateTime = moment(singleEvent.date.replace("00:00:00", singleEvent.time)).format('YYYY-MM-DDTHH:mm');
        console.log("DATETIME " + dateTime);
        return self.eventSources.push({
          title: singleEvent.title,
          start: dateTime
        });
      });
    });

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      console.log("addEvent function");
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime);
    };

    self.alertOnEventClick = function(date, jsEvent, view) {
      console.log(date.color);
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
        color: "yellow",
        eventClick: self.alertOnEventClick,
        eventDrop: self.alertOnDrop,
        eventResize: self.alertOnResize,
        events: self.eventSources
      }
    };

  }]);
