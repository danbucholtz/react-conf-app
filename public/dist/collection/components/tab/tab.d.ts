import { EventEmitter } from '@stencil/core';
import { PublicViewController } from '../../index';
export declare class Tab {
    private nav;
    private resolveNav;
    el: HTMLElement;
    init: boolean;
    active: boolean;
    /**
     * @input {Page} Set the root page for this tab.
     */
    root: string;
    /**
     * @input {object} Any nav-params to pass to the root page of this tab.
     */
    rootParams: any;
    /**
     * @input {string} Set the root page for this tab.
     */
    btnId: string;
    /**
     * @input {string} The URL path name to represent this tab within the URL.
     */
    path: string;
    /**
     * @input {string} The title of the tab button.
     */
    title: string;
    /**
     * @input {string} The icon for the tab button.
     */
    icon: string;
    /**
     * @input {string} The badge for the tab button.
     */
    badge: string;
    /**
     * @input {string} The badge color for the tab button.
     */
    badgeStyle: string;
    /**
     * @input {boolean} If true, enable the tab. If false,
     * the user cannot interact with this element.
     * Default: `true`.
     */
    enabled: boolean;
    /**
     * @input {boolean} If true, the tab button is visible within the
     * tabbar. Default: `true`.
     */
    show: boolean;
    /**
     * @input {boolean} If true, hide the tabs on child pages.
     */
    tabsHideOnSubPages: boolean;
    constructor();
    selected: boolean;
    selectedChanged(selected: boolean): void;
    /**
     * @output {Tab} Emitted when the current tab is selected.
     */
    ionSelect: EventEmitter;
    protected componentDidUpdate(): void;
    _setActive(shouldActive: boolean): Promise<any>;
    getPath(): string;
    goToRoot(opts?: any): Promise<any>;
    getActive(): Promise<PublicViewController>;
    getNav(): Promise<HTMLIonNavElement>;
    hostData(): {
        'aria-hidden': string;
        'aria-labelledby': string;
        'role': string;
        class: {
            'show-tab': boolean;
        };
    };
    render(): JSX.Element;
}
