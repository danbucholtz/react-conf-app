import { EventEmitter } from '@stencil/core';
import { Config, NavState, RouterEntries } from '../../index';
export class Tabs {
    constructor() {
        this.ids = -1;
        this.tabsId = (++tabIds);
        this.tabs = [];
        /**
         * @input {boolean} If true, the tabbar
         */
        this.tabbarHidden = false;
        /**
         * @input {boolean} If true, adds transparency to the tabbar.
         * Note: In order to scroll content behind the tabbar, the `fullscreen`
         * attribute needs to be set on the content.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
    }
    componentDidLoad() {
        this.loadConfig('tabsPlacement', 'bottom');
        this.loadConfig('tabsLayout', 'icon-top');
        this.loadConfig('tabsHighlight', true);
        this.initTabs();
        const useRouter = this.config.getBoolean('useRouter', false);
        if (!useRouter) {
            this.initSelect();
        }
    }
    componentDidUnload() {
        this.tabs = this.selectedTab = null;
    }
    tabChange(ev) {
        const selectedTab = ev.detail;
        this.select(selectedTab);
    }
    /**
     * @param {number|Tab} tabOrIndex Index, or the Tab instance, of the tab to select.
     */
    select(tabOrIndex) {
        const selectedTab = (typeof tabOrIndex === 'number' ? this.getByIndex(tabOrIndex) : tabOrIndex);
        if (!selectedTab) {
            return Promise.resolve();
        }
        // Reset rest of tabs
        for (let tab of this.tabs) {
            if (selectedTab !== tab) {
                tab.selected = false;
            }
        }
        selectedTab.selected = true;
        console.log('HEY');
        // The same selected was selected
        // we need to set root in the nested ion-nav if it exist
        if (this.selectedTab === selectedTab) {
            return selectedTab.goToRoot();
        }
        const leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        let promise = selectedTab._setActive(true);
        if (leavingTab) {
            promise = promise.then(() => leavingTab._setActive(false));
        }
        return promise.then(() => {
            this.ionChange.emit(selectedTab);
            this.ionNavChanged.emit({ isPop: false });
        });
    }
    /**
    * @param {number} index Index of the tab you want to get
    * @returns {HTMLIonTabElement} Returns the tab who's index matches the one passed
    */
    getByIndex(index) {
        return this.tabs[index];
    }
    /**
     * @return {HTMLIonTabElement} Returns the currently selected tab
     */
    getSelected() {
        return this.tabs.find((tab) => tab.selected);
    }
    getIndex(tab) {
        return this.tabs.indexOf(tab);
    }
    getTabs() {
        return this.tabs;
    }
    getState() {
        const selectedTab = this.getSelected();
        if (!selectedTab) {
            return null;
        }
        return {
            path: selectedTab.getPath(),
            focusNode: selectedTab
        };
    }
    getRoutes() {
        debugger;
        const a = this.tabs.map(t => {
            return {
                path: t.getPath(),
                id: t
            };
        });
        return a;
    }
    setRouteId(id, _ = {}) {
        if (this.selectedTab === id) {
            return Promise.resolve();
        }
        return this.select(id);
    }
    initTabs() {
        const tabs = this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        for (let tab of tabs) {
            const id = `t-${this.tabsId}-${++this.ids}`;
            tab.btnId = 'tab-' + id;
            tab.id = 'tabpanel-' + id;
        }
    }
    initSelect() {
        // find pre-selected tabs
        let selectedTab = this.tabs.find(t => t.selected);
        // reset all tabs none is selected
        for (let tab of this.tabs) {
            tab.selected = false;
        }
        // find a tab candidate in case, the selected in null
        if (!selectedTab) {
            selectedTab = this.tabs.find(t => t.show && t.enabled);
        }
        selectedTab._setActive(true);
        this.selectedTab = selectedTab;
    }
    loadConfig(attrKey, fallback) {
        const val = this[attrKey];
        if (typeof val === 'undefined') {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    }
    render() {
        const dom = [
            h("div", { class: 'tabs-inner' },
                h("slot", null))
        ];
        if (!this.tabbarHidden) {
            dom.push(h("ion-tabbar", { tabs: this.tabs, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent }));
        }
        return dom;
    }
}
let tabIds = -1;
