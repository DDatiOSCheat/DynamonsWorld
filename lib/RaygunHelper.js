var Fabrique;
(function (Fabrique) {
    var RayGun = /** @class */ (function () {
        function RayGun() {
            var _this = this;
            this.apiKey = 'kR2OkYJ7P2Tg7eVYcXd2Sg';
            this.recurringError = [];
            (function (a, b, c, d, e, f, g, h) {
                a.RaygunObject = e, a[e] = a[e] || function () {
                    (a[e].o = a[e].o || []).push(arguments);
                }, f = b.createElement(c), g = b.getElementsByTagName(c)[0],
                    // tslint:disable-next-line:no-shadowed-variable
                    f.async = 1, f.src = d, g.parentNode.insertBefore(f, g), h = a.onerror, a.onerror = function (b, c, d, f, g) {
                    // tslint:disable-next-line:no-unused-expression
                    h && h(b, c, d, f, g), g || (g = new Error(b)), a[e].q = a[e].q || [], a[e].q.push({
                        e: g
                    });
                };
            }(window, document, 'script', 'https://cdn.raygun.io/raygun4js/raygun.min.js', 'rg4js'));
            rg4js('apiKey', this.apiKey);
            rg4js('enableCrashReporting', true);
            rg4js('setVersion', "1.5.5");
            rg4js('options', { ignore3rdPartyErrors: true });
            rg4js('onBeforeSend', function (data) { return _this.filterError(data); });
            rg4js('enablePulse', false);
        }
        RayGun.getInstance = function () {
            if (null === RayGun.instance) {
                RayGun.instance = new RayGun();
            }
            return RayGun.instance;
        };
        RayGun.prototype.filterError = function (payload) {
            if (typeof payload !== 'undefined' && payload.Details && payload.Details.Error && payload.Details.Error.Message) {
                if (this.recurringError.indexOf(payload.Details.Error.Message) !== -1) {
                    return false;
                }
                this.recurringError.push(payload.Details.Error.Message);
            }
            return payload;
        };
        RayGun.prototype.setUser = function () {
            //setup user tracking
            var userId = (function () {
                var name = 'brzcrz_local';
                var storage;
                try {
                    storage = window.localStorage.getItem(name);
                }
                catch (e) {
                    //Do nothing
                }
                if (storage) {
                    return storage;
                }
                else {
                    var cookie = (function () {
                        var nameEQ = name + "=";
                        var ca = document.cookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) === ' ') {
                                c = c.substring(1, c.length);
                            }
                            if (c.indexOf(nameEQ) === 0) {
                                return c.substring(nameEQ.length, c.length);
                            }
                        }
                        return null;
                    })();
                    if (cookie) {
                        return cookie;
                    }
                }
                return null;
            })();
            if (userId) {
                rg4js('setUser', {
                    identifier: userId,
                    isAnonymous: false
                });
            }
        };
        RayGun.instance = null;
        return RayGun;
    }());
    Fabrique.RayGun = RayGun;
})(Fabrique || (Fabrique = {}));
Fabrique.RayGun.getInstance();