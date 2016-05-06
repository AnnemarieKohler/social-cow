angular
  .module('socialCal')
  .controller('socialCalController', ['$http', 'socialCalPostService', function($http, socialCalPostService) {
    var self = this;

    var events = [];
    self.eventSources = [];
    self.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: self.alertEventOnClick,
        eventDrop: self.alertOnDrop,
        eventResize: self.alertOnResize
      }
    };

    self.addEvent = function(eventTitle, eventDate, eventTime) {
      return socialCalPostService.postEventsToDB(eventTitle, eventDate, eventTime);
    };

  }]);
