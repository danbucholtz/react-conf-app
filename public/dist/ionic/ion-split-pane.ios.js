/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-split-pane_ios",".split-pane {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  contain: strict;\n}\n\n.split-pane-visible > .split-pane-side,\n.split-pane-visible > .split-pane-main {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: relative;\n  z-index: 0;\n  flex: 1;\n  box-shadow: none !important;\n}\n\n.split-pane-visible > .split-pane-side {\n  flex-shrink: 0;\n  order: -1;\n}\n\n.split-pane-side:not(ion-menu) {\n  display: none;\n}\n\n.split-pane-visible > .split-pane-side {\n  display: flex;\n}\n\n.split-pane-visible > ion-menu.menu-enabled > .menu-inner {\n  left: 0;\n  right: 0;\n  width: auto;\n  box-shadow: none !important;\n  transform: none !important;\n}\n\n.split-pane-visible > ion-menu.menu-enabled > .ion-backdrop {\n  display: hidden !important;\n}\n\n.split-pane-visible > .split-pane-side[side=start] {\n  order: -1;\n}\n\n.split-pane-visible > .split-pane-side[side=end] {\n  order: 1;\n}\n\n.split-pane-visible > .split-pane-side[side=left] {\n  order: -1;\n}\n\n.split-pane-visible > .split-pane-side[side=right] {\n  order: 1;\n}\n\n.split-pane-ios.split-pane-visible > .split-pane-side {\n  min-width: 270px;\n  max-width: 28%;\n  border-right: 0.55px solid #c8c7cc;\n  border-left: 0;\n}\n\n.split-pane-ios.split-pane-visible > .split-pane-side[side=right] {\n  border-right: 0;\n  border-left: 0.55px solid #c8c7cc;\n}\nion-split-pane.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-split-pane.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

const SPLIT_PANE_MAIN = 'split-pane-main';
const SPLIT_PANE_SIDE = 'split-pane-side';
const QUERY = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
    'never': ''
};
class SplitPane {
    constructor() {
        this.visible = false;
        /**
         * @input {boolean} If `false`, the split-pane is disabled, ie. the side pane will
         * never be displayed. Default `true`.
         */
        this.enabled = true;
        /**
         * @input {string | boolean} When the split-pane should be shown.
         * Can be a CSS media query expression, or a shortcut expression.
         * Can also be a boolean expression.
         */
        this.when = QUERY['md'];
    }
    componentDidLoad() {
        this._styleChildren();
        this.whenChanged();
    }
    componentDidUnload() {
        this.rmL && this.rmL();
        this.rmL = null;
    }
    _styleChildren() {
        const children = this.el.children;
        const nu = this.el.childElementCount;
        let foundMain = false;
        for (var i = 0; i < nu; i++) {
            var child = children[i];
            var isMain = child.hasAttribute('main');
            if (isMain) {
                if (foundMain) {
                    console.warn('split pane can not have more than one main node');
                    return;
                }
                foundMain = true;
            }
            setPaneClass(child, isMain);
        }
        if (!foundMain) {
            console.warn('split pane could not found any main node');
        }
    }
    whenChanged() {
        this.rmL && this.rmL();
        this.rmL = null;
        // Check if the split-pane is disabled
        if (!this.enabled) {
            this._setVisible(false);
            return;
        }
        // When query is a boolean
        const query = this.when;
        if (typeof query === 'boolean') {
            this._setVisible(query);
            return;
        }
        // When query is a string, let's find first if it is a shortcut
        const defaultQuery = QUERY[query];
        const mediaQuery = (defaultQuery)
            ? defaultQuery
            : query;
        // Media query is empty or null, we hide it
        if (!mediaQuery || mediaQuery.length === 0) {
            this._setVisible(false);
            return;
        }
        // Listen on media query
        const callback = (q) => this._setVisible(q.matches);
        const mediaList = window.matchMedia(mediaQuery);
        mediaList.addListener(callback);
        this.rmL = () => mediaList.removeListener(callback);
        this._setVisible(mediaList.matches);
    }
    _setVisible(visible) {
        if (this.visible !== visible) {
            this.visible = visible;
            const detail = { splitPane: this };
            this.ionChange.emit(detail);
            this.ionSplitPaneDidChange.emit(detail);
        }
    }
    /**
     * @hidden
     */
    isVisible() {
        return this.visible;
    }
    isPane(element) {
        if (!this.visible) {
            return false;
        }
        return element.parentElement === this.el
            && element.classList.contains(SPLIT_PANE_SIDE);
    }
    hostData() {
        return {
            class: {
                'split-pane-visible': this.visible
            }
        };
    }
    render() {
        return h("slot", null);
    }
}
function setPaneClass(el, isMain) {
    let toAdd;
    let toRemove;
    if (isMain) {
        toAdd = SPLIT_PANE_MAIN;
        toRemove = SPLIT_PANE_SIDE;
    }
    else {
        toAdd = SPLIT_PANE_SIDE;
        toRemove = SPLIT_PANE_MAIN;
    }
    const classList = el.classList;
    classList.add(toAdd);
    classList.remove(toRemove);
}

exports['ion-split-pane'] = SplitPane;
},


/***************** ion-split-pane *****************/
[
/** ion-split-pane: tag **/
"ion-split-pane",

/** ion-split-pane: members **/
[
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "isVisible", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "visible", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "when", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-split-pane: host **/
{"theme":"split-pane"},

/** ion-split-pane: events **/
[
  [
    /*****  ion-split-pane ionSplitPaneDidChange ***** /
    /* event name ***/ "ionSplitPaneDidChange"
  ],
  [
    /*****  ion-split-pane ionChange ***** /
    /* event name ***/ "ionChange"
  ]
],

/** ion-split-pane: propWillChanges **/
0 /* no prop will change methods */,

/** ion-split-pane: propDidChanges **/
[
  [
    /*****  ion-split-pane prop did change [0] ***** /
    /* prop name **/ "when",
    /* call fn *****/ "whenChanged"
  ]
]

]
);