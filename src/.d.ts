

declare class EventBus {
    subscribe : ( eventType: string, handler: Function ) => object;
    notify : ( eventType: string ) => object;
    unsubscribe : ( eventType: string,  handler: Function ) => object;
    unsubscribeAll :( eventType: string ) => object
}

declare class Detail {
    handlers : {};
    onSubscribe: ( eventType: string, handler: Function ) => void;
    offSubscribe : ( eventType: string,  handler: Function ) => void;
    emit : ( eventType: string ) => void;
    offSubscribeAll : ( eventType: string ) => void;
    clearCallback : () => void;
}