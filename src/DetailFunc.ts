export default class Detail {
    private static handlers: any = {};
    public onSubscribe<T>( eventType: any, handler: T ): void{
        if(!( eventType in Detail.handlers )){
            Detail.handlers[eventType] = [];
        }
        Detail.handlers[eventType].push(handler);
    }
    public offSubscribe<T>( eventType: any,  handler: T ): void{
        let currentIEvent = Detail.handlers[eventType];
        let len = 0;
        if( currentIEvent ){
            len = currentIEvent.length;
            for( var i = 0; i < len; i++ ){
                if( currentIEvent[i] === handler ){
                    currentIEvent.splice( i, 1 );
                }                
            }
        }
    }
    public emit<T>( eventType: any,  data: T ): void{
        let IEventArr = Array.prototype.slice.call( arguments, 1 );
        for( var i = 0; i < IEventArr.length; i++ ){
            Detail.handlers[eventType][i].apply( this, IEventArr );
        }
    }
    public offSubscribeAll( eventType: any ): void{
        Detail.handlers[eventType]=[];
    }
    public clearCallback(): void{
        Detail.handlers= {};
    }
}