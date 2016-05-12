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
          self.date = moment(singleEvent.start).format('Do MMM YYYY');
          self.time = moment(singleEvent.start).format('HH:mm');
          self.usersAndComments = usersAndComments;

          if (singleEvent.EventId === 6) {
            self.host = "Paul";
            self.date = "13/05/2016 at 18:00";
            self.attendees = "Paul";
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
