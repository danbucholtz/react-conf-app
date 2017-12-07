import { EventEmitter } from '@stencil/core';
import { AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export declare class Loading {
    color: string;
    mode: string;
    loadingId: string;
    private animation;
    private durationTimeout;
    private el;
    /**
     * @output {LoadingEvent} Emitted after the loading has loaded.
     */
    ionLoadingDidLoad: EventEmitter<LoadingEventDetail>;
    /**
     * @output {LoadingEvent} Emitted after the loading has presented.
     */
    ionLoadingDidPresent: EventEmitter<LoadingEventDetail>;
    /**
     * @output {LoadingEvent} Emitted before the loading has presented.
     */
    ionLoadingWillPresent: EventEmitter<LoadingEventDetail>;
    /**
     * @output {LoadingEvent} Emitted before the loading has dismissed.
     */
    ionLoadingWillDismiss: EventEmitter<LoadingDismissEventDetail>;
    /**
     * @output {LoadingEvent} Emitted after the loading has dismissed.
     */
    ionLoadingDidDismiss: EventEmitter<LoadingDismissEventDetail>;
    /**
     * @output {LoadingEvent} Emitted after the loading has unloaded.
     */
    ionLoadingDidUnload: EventEmitter<LoadingEventDetail>;
    spinner: string;
    animationCtrl: AnimationController;
    config: Config;
    /**
     * Additional classes to apply for custom CSS
     */
    cssClass: string;
    /**
     * Optional text content to display in the loading indicator
     */
    content: string;
    /**
     * Dismiss the loading indicator if the page is changed
     */
    dismissOnPageChange: boolean;
    /**
     * Number of milliseconds to wait before dismissing the loading indicator
     */
    duration: number;
    /**
     * If true, the background will be translucent. Browser support for backdrop-filter is required for the full effect
     */
    translucent: boolean;
    /**
     * Show the backdrop of not
     */
    showBackdrop: boolean;
    /**
     * Animation to use when loading indicator is presented
     */
    enterAnimation: AnimationBuilder;
    /**
     * Animation to use when a loading indicator is dismissed
     */
    leaveAnimation: AnimationBuilder;
    /**
     * Toggles whether animation should occur or not
     */
    animate: boolean;
    /**
     * Present a loading overlay after it has been created
     */
    present(): Promise<void>;
    /**
     * Dismiss a loading indicator programatically
     */
    dismiss(data?: any, role?: string): Promise<void>;
    componentDidLoad(): void;
    componentDidEnter(): void;
    componentDidUnload(): void;
    protected onDismiss(ev: UIEvent): void;
    hostData(): {
        class: {
            [x: string]: boolean;
        };
    };
    render(): JSX.Element[];
}
export interface LoadingOptions {
    spinner?: string;
    content?: string;
    cssClass?: string;
    showBackdrop?: boolean;
    dismissOnPageChange?: boolean;
    duration?: number;
    translucent?: boolean;
}
export interface LoadingEvent extends CustomEvent {
    detail: LoadingEventDetail;
}
export interface LoadingEventDetail {
}
export interface LoadingDismissEventDetail extends OverlayDismissEventDetail {
}
export interface LoadingDismissEvent extends OverlayDismissEvent {
}
export { iosEnterAnimation as iosLoadingEnterAnimation, iosLeaveAnimation as iosLoadingLeaveAnimation, mdEnterAnimation as mdLoadingEnterAnimation, mdLeaveAnimation as mdLoadingLeaveAnimation };
