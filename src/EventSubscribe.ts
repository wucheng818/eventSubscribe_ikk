import Detail from './DetailFunc';
export default class EventBus extends Detail {  // 对象的继承
    // 订阅事件
    public subscribe( eventType: string, handler: Function ): object{
        super.onSubscribe( eventType, handler );   // 对象的封装
        return this;
    }
    // 发布事件通知
    public notify( eventType: string): object{
        super.emit( eventType ); // 对象的封装
        return this;
    }
    // 取消订阅的方法
    public unsubscribe( eventType: string,  handler: Function ){
        super.offSubscribe( eventType, Function); // 对象的封装
        return this;
    }
    // 清空一个事件的全部回调
    public unsubscribeAll( eventType: string ): object{
        super.offSubscribeAll( eventType ); // 对象的封装
        return this;
    }
    // 清空全部的回调事件 
    public clear(): object{
        super.clearCallback();
        return this;
    }
}