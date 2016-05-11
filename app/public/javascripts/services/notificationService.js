angular
  .module('socialCal')
  .config(['growlProvider', function (growlProvider) {
  growlProvider.globalTimeToLive(8000);
  }])
  .service('notificationService', ['growl', function(growl) {
    var self = this;

    self.showCommentNotifications = function(events, userId) {
      events.map(function(singleEvent) {
        if(singleEvent.UserId === userId) {
          growl.info("New comment on your event " + "<strong style='color:black'>"+ singleEvent.title+":</strong><br>" + "<strong>HEY THERE!</strong>", {enableHtml:true});
        }
      });
    };

    self.showAttendingNotifications = function(events, userId) {
      events.map(function(singleEvent) {
        if(singleEvent.UserId === userId) {
          growl.success("Yas is attending your event " + "<strong style='color:black'>"+ singleEvent.title+"!</strong><br>" , {enableHtml:true});
        }
      });
    };

  }]);
