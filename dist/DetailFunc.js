"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Detail = (function () {
    function Detail() {
    }
    Detail.prototype.onSubscribe = function (eventType, handler) {
        if (!(eventType in Detail.handlers)) {
            Detail.handlers[eventType] = [];
        }
        Detail.handlers[eventType].push(handler);
    };
    Detail.prototype.offSubscribe = function (eventType, handler) {
        var currentIEvent = Detail.handlers[eventType];
        var len = 0;
        if (currentIEvent) {
            len = currentIEvent.length;
            for (var i = 0; i < len; i++) {
                if (currentIEvent[i] === handler) {
                    currentIEvent.splice(i, 1);
                }
            }
        }
    };
    Detail.prototype.emit = function (eventType, data) {
        var IEventArr = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < IEventArr.length; i++) {
            Detail.handlers[eventType][i].apply(this, IEventArr);
        }
    };
    Detail.prototype.offSubscribeAll = function (eventType) {
        Detail.handlers[eventType] = [];
    };
    Detail.prototype.clearCallback = function () {
        Detail.handlers = {};
    };
    Detail.handlers = {};
    return Detail;
}());
exports.default = Detail;
//# sourceMappingURL=DetailFunc.js.map