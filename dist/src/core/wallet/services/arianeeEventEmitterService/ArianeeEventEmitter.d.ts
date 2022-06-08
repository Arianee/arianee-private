import EventEmitter from 'eventemitter3';
export declare const enum ArianeListenerEvent {
    newListener = "newListener"
}
export declare class CustomEventEmitter extends EventEmitter {
    on(...args: any[]): any;
    addListener: (...args: any[]) => any;
}
export declare class ArianeeEventEmitter {
    EE: CustomEventEmitter;
}
