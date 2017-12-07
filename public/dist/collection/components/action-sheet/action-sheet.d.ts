import { CssClassMap, EventEmitter } from '@stencil/core';
import { AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export declare class ActionSheet {
    mode: string;
    color: string;
    actionSheetId: string;
    private animation;
    private el;
    /**
     * @output {ActionSheetEvent} Emitted after the alert has loaded.
     */
    ionActionSheetDidLoad: EventEmitter<ActionSheetEventDetail>;
    /**
     * @output {ActionSheetEvent} Emitted after the alert has presented.
     */
    ionActionSheetDidPresent: EventEmitter<ActionSheetEventDetail>;
    /**
     * @output {ActionSheetEvent} Emitted before the alert has presented.
     */
    ionActionSheetWillPresent: EventEmitter<ActionSheetEventDetail>;
    /**
     * @output {ActionSheetEvent} Emitted before the alert has dismissed.
     */
    ionActionSheetWillDismiss: EventEmitter<ActionSheetDismissEventDetail>;
    /**
     * @output {ActionSheetEvent} Emitted after the alert has dismissed.
     */
    ionActionSheetDidDismiss: EventEmitter<ActionSheetDismissEventDetail>;
    /**
     * @output {ActionSheetEvent} Emitted after the alert has unloaded.
     */
    ionActionSheetDidUnload: EventEmitter<ActionSheetEventDetail>;
    animationCtrl: AnimationController;
    config: Config;
    /**
     * Additional class or classes to apply to the action-sheet
     */
    cssClass: string;
    /**
     * Title for the action-sheet
     */
    title: string;
    /**
     * Subtitle for the action-sheet
     */
    subTitle: string;
    /**
     * An array of buttons for the action-sheet. See ActionsheetButton type for accepted values
     */
    buttons: ActionSheetButton[];
    /**
     * If true, the action-sheet will be dismissed when the backdrop is clicked.
     */
    enableBackdropDismiss: boolean;
    /**
     * If true, action-sheet will become translucent. Requires support for backdrop-filters.
     */
    translucent: boolean;
    /**
     * Enable action-sheet animations. If false, action-sheet will not animate in
     */
    animate: boolean;
    /**
     * Animation to use when the action-sheet is created
     */
    enterAnimation: AnimationBuilder;
    /**
     * Animation to use when the action-sheet is dismissed
     */
    leaveAnimation: AnimationBuilder;
    /**
     * Present the action-sheet after is has been created
     */
    present(): Promise<void>;
    /**
     * Dismiss the action-sheet programatically
     */
    dismiss(data?: any, role?: string): Promise<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected onDismiss(ev: UIEvent): void;
    protected backdropClick(): void;
    buttonClass(button: ActionSheetButton): CssClassMap;
    protected buttonClick(button: ActionSheetButton): void;
    hostData(): {
        class: {
            [x: string]: boolean;
        };
    };
    render(): JSX.Element[];
}
export interface ActionSheetOptions {
    title?: string;
    subTitle?: string;
    cssClass?: string;
    buttons?: (ActionSheetButton | string)[];
    enableBackdropDismiss?: boolean;
    translucent?: boolean;
}
export interface ActionSheetButton {
    text?: string;
    role?: 'cancel' | 'destructive' | 'selected';
    icon?: string;
    cssClass?: string;
    handler?: () => boolean | void;
}
export interface ActionSheetEvent extends CustomEvent {
    detail: ActionSheetEventDetail;
}
export interface ActionSheetEventDetail {
}
export interface ActionSheetDismissEventDetail extends OverlayDismissEventDetail {
}
export interface ActionSheetDismissEvent extends OverlayDismissEvent {
}
export { iosEnterAnimation as iosActionSheetEnterAnimation, iosLeaveAnimation as iosActionSheetLeaveAnimation, mdEnterAnimation as mdActionSheetEnterAnimation, mdLeaveAnimation as mdActionSheetetLeaveAnimation };
