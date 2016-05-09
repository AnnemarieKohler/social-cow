angular
  .module('socialCal')
  .factory('alert', ['$uibModal','socialCalPostService', function($uibModal, socialCalPostService) {

    function show(action, singleEvent) {
      return $uibModal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var self = this;
          self.action = action;
          self.event = singleEvent;
          self.service = socialCalPostService;
        },
        controllerAs: 'ctrl'
      });
    }

    return {
      show: show
    };

  }]);
