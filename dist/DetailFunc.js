"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Detail = /** @class */ (function () {
    function Detail() {
    }
    Detail.prototype.onSubscribe = function (IEvent, IEventCallback) {
        if (!(IEvent in Detail.IEventCallbacks)) {
            Detail.IEventCallbacks[IEvent] = [];
        }
        Detail.IEventCallbacks[IEvent].push(IEventCallback);
    };
    Detail.prototype.offSubscribe = function (IEvent, IEventCallback) {
        var currentIEvent = Detail.IEventCallbacks[IEvent];
        var len = 0;
        if (currentIEvent) {
            len = currentIEvent.length;
            for (var i = 0; i < len; i++) {
                if (currentIEvent[i] === IEventCallback) {
                    currentIEvent.splice(i, 1);
                }
            }
        }
    };
    Detail.prototype.emit = function (IEvent) {
        var Arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            Arg[_i - 1] = arguments[_i];
        }
        var IEventArr = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < IEventArr.length; i++) {
            Detail.IEventCallbacks[IEvent][i].apply(this, IEventArr);
        }
    };
    Detail.prototype.offSubscribeAll = function (IEvent, IEventCallback) {
        var currentIEvent = Detail.IEventCallbacks[IEvent];
        var len = 0;
        if (currentIEvent) {
            len = currentIEvent.length;
            for (var i = 0; i < len; i++) {
                if (currentIEvent[i] === IEventCallback) {
                    currentIEvent = [];
                }
            }
        }
    };
    Detail.prototype.clearCallback = function () {
        Detail.IEventCallbacks = {};
    };
    Detail.IEventCallbacks = {};
    return Detail;
}());
exports.default = Detail;
