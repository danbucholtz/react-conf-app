/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-reorder",".reorder[slot] {\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n}\n\n.reorder[slot=\"start\"] {\n  order: -1;\n}\n\n.reorder.no-hide {\n  display: block;\n  visibility: normal;\n}\n\n.reorder:not(.no-hide) {\n  display: none;\n  pointer-events: all;\n  touch-action: manipulation;\n}\n\n.reorder-enabled .reorder {\n  display: block;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.reorder-selected,\n.reorder-selected .reorder {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.reorder-selected {\n  position: relative;\n  z-index: 100;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  opacity: .8;\n  transition: none !important;\n}\n\n.reorder-icon {\n  transform: translate3d(160%,  0,  0);\n  display: block;\n  font-size: 1.3em;\n  transition: transform 140ms ease-in;\n}\n\n.reorder-icon svg {\n  min-width: 1em;\n}\n\n.item-ios .reorder-icon {\n  font-size: 2em;\n  fill: currentColor;\n  opacity: .4;\n}\n\n.reorder[slot=\"start\"] .reorder-icon {\n  transform: translate3d(-160%,  0,  0);\n}\n\n.reorder-visible .reorder .reorder-icon {\n  transform: translate3d(0,  0,  0);\n}\nion-reorder.hydrated{visibility:inherit}","ion-reorder-group",".reorder-group > ion-gesture {\n  display: block;\n}\n\n.reorder-list-active ion-gesture > * {\n  transition: transform 300ms;\n  will-change: transform;\n}\nion-reorder-group.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-reorder",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class Reorder {
    constructor() {
        this.hasContent = null;
    }
    componentDidLoad() {
        this.hasContent = this.el.childElementCount > 0;
    }
    render() {
        // TODO: https://github.com/ionic-team/stencil/issues/171
        if (this.hasContent === true) {
            return h("slot", null);
        }
        else if (this.hasContent === false) {
            return h("ion-icon", { class: 'reorder-icon', name: 'reorder' });
        }
        else {
            return undefined;
        }
    }
}

function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}










/** @hidden */












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

const _engine = window.TapticEngine;
/**
 * Check to see if the Haptic Plugin is available
 * @return {boolean} Returns true or false if the plugin is available
 *
 */

/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
function hapticSelectionStart() {
    _engine && _engine.gestureSelectionStart();
}
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
function hapticSelectionChanged() {
    _engine && _engine.gestureSelectionChanged();
}
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
function hapticSelectionEnd() {
    _engine && _engine.gestureSelectionEnd();
}
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ type: 'success' }` (or `warning`/`error`)
 */

/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */

var CSS_PROP = function (docEle) {
    var css = {};
    // transform
    var i;
    var keys = ['webkitTransform', '-webkit-transform', 'webkit-transform', 'transform'];
    for (i = 0; i < keys.length; i++) {
        if (docEle.style[keys[i]] !== undefined) {
            css.transformProp = keys[i];
            break;
        }
    }
    // transition
    keys = ['webkitTransition', 'transition'];
    for (i = 0; i < keys.length; i++) {
        if (docEle.style[keys[i]] !== undefined) {
            css.transitionProp = keys[i];
            break;
        }
    }
    // The only prefix we care about is webkit for transitions.
    var prefix = css.transitionProp.indexOf('webkit') > -1 ? '-webkit-' : '';
    // transition duration
    css.transitionDurationProp = prefix + 'transition-duration';
    // transition timing function
    css.transitionTimingFnProp = prefix + 'transition-timing-function';
    return css;
}(document.documentElement);

const AUTO_SCROLL_MARGIN = 60;
const SCROLL_JUMP = 10;
const ITEM_REORDER_SELECTED = 'reorder-selected';

class ReorderGroup {
    constructor() {
        this.selectedItemEl = null;
        this.cachedHeights = [];
        this._enabled = false;
        this._iconVisible = false;
        this._actived = false;
        this.enabled = false;
    }
    /**
     * @input {string} Which side of the view the ion-reorder should be placed. Default `"end"`.
     */
    enabledChanged(enabled) {
        if (enabled) {
            this._enabled = true;
            Context.dom.raf(() => {
                this._iconVisible = true;
            });
        }
        else {
            this._iconVisible = false;
            setTimeout(() => this._enabled = false, 400);
        }
    }
    componentDidLoad() {
        this.containerEl = this.el.querySelector('ion-gesture');
        this.scrollEl = this.el.closest('ion-scroll');
    }
    componentDidUnload() {
        this.onDragEnd();
    }
    canStart(ev) {
        if (this.selectedItemEl) {
            return false;
        }
        const target = ev.event.target;
        const reorderEl = target.closest('ion-reorder');
        if (!reorderEl) {
            return false;
        }
        const item = findReorderItem(reorderEl, this.containerEl);
        if (!item) {
            console.error('reorder node not found');
            return false;
        }
        ev.data = item;
        return true;
    }
    onDragStart(ev) {
        if (ev.event) {
            ev.event.preventDefault();
            ev.event.stopPropagation();
        }
        const item = this.selectedItemEl = ev.data;
        const heights = this.cachedHeights;
        heights.length = 0;
        const el = this.containerEl;
        const children = el.children;
        if (!children || children.length === 0) {
            return;
        }
        let sum = 0;
        for (var i = 0, ilen = children.length; i < ilen; i++) {
            var child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
        }
        const box = this.containerEl.getBoundingClientRect();
        this.containerTop = box.top;
        this.containerBottom = box.bottom;
        if (this.scrollEl) {
            var scrollBox = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
            this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
        }
        else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
        }
        this.lastToIndex = indexForItem(item);
        this.selectedItemHeight = item.offsetHeight;
        this._actived = true;
        item.classList.add(ITEM_REORDER_SELECTED);
        hapticSelectionStart();
    }
    onDragMove(ev) {
        const selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        // Scroll if we reach the scroll margins
        const scroll = this.autoscroll(ev.currentY);
        // // Get coordinate
        const top = this.containerTop - scroll;
        const bottom = this.containerBottom - scroll;
        const currentY = clamp(top, ev.currentY, bottom);
        const deltaY = scroll + currentY - ev.startY;
        const normalizedY = currentY - top;
        const toIndex = this.itemIndexForTop(normalizedY);
        if (toIndex !== undefined && (toIndex !== this.lastToIndex)) {
            let fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            hapticSelectionChanged();
            this._reorderMove(fromIndex, toIndex);
        }
        // Update selected item position
        selectedItem.style[CSS_PROP.transformProp] = `translateY(${deltaY}px)`;
    }
    onDragEnd() {
        this._actived = false;
        const selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        const children = this.containerEl.children;
        const toIndex = this.lastToIndex;
        const fromIndex = indexForItem(selectedItem);
        const ref = (fromIndex < toIndex)
            ? children[toIndex + 1]
            : children[toIndex];
        this.containerEl.insertBefore(this.selectedItemEl, ref);
        const len = children.length;
        const transform = CSS_PROP.transformProp;
        for (let i = 0; i < len; i++) {
            children[i].style[transform] = '';
        }
        const reorderInactive = () => {
            this.selectedItemEl.style.transition = '';
            this.selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
            this.selectedItemEl = null;
        };
        if (toIndex === fromIndex) {
            selectedItem.style.transition = 'transform 200ms ease-in-out';
            setTimeout(reorderInactive, 200);
        }
        else {
            reorderInactive();
        }
        hapticSelectionEnd();
    }
    itemIndexForTop(deltaY) {
        const heights = this.cachedHeights;
        let i = 0;
        // TODO: since heights is a sorted array of integers, we can do
        // speed up the search using binary search. Remember that linear-search is still
        // faster than binary-search for small arrays (<64) due CPU branch misprediction.
        for (i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
                break;
            }
        }
        return i;
    }
    /********* DOM WRITE ********* */
    _reorderMove(fromIndex, toIndex) {
        const itemHeight = this.selectedItemHeight;
        const children = this.containerEl.children;
        const transform = CSS_PROP.transformProp;
        for (var i = 0; i < children.length; i++) {
            var style = children[i].style;
            var value = '';
            if (i > fromIndex && i <= toIndex) {
                value = `translateY(${-itemHeight}px)`;
            }
            else if (i < fromIndex && i >= toIndex) {
                value = `translateY(${itemHeight}px)`;
            }
            style[transform] = value;
        }
    }
    autoscroll(posY) {
        if (!this.scrollEl) {
            return 0;
        }
        let amount = 0;
        if (posY < this.scrollElTop) {
            amount = -SCROLL_JUMP;
        }
        else if (posY > this.scrollElBottom) {
            amount = SCROLL_JUMP;
        }
        if (amount !== 0) {
            this.scrollEl.scrollBy(0, amount);
        }
        return this.scrollEl.scrollTop - this.scrollElInitial;
    }
    hostData() {
        return {
            class: {
                'reorder-enabled': this._enabled,
                'reorder-list-active': this._actived,
                'reorder-visible': this._iconVisible
            }
        };
    }
    render() {
        return (h("ion-gesture", Object.assign({}, {
            disableScroll: true,
            canStart: this.canStart.bind(this),
            onStart: this.onDragStart.bind(this),
            onMove: this.onDragMove.bind(this),
            onEnd: this.onDragEnd.bind(this),
            enabled: this.enabled,
            gestureName: 'reorder',
            gesturePriority: 30,
            type: 'pan',
            direction: 'y',
            threshold: 0,
            attachTo: 'body'
        }),
            h("slot", null)));
    }
}
/**
 * @hidden
 */
function indexForItem(element) {
    return element['$ionIndex'];
}
/**
 * @hidden
 */
function findReorderItem(node, container) {
    let nested = 0;
    let parent;
    while (node && nested < 6) {
        parent = node.parentNode;
        if (parent === container) {
            return node;
        }
        node = parent;
        nested++;
    }
    return null;
}

exports['ion-reorder'] = Reorder;
exports['ion-reorder-group'] = ReorderGroup;
},


/***************** ion-reorder *****************/
[
/** ion-reorder: tag **/
"ion-reorder",

/** ion-reorder: members **/
[
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "hasContent", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-reorder: host **/
{"theme":"reorder"}

],

/***************** ion-reorder-group *****************/
[
/** ion-reorder-group: tag **/
"ion-reorder-group",

/** ion-reorder-group: members **/
[
  [ "_actived", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "_enabled", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "_iconVisible", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-reorder-group: host **/
{"theme":"reorder-group"},

/** ion-reorder-group: events **/
0 /* no events */,

/** ion-reorder-group: propWillChanges **/
0 /* no prop will change methods */,

/** ion-reorder-group: propDidChanges **/
[
  [
    /*****  ion-reorder-group prop did change [0] ***** /
    /* prop name **/ "enabled",
    /* call fn *****/ "enabledChanged"
  ]
]

]
);