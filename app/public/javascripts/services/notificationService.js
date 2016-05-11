angular
  .module('socialCal')
  .config(['growlProvider', function (growlProvider) {
  growlProvider.globalTimeToLive(5000);
  }])
  .service('notificationService', ['growl', function(growl) {
    var self = this;

    self.loginNotifications = function(singleEvent, userId) {
      if(singleEvent.UserId === parseInt(userId)) {
        growl.info("New comment on your event " + "<strong style='color:black'>"+ singleEvent.title+":</strong><br>" + "<strong>HEY THERE!</strong>", {enableHtml:true});
      }
    };

  }]);
