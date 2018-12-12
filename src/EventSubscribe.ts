import Detail from './DetailFunc';
export default class EventBus extends Detail {  // 对象的继承
    // 订阅事件
    public subscribe<T>( IEvent: string, IEventCallback: Function ){
        super.onSubscribe( IEvent, IEventCallback );   // 对象的封装
        return this;
    }
    // 发布事件通知
    public notify<T>( IEvent: string, ...Arg:any ){
        super.emit( IEvent ); // 对象的封装
        return this;
    }
    // 取消订阅的方法
    public unsubscribe( IEvent: string,  IEventCallback: Function ){
        super.offSubscribe( IEvent, Function); // 对象的封装
        return this;
    }
    // 清空一个事件的全部回调
    public unsubscribeAll( IEvent: string,  IEventCallback: Function ){
        super.offSubscribeAll( IEvent, IEventCallback ); // 对象的封装
        return this;
    }
    // 清空全部的回调事件 
    public clear(){
        super.clearCallback();
        return this;
    }
}