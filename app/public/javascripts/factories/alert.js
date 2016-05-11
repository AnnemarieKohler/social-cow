angular
  .module('socialCal')
  .factory('alert', ['$uibModal', function($uibModal) {

    function show(action, singleEvent, commentsArray) {
      return $uibModal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var self = this;
          self.action = action;
          self.event = singleEvent;
          self.commentsArray = commentsArray;
        },
        controllerAs: 'ctrl'
      });
    }

    return {
      show: show
    };

  }]);
