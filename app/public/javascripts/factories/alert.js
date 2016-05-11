angular
  .module('socialCal')
  .factory('alert', ['$uibModal', function($uibModal) {

    function show(action, singleEvent, commentsArray, username) {
      console.log(singleEvent);
      return $uibModal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var self = this;
          self.action = action;
          self.event = singleEvent;
          self.commentsArray = commentsArray;
          self.username = username
        },
        controllerAs: 'ctrl'
      });
    }

    return {
      show: show
    };

  }]);
