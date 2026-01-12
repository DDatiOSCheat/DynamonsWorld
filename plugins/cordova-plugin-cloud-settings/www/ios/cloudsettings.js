cordova.define("cordova-plugin-cloud-settings.CloudSettingsPlugin", function(require, exports, module) {

  // Tạo ra một bộ não giả, vô hại cho plugin
  var fakeCloudPluginBrain = {
    
    // Hàm gây ra popup. Luôn báo là đã đăng nhập để game chịu hiện UI.
    isSignedInToICloud: function(successCallback, errorCallback) {
      if (typeof successCallback === 'function') {
        successCallback(true);
      }
    },
    
    // Khi game cố gắng load, đọc dữ liệu local THẬT và trả về cho nó.
    load: function(successCallback, errorCallback) {
      try {
        var realLocalData = co_doubleduck_dynamons3_data_Persistence.adapter()._data;
        var result = {
          data: haxe_format_JsonPrinter.print(realLocalData, null, null)
        };
        if (typeof successCallback === 'function') {
          successCallback(result);
        }
      } catch (e) {
        // Phương án dự phòng an toàn, trả về file rỗng
        if (typeof successCallback === 'function') {
          successCallback({ data: "{}" });
        }
      }
    },

    // Các hàm còn lại chỉ cần báo thành công để giữ cho game không bị lỗi.
    save: function(options, successCallback, errorCallback) {
      if (typeof successCallback === 'function') {
        successCallback();
      }
    },
    exists: function(successCallback, errorCallback) {
      if (typeof successCallback === 'function') {
        successCallback(true);
      }
    },
    delete: function(successCallback, errorCallback) {
      if (typeof successCallback === 'function') {
        successCallback();
      }
    },
    enableDebug: function(successCallback, errorCallback) {
      if (typeof successCallback === 'function') {
        successCallback();
      }
    }
  };

  // Xuất bộ não giả này ra để nó trở thành 'cordova.plugin.cloudsettings'
  module.exports = fakeCloudPluginBrain;

});