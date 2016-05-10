angular
  .module('socialCal')
  .factory('alert', ['$uibModal','socialCalPostService','userPersistenceService', function($uibModal, socialCalPostService, userPersistenceService) {

    function show(action, singleEvent) {
      return $uibModal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var self = this;
          self.action = action;
          self.event = singleEvent;
          self.attending = isAttending(userPersistenceService.getCookieData, singleEvent);
          self.service = socialCalPostService;
        },
        controllerAs: 'ctrl'
      });
    }

    function isAttending(username, singleEvent) {
      var attendees = singleEvent.attendees;
      console.log(singleEvent.attendees);
      return false;
    }

    return {
      show: show
    };

  }]);
