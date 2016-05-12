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
        },
        controllerAs: 'ctrl'
      });
    }

    return {
      show: show
    };

  }]);
