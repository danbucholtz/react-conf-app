import { EventEmitter } from '@stencil/core';
import { Config, SplitPaneAlert, StencilElement } from '../../index';
import { Side } from '../../utils/helpers';
export declare class Menu {
    private gestureBlocker;
    private animation;
    private isPane;
    private _isOpen;
    private lastOnEnd;
    mode: string;
    color: string;
    isAnimating: boolean;
    isRightSide: boolean;
    width: number;
    backdropEl: HTMLElement;
    menuInnerEl: HTMLElement;
    contentEl: HTMLElement;
    menuCtrl: HTMLIonMenuControllerElement;
    private el;
    config: Config;
    lazyMenuCtrl: StencilElement;
    /**
     * @input {string} The content's id the menu should use.
     */
    content: string;
    /**
     * @input {string} An id for the menu.
     */
    menuId: string;
    /**
     * @input {string} The display type of the menu. Default varies based on the mode,
     * see the `menuType` in the [config](../../config/Config). Available options:
     * `"overlay"`, `"reveal"`, `"push"`.
     */
    type: string;
    typeChanged(type: string): void;
    /**
     * @input {boolean} If true, the menu is enabled. Default `true`.
     */
    enabled: boolean;
    protected enabledChanged(): void;
    /**
     * @input {string} Which side of the view the menu should be placed. Default `"start"`.
     */
    side: Side;
    protected sideChanged(): void;
    /**
     * @input {boolean} If true, swiping the menu is enabled. Default `true`.
     */
    swipeEnabled: boolean;
    protected swipeEnabledChanged(): void;
    /**
     * @input {boolean} If true, the menu will persist on child pages.
     */
    persistent: boolean;
    /**
     * @hidden
     */
    maxEdgeStart: number;
    /**
     * @output {Event} Emitted when the sliding position changes.
     * It reports the relative position.
     */
    ionDrag: EventEmitter;
    /**
     * @output {Event} Emitted when the menu is open.
     */
    ionOpen: EventEmitter;
    /**
     * @output {Event} Emitted when the menu is closed.
     */
    ionClose: EventEmitter;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    splitPaneChanged(ev: SplitPaneAlert): void;
    onBackdropClick(ev: UIEvent): void;
    getElement(): HTMLIonMenuElement;
    isOpen(): boolean;
    setOpen(shouldOpen: boolean, animated?: boolean): Promise<boolean>;
    open(): Promise<boolean>;
    close(): Promise<boolean>;
    toggle(): Promise<boolean>;
    private loadAnimation();
    private startAnimation(shouldOpen, animated);
    private isActive();
    private canSwipe();
    private canStart(detail);
    private onWillStart();
    private onDragStart();
    private onDragMove(detail);
    private onDragEnd(detail);
    private beforeAnimation();
    private afterAnimation(isOpen);
    private updateState();
    private forceClosing();
    hostData(): {
        role: string;
        class: {
            [x: string]: boolean;
            'menu-enabled': boolean;
            'menu-side-right': boolean;
            'menu-side-left': boolean;
        };
    };
    render(): JSX.Element[];
}
