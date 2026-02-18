cordova.define("cordova-ios-request-notification-authorization.plugin", function(require, exports, module) {

var exec = require('cordova/exec');

var PLUGIN_NAME = 'notificationAuthorization';

var notificationAuthorization = {
  requestNotificationAuthorization: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'requestNotificationAuthorization', []);
  },
  isNotificationDetermined: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'isNotificationDetermined', []);
  }
};

module.exports = notificationAuthorization;

});
