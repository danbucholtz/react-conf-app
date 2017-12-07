import { EventEmitter } from '@stencil/core';
import { AnimationBuilder, AnimationController, Config, CssClassMap, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export declare class Toast {
    mode: string;
    color: string;
    private animation;
    private el;
    /**
     * @output {ToastEvent} Emitted after the toast has loaded.
     */
    ionToastDidLoad: EventEmitter<ToastEventDetail>;
    /**
     * @output {ToastEvent} Emitted after the toast has presented.
     */
    ionToastDidPresent: EventEmitter<ToastEventDetail>;
    /**
     * @output {ToastEvent} Emitted before the toast has presented.
     */
    ionToastWillPresent: EventEmitter<ToastEventDetail>;
    /**
     * @output {ToastEvent} Emitted before the toast has dismissed.
     */
    ionToastWillDismiss: EventEmitter<ToastDismissEventDetail>;
    /**
     * @output {ToastEvent} Emitted after the toast has dismissed.
     */
    ionToastDidDismiss: EventEmitter<ToastDismissEventDetail>;
    /**
     * @output {ToastEvent} Emitted after the toast has unloaded.
     */
    ionToastDidUnload: EventEmitter<ToastEventDetail>;
    animationCtrl: AnimationController;
    config: Config;
    message: string;
    cssClass: string;
    duration: number;
    showCloseButton: boolean;
    closeButtonText: string;
    dismissOnPageChange: boolean;
    position: string;
    translucent: boolean;
    toastId: string;
    animate: boolean;
    enterAnimation: AnimationBuilder;
    leaveAnimation: AnimationBuilder;
    present(): Promise<void>;
    dismiss(data?: any, role?: string): Promise<void>;
    componentDidLoad(): void;
    componentDidEnter(): void;
    componentDidUnload(): void;
    protected onDismiss(ev: UIEvent): void;
    wrapperClass(): CssClassMap;
    hostData(): {
        class: {
            [x: string]: boolean;
        };
    };
    render(): JSX.Element;
}
export interface ToastOptions {
    message?: string;
    cssClass?: string;
    duration?: number;
    showCloseButton?: boolean;
    closeButtonText?: string;
    dismissOnPageChange?: boolean;
    position?: string;
    translucent?: boolean;
    enterAnimation?: AnimationBuilder;
    exitAnimation?: AnimationBuilder;
}
export interface ToastEvent extends CustomEvent {
    detail: ToastEventDetail;
}
export interface ToastEventDetail {
}
export interface ToastDismissEventDetail extends OverlayDismissEventDetail {
}
export interface ToastDismissEvent extends OverlayDismissEvent {
}
export { iosEnterAnimation as iosToastEnterAnimation, iosLeaveAnimation as iosToastLeaveAnimation, mdEnterAnimation as mdToastEnterAnimation, mdLeaveAnimation as mdToastLeaveAnimation };
