angular
  .module('socialCal')
  .factory("userPersistenceService", [
	"$cookies", function($cookies) {
		var currentUserId, username, loginData;

		return {
			setCookieData: function(id, username) {
				$cookies.put("currentUserId", id);
				$cookies.put("username", username);
			},
			getCookieData: function() {
				currentUserId = $cookies.get("currentUserId");
        username = $cookies.get("username");
        loginData = { userId: currentUserId, username: username };
				return loginData;
			},
			clearCookieData: function() {
        loginData = {};
				$cookies.remove("currentUserId");
				$cookies.remove("username");
        $cookies.remove("notificationsDone");
			},
      setNotificationsDone: function() {
        $cookies.put("notificationsDone", true);
      },
      checkNotificationsDone: function() {
        return $cookies.get("notificationsDone");
      }
		};
	}
]);
