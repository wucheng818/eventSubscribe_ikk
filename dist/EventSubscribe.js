"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DetailFunc_1 = __importDefault(require("./DetailFunc"));
var EventBus = /** @class */ (function (_super) {
    __extends(EventBus, _super);
    function EventBus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 订阅事件
    EventBus.prototype.subscribe = function (eventType, handler) {
        _super.prototype.onSubscribe.call(this, eventType, handler); // 对象的封装
        return this;
    };
    // 发布事件通知
    EventBus.prototype.notify = function (eventType) {
        _super.prototype.emit.call(this, eventType); // 对象的封装
        return this;
    };
    // 取消订阅的方法
    EventBus.prototype.unsubscribe = function (eventType, handler) {
        _super.prototype.offSubscribe.call(this, eventType, Function); // 对象的封装
        return this;
    };
    // 清空一个事件的全部回调
    EventBus.prototype.unsubscribeAll = function (eventType) {
        _super.prototype.offSubscribeAll.call(this, eventType); // 对象的封装
        return this;
    };
    // 清空全部的回调事件 
    EventBus.prototype.clear = function () {
        _super.prototype.clearCallback.call(this);
        return this;
    };
    return EventBus;
}(DetailFunc_1.default));
exports.default = EventBus;
