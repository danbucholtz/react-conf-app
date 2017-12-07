/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-tab_ios","\nion-tab.hydrated{visibility:inherit}","ion-tab-button_ios","\nion-tab-button.hydrated{visibility:inherit}","ion-tab-highlight_ios","\nion-tab-highlight.hydrated{visibility:inherit}","ion-tabbar_ios","\nion-tabbar.hydrated{visibility:inherit}","ion-tabs_ios","ion-tabs {\n  display: flex;\n  flex-direction: column;\n}\n\n.tabs-inner {\n  position: relative;\n  flex: 1;\n  contain: layout size style;\n}\n\nion-tab {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: -1;\n  display: none;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n}\n\nion-tab.show-tab {\n  z-index: 0;\n  display: block;\n}\n\nion-tabbar {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  order: 1;\n  width: 100%;\n}\n\nion-tabbar.tabbar-hidden {\n  display: none;\n}\n\nion-tabbar.placement-top {\n  order: -1;\n}\n\nion-tab-button {\n  margin: 0;\n  text-align: center;\n  border-radius: 0;\n  position: relative;\n  z-index: 0;\n  display: flex;\n  overflow: hidden;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  border: 0;\n  text-decoration: none;\n  background: none;\n  cursor: pointer;\n  user-select: none;\n}\n\n.tab-disabled {\n  pointer-events: none;\n}\n\n.tab-disabled > * {\n  opacity: .4;\n}\n\n.tab-button-text,\n.tab-button-icon {\n  display: none;\n  overflow: hidden;\n  align-self: center;\n  min-width: 26px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.has-icon .tab-button-icon,\n.has-title .tab-button-text {\n  display: block;\n}\n\n.has-title-only .tab-button-text {\n  white-space: normal;\n}\n\n.layout-icon-start ion-tab-button {\n  flex-direction: row;\n}\n\n.layout-icon-end ion-tab-button {\n  flex-direction: row-reverse;\n}\n\n.layout-icon-bottom ion-tab-button {\n  flex-direction: column-reverse;\n}\n\n.layout-icon-start ion-tab-button,\n.layout-icon-end ion-tab-button,\n.layout-icon-hide ion-tab-button,\n.layout-title-hide ion-tab-button {\n  justify-content: center;\n}\n\n.tab-hidden,\n.layout-icon-hide .tab-button-icon,\n.layout-title-hide .tab-button-text {\n  display: none;\n}\n\n.tab-badge {\n  right: 4%;\n  top: 6%;\n  right: calc(50% - 50px);\n  padding: 1px 6px;\n  position: absolute;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.has-icon .tab-badge {\n  right: calc(50% - 30px);\n}\n\n.layout-icon-bottom .tab-badge,\n.layout-icon-start .tab-badge,\n.layout-icon-end .tab-badge {\n  right: calc(50% - 50px);\n}\n\nion-tab-highlight {\n  left: 0;\n  bottom: 0;\n  transform-origin: 0 0;\n  position: absolute;\n  display: block;\n  width: 1px;\n  height: 2px;\n  transform: translateZ(0);\n}\n\nion-tab-highlight.animated {\n  transition-duration: 300ms;\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n\n.placement-top > ion-tab-highlight {\n  bottom: 0;\n}\n\n.placement-bottom > ion-tab-highlight {\n  top: 0;\n}\n\n.tabbar-ios {\n  justify-content: center;\n  height: 50px;\n  border-top: 0.55px solid rgba(0, 0, 0, 0.2);\n  background: #f8f8f8;\n  contain: strict;\n}\n\n.tabbar-ios.placement-top {\n  border-top: 0;\n  border-bottom: 0.55px solid rgba(0, 0, 0, 0.2);\n}\n\n.tabbar-ios > ion-tab-highlight {\n  background: #488aff;\n}\n\n.tabbar-ios > ion-tab-button {\n  padding: 0 2px;\n  max-width: 240px;\n  min-height: 100%;\n  font-size: 10px;\n  color: #8c8c8c;\n  fill: #8c8c8c;\n}\n\n.tabbar-ios ion-tab-button:hover:not(.disable-hover),\n.tabbar-ios .tab-selected {\n  color: #488aff;\n  fill: #488aff;\n}\n\n.tabbar-ios .tab-button-text {\n  margin-top: 0;\n  margin-bottom: 1px;\n  min-height: 11px;\n}\n\n.tabbar-ios .has-title-only .tab-button-text {\n  font-size: 12px;\n}\n\n.tabbar-ios .tab-button-icon {\n  margin-top: 4px;\n  margin-bottom: 1px;\n  min-width: 35px;\n  height: 30px;\n  font-size: 30px;\n}\n\n.tabbar-ios .tab-button-icon::before {\n  vertical-align: top;\n}\n\n.tabbar-ios.layout-icon-end .tab-button-text,\n.tabbar-ios.layout-icon-start .tab-button-text,\n.tabbar-ios.layout-icon-hide .tab-button-text,\n.tabbar-ios .has-title-only .tab-button-text {\n  margin: 2px 0;\n  font-size: 1.4rem;\n  line-height: 1.1;\n}\n\n.tabbar-ios.layout-icon-end ion-icon,\n.tabbar-ios.layout-icon-start ion-icon {\n  margin-top: 2px;\n  margin-bottom: 1px;\n  min-width: 24px;\n  height: 26px;\n  font-size: 24px;\n}\n\n.tabbar-ios.layout-title-hide ion-icon {\n  margin: 0;\n}\n\n.tabbar-translucent-ios {\n  background-color: rgba(248, 248, 248, 0.8);\n  -webkit-backdrop-filter: saturate(210%) blur(20px);\n  backdrop-filter: saturate(210%) blur(20px);\n}\n\n.tabbar-ios-primary {\n  border-color: #1569ff;\n  color: rgba(255, 255, 255, 0.7);\n  background-color: #488aff;\n  fill: rgba(255, 255, 255, 0.7);\n}\n\n.tabbar-ios-primary .tab-selected {\n  color: #fff;\n  fill: #fff;\n}\n\n.tabbar-translucent-ios-primary {\n  background-color: rgba(72, 138, 255, 0.8);\n}\n\n.tabbar-ios-secondary {\n  border-color: #21b94e;\n  color: rgba(255, 255, 255, 0.7);\n  background-color: #32db64;\n  fill: rgba(255, 255, 255, 0.7);\n}\n\n.tabbar-ios-secondary .tab-selected {\n  color: #fff;\n  fill: #fff;\n}\n\n.tabbar-translucent-ios-secondary {\n  background-color: rgba(50, 219, 100, 0.8);\n}\n\n.tabbar-ios-danger {\n  border-color: #f30d0d;\n  color: rgba(255, 255, 255, 0.7);\n  background-color: #f53d3d;\n  fill: rgba(255, 255, 255, 0.7);\n}\n\n.tabbar-ios-danger .tab-selected {\n  color: #fff;\n  fill: #fff;\n}\n\n.tabbar-translucent-ios-danger {\n  background-color: rgba(245, 61, 61, 0.8);\n}\n\n.tabbar-ios-light {\n  border-color: #dbdbdb;\n  color: rgba(0, 0, 0, 0.7);\n  background-color: #f4f4f4;\n  fill: rgba(0, 0, 0, 0.7);\n}\n\n.tabbar-ios-light .tab-selected {\n  color: #000;\n  fill: #000;\n}\n\n.tabbar-translucent-ios-light {\n  background-color: rgba(244, 244, 244, 0.8);\n}\n\n.tabbar-ios-dark {\n  border-color: #090909;\n  color: rgba(255, 255, 255, 0.7);\n  background-color: #222;\n  fill: rgba(255, 255, 255, 0.7);\n}\n\n.tabbar-ios-dark .tab-selected {\n  color: #fff;\n  fill: #fff;\n}\n\n.tabbar-translucent-ios-dark {\n  background-color: rgba(34, 34, 34, 0.8);\n}\nion-tabs.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-tab.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class Tab {
    constructor() {
        this.init = false;
        this.active = false;
        /**
         * @input {string} The badge color for the tab button.
         */
        this.badgeStyle = 'default';
        /**
         * @input {boolean} If true, enable the tab. If false,
         * the user cannot interact with this element.
         * Default: `true`.
         */
        this.enabled = true;
        /**
         * @input {boolean} If true, the tab button is visible within the
         * tabbar. Default: `true`.
         */
        this.show = true;
        /**
         * @input {boolean} If true, hide the tabs on child pages.
         */
        this.tabsHideOnSubPages = false;
        this.selected = false;
        this.nav = new Promise((resolve) => this.resolveNav = resolve);
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit(this.el);
        }
    }
    componentDidUpdate() {
        if (this.init && this.resolveNav) {
            const nav = this.el.querySelector('ion-nav');
            nav.componentOnReady(this.resolveNav);
            this.resolveNav = null;
        }
    }
    _setActive(shouldActive) {
        if (this.active === shouldActive) {
            return Promise.resolve();
        }
        this.active = shouldActive;
        this.selected = shouldActive;
        if (shouldActive) {
            this.init = true;
        }
        return this.nav;
    }
    getPath() {
        if (this.path != null) {
            return this.path;
        }
        if (this.title) {
            return this.title.toLowerCase();
        }
        return '';
    }
    goToRoot(opts = {}) {
        return this.nav.then(nav => nav && nav.setRoot(nav.root, null, opts));
    }
    getActive() {
        return this.nav.then(nav => nav && nav.getActive());
    }
    getNav() {
        return this.nav;
    }
    hostData() {
        const visible = this.active && this.selected;
        return {
            'aria-hidden': !visible ? 'true' : null,
            'aria-labelledby': this.btnId,
            'role': 'tabpanel',
            class: {
                'show-tab': this.active
            }
        };
    }
    render() {
        if (this.init) {
            return h("ion-nav", null,
                h("slot", null));
        }
        return null;
    }
}

class TabButton {
    constructor() {
        this.selected = false;
    }
    onClick(ev) {
        this.ionTabbarClick.emit(this.tab);
        ev.stopPropagation();
    }
    hostData() {
        const selected = this.selected;
        const tab = this.tab;
        const hasTitle = !!tab.title;
        const hasIcon = !!tab.icon;
        const hasTitleOnly = (hasTitle && !hasIcon);
        const hasIconOnly = (hasIcon && !hasTitle);
        const hasBadge = !!tab.badge;
        return {
            'role': 'tab',
            'id': tab.btnId,
            'aria-selected': selected,
            class: {
                'tab-selected': selected,
                'has-title': hasTitle,
                'has-icon': hasIcon,
                'has-title-only': hasTitleOnly,
                'has-icon-only': hasIconOnly,
                'has-badge': hasBadge,
                'tab-disabled': !tab.enabled,
                'tab-hidden': tab.hidden,
            }
        };
    }
    render() {
        const items = [];
        const tab = this.tab;
        if (tab.icon) {
            items.push(h("ion-icon", { class: 'tab-button-icon', name: tab.icon }));
        }
        if (tab.title) {
            items.push(h("span", { class: 'tab-button-text' }, tab.title));
        }
        if (tab.badge) {
            items.push(h("ion-badge", { class: 'tab-badge', color: tab.badgeStyle }, tab.badge));
        }
        items.push(h("div", { class: 'button-effect' }));
        return items;
    }
}

/** @hidden */








function getParentElement(elm) {
    if (elm.parentElement) {
        // normal element with a parent element
        return elm.parentElement;
    }
    if (elm.parentNode && elm.parentNode.host) {
        // shadow dom's document fragment
        return elm.parentNode.host;
    }
    return null;
}



/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */

/** @hidden */



/** @hidden */








/**
 * @private
 */

class TabHighlight {
    constructor() {
        this.animated = false;
        this.transform = '';
    }
    selectedTabChanged() {
        this.updateTransform();
    }
    onResize() {
        this.updateTransform();
    }
    componentDidLoad() {
        this.updateTransform();
    }
    updateTransform() {
        Context.dom.read(() => {
            const btn = this.getSelectedButton();
            this.transform = (btn)
                ? `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`
                : '';
            if (!this.animated) {
                setTimeout(() => this.animated = true, 80);
            }
        });
    }
    getSelectedButton() {
        const parent = getParentElement(this.el);
        if (!parent) {
            return null;
        }
        return Array.from(parent.querySelectorAll('ion-tab-button'))
            .find(btn => btn.selected);
    }
    hostData() {
        return {
            style: {
                'transform': this.transform
            },
            class: {
                'animated': this.animated,
            }
        };
    }
}

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    let classObj = {};
    return classes.split(' ')
        .reduce((classObj, classString) => {
        classObj[classString] = true;
        if (mode) {
            classObj[`${classString}-${mode}`] = true;
            if (color) {
                classObj[`${classString}-${color}`] = true;
                classObj[`${classString}-${mode}-${color}`] = true;
            }
        }
        return classObj;
    }, classObj);
}
/**
 * Get the classes from a class list and return them as an object
 */

class Tabbar {
    constructor() {
        this.hidden = false;
        this.placement = 'bottom';
        this.layout = 'icon-top';
        this.highlight = false;
        this.translucent = false;
    }
    onKeyboardWillHide() {
        setTimeout(() => this.hidden = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === 'bottom') {
            this.hidden = true;
        }
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'tabbar-translucent') : {};
        const layoutClass = `layout-${this.layout}`;
        const placementClass = `placement-${this.placement}`;
        const hostClasses = Object.assign({}, themedClasses, { 'tabbar-hidden': this.hidden, [layoutClass]: true, [placementClass]: true });
        return {
            role: 'tablist',
            class: hostClasses
        };
    }
    render() {
        const selectedTab = this.selectedTab;
        const dom = this.tabs.map(tab => (h("ion-tab-button", { tab: tab, selected: selectedTab === tab })));
        if (this.highlight) {
            dom.push(h("ion-tab-highlight", { selectedTab: selectedTab }));
        }
        return dom;
    }
}

class Tabs {
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

exports['ion-tab'] = Tab;
exports['ion-tab-button'] = TabButton;
exports['ion-tab-highlight'] = TabHighlight;
exports['ion-tabbar'] = Tabbar;
exports['ion-tabs'] = Tabs;
},


/***************** ion-tab *****************/
[
/** ion-tab: tag **/
"ion-tab",

/** ion-tab: members **/
[
  [ "_setActive", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "active", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "badge", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "badgeStyle", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "btnId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "getActive", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getNav", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getPath", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "goToRoot", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "icon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "init", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "path", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "root", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "rootParams", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "selected", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "show", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tabsHideOnSubPages", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "title", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-tab: host **/
{},

/** ion-tab: events **/
[
  [
    /*****  ion-tab ionSelect ***** /
    /* event name ***/ "ionSelect"
  ]
],

/** ion-tab: propWillChanges **/
0 /* no prop will change methods */,

/** ion-tab: propDidChanges **/
[
  [
    /*****  ion-tab prop did change [0] ***** /
    /* prop name **/ "selected",
    /* call fn *****/ "selectedChanged"
  ]
]

],

/***************** ion-tab-button *****************/
[
/** ion-tab-button: tag **/
"ion-tab-button",

/** ion-tab-button: members **/
[
  [ "selected", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tab", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-tab-button: host **/
{},

/** ion-tab-button: events **/
[
  [
    /*****  ion-tab-button ionTabbarClick ***** /
    /* event name ***/ "ionTabbarClick"
  ]
]

],

/***************** ion-tab-highlight *****************/
[
/** ion-tab-highlight: tag **/
"ion-tab-highlight",

/** ion-tab-highlight: members **/
[
  [ "animated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "selectedTab", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "transform", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-tab-highlight: host **/
{},

/** ion-tab-highlight: events **/
0 /* no events */,

/** ion-tab-highlight: propWillChanges **/
0 /* no prop will change methods */,

/** ion-tab-highlight: propDidChanges **/
[
  [
    /*****  ion-tab-highlight prop did change [0] ***** /
    /* prop name **/ "selectedTab",
    /* call fn *****/ "selectedTabChanged"
  ]
]

],

/***************** ion-tabbar *****************/
[
/** ion-tabbar: tag **/
"ion-tabbar",

/** ion-tabbar: members **/
[
  [ "hidden", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "highlight", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "layout", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placement", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "selectedTab", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "tabs", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-tabbar: host **/
{"theme":"tabbar"}

],

/***************** ion-tabs *****************/
[
/** ion-tabs: tag **/
"ion-tabs",

/** ion-tabs: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getByIndex", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getIndex", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getRoutes", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getSelected", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getState", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getTabs", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "select", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "selectedTab", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "setRouteId", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "tabbarHidden", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tabbarHighlight", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tabbarLayout", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "tabbarPlacement", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "tabs", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-tabs: host **/
{},

/** ion-tabs: events **/
[
  [
    /*****  ion-tabs ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-tabs ionNavChanged ***** /
    /* event name ***/ "ionNavChanged"
  ]
]

]
);