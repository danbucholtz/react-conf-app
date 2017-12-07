import { ElementRef } from '../../utils/helpers';
import { EventEmitter } from '@stencil/core';
export declare class Gesture {
    private detail;
    private positions;
    private ctrl;
    private gesture;
    private lastTouch;
    private pan;
    private hasCapturedPan;
    private hasPress;
    private hasStartedPan;
    private hasFiredStart;
    private isMoveQueued;
    private blocker;
    private el;
    enabled: boolean;
    attachTo: ElementRef;
    autoBlockAll: boolean;
    block: string;
    disableScroll: boolean;
    direction: string;
    gestureName: string;
    gesturePriority: number;
    maxAngle: number;
    threshold: number;
    type: string;
    canStart: GestureCallback;
    onWillStart: (_: GestureDetail) => Promise<void>;
    onStart: GestureCallback;
    onMove: GestureCallback;
    onEnd: GestureCallback;
    onPress: GestureCallback;
    notCaptured: GestureCallback;
    /**
     * @output {Event} Emitted when the gesture moves.
     */
    ionGestureMove: EventEmitter;
    /**
     * @output {Event} Emitted when the gesture starts.
     */
    ionGestureStart: EventEmitter;
    /**
     * @output {Event} Emitted when the gesture ends.
     */
    ionGestureEnd: EventEmitter;
    /**
     * @output {Event} Emitted when the gesture is not captured.
     */
    ionGestureNotCaptured: EventEmitter;
    /**
     * @output {Event} Emitted when press is detected.
     */
    ionPress: EventEmitter;
    componentDidLoad(): void;
    protected enabledChanged(isEnabled: boolean): void;
    protected blockChanged(block: string): void;
    onTouchStart(ev: TouchEvent): void;
    onMouseDown(ev: MouseEvent): void;
    private pointerDown(ev, timeStamp);
    onTouchMove(ev: TouchEvent): void;
    onMoveMove(ev: TouchEvent): void;
    private pointerMove(ev);
    private fireOnMove();
    private calcGestureData(ev);
    private tryToCapturePan();
    private fireOnStart();
    private abortGesture();
    private reset();
    onTouchCancel(ev: TouchEvent): void;
    onTouchEnd(ev: TouchEvent): void;
    onMouseUp(ev: TouchEvent): void;
    private pointerUp(ev);
    private detectPress();
    private enableMouse(shouldEnable);
    private enableTouch(shouldEnable);
    private enable(shouldEnable);
    componentDidUnload(): void;
}
export interface GestureDetail {
    type?: string;
    event?: UIEvent;
    startX?: number;
    startY?: number;
    startTimeStamp?: number;
    currentX?: number;
    currentY?: number;
    velocityX?: number;
    velocityY?: number;
    deltaX?: number;
    deltaY?: number;
    timeStamp?: number;
    data?: any;
}
export interface GestureCallback {
    (detail?: GestureDetail): boolean | void;
}
