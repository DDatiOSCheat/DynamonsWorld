cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-play-install-referrer.PlayInstallReferrer",
      "file": "plugins/cordova-play-install-referrer/www/play_install_referrer.js",
      "pluginId": "cordova-play-install-referrer",
      "clobbers": [
        "PlayInstallReferrer"
      ]
    },
    {
      "id": "cordova-plugin-cloud-settings.CloudSettingsPlugin",
      "file": "plugins/cordova-plugin-cloud-settings/www/ios/cloudsettings.js",
      "pluginId": "cordova-plugin-cloud-settings",
      "clobbers": [
        "cordova.plugin.cloudsettings"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.iosFileSystem",
      "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-media.MediaError",
      "file": "plugins/cordova-plugin-media/www/MediaError.js",
      "pluginId": "cordova-plugin-media",
      "clobbers": [
        "window.MediaError"
      ]
    },
    {
      "id": "cordova-plugin-media.Media",
      "file": "plugins/cordova-plugin-media/www/Media.js",
      "pluginId": "cordova-plugin-media",
      "clobbers": [
        "window.Media"
      ]
    },
    {
      "id": "cordova-plugin-purchase.InAppPurchase",
      "file": "plugins/cordova-plugin-purchase/www/store-ios.js",
      "pluginId": "cordova-plugin-purchase",
      "clobbers": [
        "store"
      ]
    },
    {
      "id": "cordova-plugin-webview-checker.webViewChecker",
      "file": "plugins/cordova-plugin-webview-checker/www/webview-checker.js",
      "pluginId": "cordova-plugin-webview-checker",
      "clobbers": [
        "plugins.webViewChecker"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "dynamons-persistence.DynamonsPersistence",
      "file": "plugins/dynamons-persistence/www/DynamonsPersistence.js",
      "pluginId": "dynamons-persistence",
      "clobbers": [
        "DynamonsPersistence"
      ]
    },
    {
      "id": "cordova-plugin-applovin-max.AppLovinMAX",
      "file": "plugins/cordova-plugin-applovin-max/www/applovinmax.js",
      "pluginId": "cordova-plugin-applovin-max",
      "clobbers": [
        "applovin"
      ]
    },
    {
      "id": "cordova-plugin-play-games-services.PlayGamesServices",
      "file": "plugins/cordova-plugin-play-games-services/www/play-games-services.js",
      "pluginId": "cordova-plugin-play-games-services",
      "clobbers": [
        "cordova.plugins.playGamesServices",
        "window.plugins.playGamesServices"
      ]
    },
    {
      "id": "cordova-plugin-memory-warning.CordovaPluginMemoryWarning",
      "file": "plugins/cordova-plugin-memory-warning/www/CordovaPluginMemoryWarning.js",
      "pluginId": "cordova-plugin-memory-warning",
      "clobbers": [
        "cordova.plugins.CordovaPluginMemoryWarning"
      ]
    },
    {
      "id": "cordova-plugin-didomi.Didomi",
      "file": "plugins/cordova-plugin-didomi/www/Didomi.js",
      "pluginId": "cordova-plugin-didomi",
      "clobbers": [
        "navigator.didomi"
      ]
    },
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    },
    {
      "id": "cordova-plugin-tracking-transparency.impacTracking",
      "file": "plugins/cordova-plugin-tracking-transparency/www/tracking.js",
      "pluginId": "cordova-plugin-tracking-transparency",
      "clobbers": [
        "window.plugins.impacTracking"
      ]
    },
    {
      "id": "cordova-ios-request-notification-authorization.plugin",
      "file": "plugins/cordova-ios-request-notification-authorization/www/plugin.js",
      "pluginId": "cordova-ios-request-notification-authorization",
      "clobbers": [
        "notificationAuthorization"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-gameanalytics.GameAnalytics",
      "file": "plugins/cordova-plugin-gameanalytics/www/GameAnalytics.js",
      "pluginId": "cordova-plugin-gameanalytics",
      "clobbers": [
        "GameAnalytics"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-custom-config": "5.1.1",
    "cordova-play-install-referrer": "1.0.1",
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-cloud-settings": "2.0.0",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-enable-multidex": "0.2.0",
    "cordova-plugin-file": "4.3.3",
    "cordova-plugin-inappbrowser": "6.0.0",
    "cordova-plugin-media": "2.4.1",
    "cordova-plugin-purchase": "11.0.0",
    "cordova-plugin-webview-checker": "1.0.1",
    "cordova-plugin-whitelist": "1.3.5",
    "cordova-support-android-plugin": "2.0.4",
    "es6-promise-plugin": "4.2.2",
    "dynamons-persistence": "1.0.1",
    "cordova-plugin-applovin-max": "1.1.5",
    "cordova-plugin-play-games-services": "1.1.2",
    "cordova-plugin-memory-warning": "1.1.1",
    "cordova-plugin-didomi": "0.1",
    "cordova-plugin-firebase-analytics": "8.0.0",
    "cordova-plugin-tracking-transparency": "1.0.4",
    "cordova-ios-request-notification-authorization": "1.0.0",
    "cordova-plugin-gameanalytics": "4.2.8",
    "cordova-plugin-device": "3.0.0"
  };
});