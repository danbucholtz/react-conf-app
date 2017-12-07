export interface Now {
    (): number;
}
export interface DomController {
    read: DomControllerCallback;
    write: DomControllerCallback;
    raf: DomControllerCallback;
}
export interface RafCallback {
    (timeStamp?: number): void;
}
export interface DomControllerCallback {
    (cb: RafCallback): void;
}
export declare function createDomControllerClient(win: Window, now: Now, rafPending?: boolean): DomController;
