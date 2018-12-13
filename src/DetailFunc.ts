export default class Detail {
    private static handlers: any = {};
    public onSubscribe( eventType: string, handler: Function ): void{
        if(!( eventType in Detail.handlers )){
            Detail.handlers[eventType] = [];
        }
        Detail.handlers[eventType].push(handler);
    }
    public offSubscribe( eventType: string,  handler: Function ): void{
        let currentIEvent: Function[] = Detail.handlers[eventType];
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
    public emit( eventType: string ): void{
        let IEventArr = Array.prototype.slice.call( arguments, 1 );
        for( var i = 0; i < IEventArr.length; i++ ){
            Detail.handlers[eventType][i].apply( this, IEventArr );
        }
    }
    public offSubscribeAll( eventType: string ): void{
        Detail.handlers[eventType]=[];
    }
    public clearCallback(): void{
        Detail.handlers= {};
    }
}