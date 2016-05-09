angular
  .module('socialCal')
  .factory("userPersistenceService", [
	"$cookies", function($cookies) {
		var username = "";

		return {
			setCookieData: function(name) {
				username = name;
				$cookies.put("username", username);
			},
			getCookieData: function() {
				username = $cookies.get("username");
				return username;
			},
			clearCookieData: function() {
				username = "";
				$cookies.remove("username");
			}
		};
	}
]);
