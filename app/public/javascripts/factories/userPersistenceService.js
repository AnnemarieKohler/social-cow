angular
  .module('socialCal')
  .factory("userPersistenceService", [
	"$cookies", function($cookies) {
		var currentUserId, username;

		return {
			setCookieData: function(id, username) {
				$cookies.put("currentUserId", id);
				$cookies.put("username", username);
			},
			getCookieData: function() {
				currentUserId = $cookies.get("currentUserId");
        username = $cookies.get("username");
				return currentUserId, username;
			},
			clearCookieData: function() {
				$cookies.remove("currentUserId");
				$cookies.remove("username");
			}
		};
	}
]);
