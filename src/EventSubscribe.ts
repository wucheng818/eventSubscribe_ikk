import Detail from './DetailFunc';

export default class EventBus extends Detail {  // 对象的继承
    // 订阅事件
    public subscribe<T>( eventType: any, handler: T ): object{
        super.onSubscribe( eventType, handler );   // 对象的封装
        return this;
    }
    // 发布事件通知
    public notify<T>( eventType: any, data: T): object{
        super.emit( eventType,  data ); // 对象的封装
        return this;
    }
    // 取消订阅的方法
    public unsubscribe<T>( eventType: any,  handler: T ): object{
        super.offSubscribe( eventType, handler); // 对象的封装
        return this;
    }
    // 清空一个事件的全部回调
    public unsubscribeAll( eventType: any ): object{
        super.offSubscribeAll( eventType ); // 对象的封装
        return this;
    }
    // 清空全部的回调事件 
    public clear(): object{
        super.clearCallback();
        return this;
    }
}