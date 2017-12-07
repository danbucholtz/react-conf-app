export declare class GestureController {
    private gestureId;
    private requestedStart;
    private disabledGestures;
    private disabledScroll;
    private capturedId;
    createGesture(gestureName: string, gesturePriority: number, disableScroll: boolean): GestureDelegate;
    createBlocker(opts?: BlockerOptions): BlockerDelegate;
    newID(): number;
    start(gestureName: string, id: number, priority: number): boolean;
    capture(gestureName: string, id: number, priority: number): boolean;
    release(id: number): void;
    disableGesture(gestureName: string, id: number): void;
    enableGesture(gestureName: string, id: number): void;
    disableScroll(id: number): void;
    enableScroll(id: number): void;
    canStart(gestureName: string): boolean;
    isCaptured(): boolean;
    isScrollDisabled(): boolean;
    isDisabled(gestureName: string): boolean;
}
export declare class GestureDelegate {
    private ctrl;
    private gestureDelegateId;
    private name;
    private priority;
    private disableScroll;
    constructor(ctrl: GestureController, gestureDelegateId: number, name: string, priority: number, disableScroll: boolean);
    canStart(): boolean;
    start(): boolean;
    capture(): boolean;
    release(): void;
    destroy(): void;
}
export declare class BlockerDelegate {
    private blockerDelegateId;
    private controller;
    private disable;
    private disableScroll;
    blocked: boolean;
    constructor(blockerDelegateId: number, controller: GestureController, disable: string[], disableScroll: boolean);
    block(): void;
    unblock(): void;
    destroy(): void;
}
export interface BlockerOptions {
    disableScroll?: boolean;
    disable?: string[];
}
export declare const BLOCK_ALL: BlockerOptions;
