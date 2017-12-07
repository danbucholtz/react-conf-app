import { EventEmitter } from '@stencil/core';
import { Config, NavState, RouterEntries } from '../../index';
export interface NavOptions {
}
export declare class Tabs {
    private ids;
    private tabsId;
    el: HTMLElement;
    tabs: HTMLIonTabElement[];
    selectedTab: HTMLIonTabElement;
    config: Config;
    /**
     * @input {string} A unique name for the tabs
     */
    name: string;
    /**
     * @input {boolean} If true, the tabbar
     */
    tabbarHidden: boolean;
    /**
     * @input {string} Set the tabbar layout: `icon-top`, `icon-start`, `icon-end`, `icon-bottom`, `icon-hide`, `title-hide`.
     */
    tabbarLayout: string;
    /**
     * @input {string} Set position of the tabbar: `top`, `bottom`.
     */
    tabbarPlacement: string;
    /**
     * @input {boolean} If true, show the tab highlight bar under the selected tab.
     */
    tabbarHighlight: boolean;
    /**
     * @input {boolean} If true, adds transparency to the tabbar.
     * Note: In order to scroll content behind the tabbar, the `fullscreen`
     * attribute needs to be set on the content.
     * Only affects `ios` mode. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * @output {any} Emitted when the tab changes.
     */
    ionChange: EventEmitter;
    ionNavChanged: EventEmitter;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected tabChange(ev: CustomEvent): void;
    /**
     * @param {number|Tab} tabOrIndex Index, or the Tab instance, of the tab to select.
     */
    select(tabOrIndex: number | HTMLIonTabElement): Promise<any>;
    /**
    * @param {number} index Index of the tab you want to get
    * @returns {HTMLIonTabElement} Returns the tab who's index matches the one passed
    */
    getByIndex(index: number): HTMLIonTabElement;
    /**
     * @return {HTMLIonTabElement} Returns the currently selected tab
     */
    getSelected(): HTMLIonTabElement;
    getIndex(tab: HTMLIonTabElement): number;
    getTabs(): HTMLIonTabElement[];
    getState(): NavState;
    getRoutes(): RouterEntries;
    setRouteId(id: any, _?: any): Promise<void>;
    private initTabs();
    private initSelect();
    private loadConfig(attrKey, fallback);
    render(): JSX.Element[];
}
