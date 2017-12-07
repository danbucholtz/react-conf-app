import { CssClassMap, EventEmitter } from '@stencil/core';
import { AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export declare class Alert {
    mode: string;
    color: string;
    alertId: string;
    private animation;
    private activeId;
    private inputType;
    private hdrId;
    private el;
    /**
     * @output {AlertEvent} Emitted after the alert has loaded.
     */
    ionAlertDidLoad: EventEmitter<AlertEventDetail>;
    /**
     * @output {AlertEvent} Emitted after the alert has presented.
     */
    ionAlertDidPresent: EventEmitter<AlertEventDetail>;
    /**
     * @output {AlertEvent} Emitted before the alert has presented.
     */
    ionAlertWillPresent: EventEmitter<AlertEventDetail>;
    /**
     * @output {AlertEvent} Emitted before the alert has dismissed.
     */
    ionAlertWillDismiss: EventEmitter<AlertDismissEventDetail>;
    /**
     * @output {AlertEvent} Emitted after the alert has dismissed.
     */
    ionAlertDidDismiss: EventEmitter<AlertDismissEventDetail>;
    /**
     * @output {AlertEvent} Emitted after the alert has unloaded.
     */
    ionAlertDidUnload: EventEmitter<AlertEventDetail>;
    animationCtrl: AnimationController;
    config: Config;
    /**
     * Additional class or classes to apply to the alert
     */
    cssClass: string;
    /**
     * Title for the alert
     */
    title: string;
    /**
     * Subtitle for the alert
     */
    subTitle: string;
    /**
     * Message to be shown in the alert
     */
    message: string;
    /**
     * Array of buttons to be added to the alert. See AlertButton type for valid options
     */
    buttons: AlertButton[];
    /**
     * Array of input to show in the alert. See AlertInput type for valid options
     */
    inputs: AlertInput[];
    /**
     * If true, the alert will be dismissed when the backdrop is clicked.
     */
    enableBackdropDismiss: boolean;
    /**
     * If true, alert will become translucent. Requires support for backdrop-filters.
     */
    translucent: boolean;
    /**
     * Enable alert animations. If false, alert will not animate in
     */
    animate: boolean;
    /**
     * Animation to be used when the alert is shown
     */
    enterAnimation: AnimationBuilder;
    /**
     * Animation to be used when the alert is dismissed
     */
    leaveAnimation: AnimationBuilder;
    /**
     * Present the alert after is has been created
     */
    present(): Promise<void>;
    /**
     * Dismiss the alert programatically
     */
    dismiss(data?: any, role?: string): Promise<void>;
    componentDidLoad(): void;
    componentDidEnter(): void;
    componentDidUnload(): void;
    protected backdropClick(): void;
    rbClick(inputIndex: number): void;
    cbClick(inputIndex: number): void;
    buttonClick(button: any): void;
    getValues(): any;
    buttonClass(button: AlertButton): CssClassMap;
    renderCheckbox(inputs: AlertInput[]): JSX.Element;
    renderRadio(inputs: AlertInput[]): JSX.Element;
    renderInput(inputs: AlertInput[]): JSX.Element;
    hostData(): {
        class: {
            [x: string]: boolean;
        };
        id: string;
    };
    render(): JSX.Element[];
}
export interface AlertOptions {
    title?: string;
    subTitle?: string;
    message?: string;
    cssClass?: string;
    mode?: string;
    inputs?: AlertInput[];
    buttons?: (AlertButton | string)[];
    enableBackdropDismiss?: boolean;
    translucent?: boolean;
}
export interface AlertInput {
    type?: string;
    name?: string | number;
    placeholder?: string;
    value?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    handler?: Function;
    min?: string | number;
    max?: string | number;
}
export interface AlertButton {
    text?: string;
    role?: string;
    cssClass?: string;
    handler?: (value: any) => boolean | void;
}
export interface AlertEvent extends CustomEvent {
}
export interface AlertEventDetail {
    detail: any;
}
export interface AlertDismissEventDetail extends OverlayDismissEventDetail {
}
export interface AlertDismissEvent extends OverlayDismissEvent {
}
export { iosEnterAnimation as iosAlertEnterAnimation, iosLeaveAnimation as iosAlertLeaveAnimation, mdEnterAnimation as mdAlertEnterAnimation, mdLeaveAnimation as mdAlertLeaveAnimation };
