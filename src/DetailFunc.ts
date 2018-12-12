export default class Detail {
    private static IEventCallbacks: any = {};
    public onSubscribe( IEvent: string, IEventCallback: Function ): void{
        if(!( IEvent in Detail.IEventCallbacks )){
            Detail.IEventCallbacks[IEvent] = [];
        }
        Detail.IEventCallbacks[IEvent].push(IEventCallback);
    }
    public offSubscribe( IEvent: string,  IEventCallback: Function ): void{
        let currentIEvent: Function[] = Detail.IEventCallbacks[IEvent];
        let len = 0;
        if( currentIEvent ){
            len = currentIEvent.length;
            for( var i = 0; i < len; i++ ){
                if( currentIEvent[i] === IEventCallback ){
                    currentIEvent.splice( i, 1 );
                }
                 
            }
        }
    }
    public emit( IEvent: string, ...Arg: any ): void{
        let IEventArr = Array.prototype.slice.call( arguments, 1 );
        for( var i = 0; i < IEventArr.length; i++ ){
            Detail.IEventCallbacks[IEvent][i].apply( this, IEventArr );
        }
    }
    public offSubscribeAll( IEvent: string,  IEventCallback: Function ): void{
        let currentIEvent: Function[]  = Detail.IEventCallbacks[IEvent];
        let len = 0;
        if( currentIEvent ){
            len = currentIEvent.length;
            for( var i = 0; i < len; i++ ){
                if( currentIEvent[i] === IEventCallback ){
                    currentIEvent= [];
                }
            }
        }
    }
    public clearCallback(): void{
        Detail.IEventCallbacks= {};
    }
}