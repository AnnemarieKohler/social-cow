angular
  .module('socialCal')
  .factory('alert', ['$uibModal', function($uibModal) {

    function show(action, singleEvent, usersAndComments) {
      return $uibModal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var self = this;
          self.action = action;
          self.event = singleEvent;
          self.usersAndComments = usersAndComments;

          if (singleEvent.EventId === 6) {
            self.host = "Paul";

          }
          if (singleEvent.EventId === 8) {

          }
        },
        controllerAs: 'ctrl'
      });
    }

    return {
      show: show
    };

  }]);
