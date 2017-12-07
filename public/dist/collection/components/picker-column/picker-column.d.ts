import { GestureDetail, PickerColumn } from '../../index';
export declare class PickerColumnCmp {
    private mode;
    private bounceFrom;
    private colHeight;
    private lastIndex;
    private lastTempIndex;
    private minY;
    private maxY;
    private optHeight;
    private pos;
    private rotateFactor;
    private scaleFactor;
    private startY;
    private velocity;
    private y;
    private activeBlock;
    private el;
    col: PickerColumn;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    optClick(ev: Event, index: number): void;
    setSelected(selectedIndex: number, duration: number): void;
    update(y: number, duration: number, saveY: boolean, emitChange: boolean): void;
    decelerate(): void;
    private canStart();
    onDragStart(detail: GestureDetail): boolean;
    onDragMove(detail: GestureDetail): void;
    onDragEnd(detail: GestureDetail): void;
    refresh(): void;
    hostData(): {
        class: {
            'picker-opts-left': boolean;
            'picker-opts-right': boolean;
        };
        style: {
            'max-width': string;
        };
    };
    render(): any[];
}
export declare const PICKER_OPT_SELECTED = "picker-opt-selected";
export declare const DECELERATION_FRICTION = 0.97;
export declare const FRAME_MS: number;
export declare const MAX_PICKER_SPEED = 60;
