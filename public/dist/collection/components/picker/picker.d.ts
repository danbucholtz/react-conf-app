import { CssClassMap, EventEmitter } from '@stencil/core';
import { AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
export declare class Picker {
    private animation;
    private durationTimeout;
    private mode;
    private el;
    /**
     * @output {PickerEvent} Emitted after the picker has loaded.
     */
    ionPickerDidLoad: EventEmitter<PickerEventDetail>;
    /**
     * @output {PickerEvent} Emitted after the picker has presented.
     */
    ionPickerDidPresent: EventEmitter<PickerEventDetail>;
    /**
     * @output {PickerEvent} Emitted before the picker has presented.
     */
    ionPickerWillPresent: EventEmitter<PickerEventDetail>;
    /**
     * @output {PickerEvent} Emitted before the picker has dismissed.
     */
    ionPickerWillDismiss: EventEmitter<PickerDismissEventDetail>;
    /**
     * @output {PickerEvent} Emitted after the picker has dismissed.
     */
    ionPickerDidDismiss: EventEmitter<PickerDismissEventDetail>;
    /**
     * @output {PickerEvent} Emitted after the picker has unloaded.
     */
    ionPickerDidUnload: EventEmitter<PickerEventDetail>;
    private showSpinner;
    private spinner;
    animationCtrl: AnimationController;
    config: Config;
    cssClass: string;
    content: string;
    dismissOnPageChange: boolean;
    duration: number;
    enterAnimation: AnimationBuilder;
    leaveAnimation: AnimationBuilder;
    pickerId: string;
    showBackdrop: boolean;
    enableBackdropDismiss: boolean;
    animate: boolean;
    buttons: PickerButton[];
    columns: PickerColumn[];
    present(): Promise<void>;
    dismiss(data?: any, role?: string): Promise<void>;
    componentDidLoad(): void;
    componentDidEnter(): void;
    componentDidUnload(): void;
    protected onDismiss(ev: UIEvent): void;
    buttonClick(button: PickerButton): void;
    getSelected(): any;
    /**
     * @param {any} button Picker toolbar button
     */
    addButton(button: any): void;
    /**
     * @param {PickerColumn} column Picker toolbar button
     */
    addColumn(column: PickerColumn): void;
    getColumn(name: string): PickerColumn;
    getColumns(): PickerColumn[];
    protected backdropClick(): void;
    render(): JSX.Element[];
    buttonWrapperClass(button: PickerButton): CssClassMap;
    buttonClass(button: PickerButton): CssClassMap;
}
export interface PickerButton {
    text?: string;
    role?: string;
    cssClass?: string;
    handler?: (value: any) => boolean | void;
}
export interface PickerOptions {
    buttons?: PickerButton[];
    columns?: PickerColumn[];
    cssClass?: string;
    enableBackdropDismiss?: boolean;
}
export interface PickerColumn {
    name?: string;
    align?: string;
    selectedIndex?: number;
    prevSelected?: number;
    prefix?: string;
    suffix?: string;
    options?: PickerColumnOption[];
    cssClass?: string;
    columnWidth?: string;
    prefixWidth?: string;
    suffixWidth?: string;
    optionsWidth?: string;
    refresh?: () => void;
}
export interface PickerColumnOption {
    text?: string;
    value?: any;
    disabled?: boolean;
    duration?: number;
    transform?: string;
    selected?: boolean;
}
export interface PickerEvent extends CustomEvent {
    detail: PickerEventDetail;
}
export interface PickerEventDetail {
}
export interface PickerDismissEventDetail extends OverlayDismissEventDetail {
}
export interface PickerDismissEvent extends OverlayDismissEvent {
}
export { iosEnterAnimation as iosPickerEnterAnimation, iosLeaveAnimation as iosPickerLeaveAnimation };
