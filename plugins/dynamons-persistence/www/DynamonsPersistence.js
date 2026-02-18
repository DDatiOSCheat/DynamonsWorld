cordova.define("dynamons-persistence.DynamonsPersistence", function(require, exports, module) {
var exec = cordova.require('cordova/exec');

var DynamonsPersistence = function() {
    console.log('DynamonsPersistence instanced');
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = DynamonsPersistence;
}
});
