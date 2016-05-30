angular
  .module('socialCal')
  .controller('socialCalController', ['alert', '$window', '$cookies', '$http', 'socialCalGetService', 'socialCalPostService', 'userPersistenceService',
    function(alert, $window, $cookies, $http,
             socialCalGetService, socialCalPostService,
             userPersistenceService) {

        var self = this;

        self.user = userPersistenceService.getCookieData();

        self.checkboxModel = { value1 : "YES" };
        self.eventSources = [];

        socialCalGetService.getEventsFromDB().then(function(events) {
          return events.map(function(singleEvent) {
            return self.eventSources.push({
              title: singleEvent.title,
              start: _formatTimeFromDBFormat(singleEvent.date, singleEvent.time)
            });
          });
        });

        self.addEvent = function(title, date, time) {
          return socialCalPostService.postEventsToDB(title, date, time)
          .then(function(response) {
            if(response.status === 200){
              var formattedTime = _formatTimeToDBFormat(date, time)
              return self.eventSources.push({ title: title, start: formattedTime });
            }
          })
          .catch(function(){
            console.log("Failed");
          });
        };

        self.signUpUser = function(username, password) {
          _setUserCookie(username);
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
              _setUserCookie(username);
              $window.location.reload();
            }
          });
        };

        self.signOutUser = function() {
          userPersistenceService.clearCookieData();
        };

        self.alertOnEventClick = function(date, jsEvent, view) {
          alert.show('Clicked', date);
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

        function _formatTimeFromDBFormat(date, time) {
          var formattedDate = moment(date.replace("00:00:00", time))
                                         .format('YYYY-MM-DDTHH:mm');
          return moment(formattedDate).subtract(1, 'hours');
        };

        function _formatTimeToDBFormat(date, time) {
            var dateArray = time.toString().split(" ");
            var formattedTime = dateArray[4];

            return moment(date.toString()
                              .replace("00:00:00", formattedTime))
                              .format('YYYY-MM-DDTHH:mm');
        };

        _setUserCookie = function(username) {
          userPersistenceService.setCookieData(username);
        }

  }]);
