import { EventEmitter } from '@stencil/core';
import { AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export declare class Popover {
    private animation;
    private el;
    /**
     * @output {PopoverEvent} Emitted after the popover has loaded.
     */
    ionPopoverDidLoad: EventEmitter<PopoverEventDetail>;
    /**
     * @output {PopoverEvent} Emitted after the popover has presented.
     */
    ionPopoverDidPresent: EventEmitter<PopoverEventDetail>;
    /**
     * @output {PopoverEvent} Emitted before the popover has presented.
     */
    ionPopoverWillPresent: EventEmitter<PopoverEventDetail>;
    /**
     * @output {PopoverEvent} Emitted before the popover has dismissed.
     */
    ionPopoverWillDismiss: EventEmitter<PopoverDismissEventDetail>;
    /**
     * @output {PopoverEvent} Emitted after the popover has dismissed.
     */
    ionPopoverDidDismiss: EventEmitter<PopoverDismissEventDetail>;
    /**
     * @output {PopoverEvent} Emitted after the popover has unloaded.
     */
    ionPopoverDidUnload: EventEmitter<PopoverEventDetail>;
    animationCtrl: AnimationController;
    config: Config;
    mode: string;
    color: string;
    component: string;
    componentProps: any;
    cssClass: string;
    enableBackdropDismiss: boolean;
    enterAnimation: AnimationBuilder;
    leaveAnimation: AnimationBuilder;
    ev: Event;
    popoverId: string;
    showBackdrop: boolean;
    translucent: boolean;
    animate: boolean;
    present(): Promise<void>;
    dismiss(data?: any, role?: string): Promise<void>;
    componentDidLoad(): void;
    componentDidEnter(): void;
    componentDidUnload(): void;
    protected onDismiss(ev: UIEvent): void;
    protected backdropClick(): void;
    hostData(): {
        class: {
            [x: string]: boolean;
        };
    };
    render(): JSX.Element[];
}
export interface PopoverOptions {
    component: string;
    componentProps?: any;
    showBackdrop?: boolean;
    enableBackdropDismiss?: boolean;
    translucent?: boolean;
    enterAnimation?: AnimationBuilder;
    leavenimation?: AnimationBuilder;
    cssClass?: string;
    ev: Event;
}
export interface PopoverEvent extends CustomEvent {
    detail: PopoverEventDetail;
}
export interface PopoverEventDetail {
}
export interface PopoverDismissEventDetail extends OverlayDismissEventDetail {
}
export interface PopoverDismissEvent extends OverlayDismissEvent {
}
export declare const POPOVER_POSITION_PROPERTIES: any;
export { iosEnterAnimation as iosPopoverEnterAnimation, iosLeaveAnimation as iosPopoverLeaveAnimation, mdEnterAnimation as mdPopoverEnterAnimation, mdLeaveAnimation as mdPopoverLeaveAnimation };
