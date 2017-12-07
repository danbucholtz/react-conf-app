import { EventEmitter } from '@stencil/core';
import { AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export declare class Modal {
    private el;
    /**
     * @output {ModalEvent} Emitted after the modal has loaded.
     */
    ionModalDidLoad: EventEmitter<ModalEventDetail>;
    /**
     * @output {ModalEvent} Emitted after the modal has presented.
     */
    ionModalDidPresent: EventEmitter<ModalEventDetail>;
    /**
     * @output {ModalEvent} Emitted before the modal has presented.
     */
    ionModalWillPresent: EventEmitter<ModalEventDetail>;
    /**
     * @output {ModalEvent} Emitted before the modal has dismissed.
     */
    ionModalWillDismiss: EventEmitter<ModalDismissEventDetail>;
    /**
     * @output {ModalEvent} Emitted after the modal has dismissed.
     */
    ionModalDidDismiss: EventEmitter<ModalDismissEventDetail>;
    /**
     * @output {ModalEvent} Emitted after the modal has unloaded.
     */
    ionModalDidUnload: EventEmitter<ModalEventDetail>;
    animationCtrl: AnimationController;
    config: Config;
    mode: string;
    color: string;
    component: any;
    data: any;
    cssClass: string;
    enableBackdropDismiss: boolean;
    modalId: string;
    showBackdrop: boolean;
    enterAnimation: AnimationBuilder;
    leaveAnimation: AnimationBuilder;
    animate: boolean;
    private animation;
    present(): Promise<void>;
    dismiss(data?: any, role?: string): Promise<void>;
    protected onDismiss(ev: UIEvent): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected backdropClick(): void;
    render(): JSX.Element[];
}
export interface ModalOptions {
    component: any;
    data?: any;
    showBackdrop?: boolean;
    enableBackdropDismiss?: boolean;
    enterAnimation?: AnimationBuilder;
    exitAnimation?: AnimationBuilder;
    cssClass?: string;
}
export interface ModalEvent extends CustomEvent {
    detail: ModalEventDetail;
}
export interface ModalEventDetail {
}
export interface ModalDismissEventDetail extends OverlayDismissEventDetail {
}
export interface ModalDismissEvent extends OverlayDismissEvent {
}
export { iosEnterAnimation as iosModalEnterAnimation, iosLeaveAnimation as iosModalLeaveAnimation, mdEnterAnimation as mdModalEnterAnimation, mdLeaveAnimation as mdModalLeaveAnimation };
