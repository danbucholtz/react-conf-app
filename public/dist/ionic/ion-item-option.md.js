/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-item-option_md","\nion-item-option.hydrated{visibility:inherit}","ion-item-options_md","\nion-item-options.hydrated{visibility:inherit}","ion-item-sliding_md","ion-item-sliding {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n}\n\nion-item-options {\n  position: absolute;\n  z-index: 1;\n  display: none;\n  height: 100%;\n  font-size: 14px;\n  visibility: hidden;\n  top: 0;\n  right: 0;\n  justify-content: flex-end;\n}\n\nion-item-options[side=left] {\n  right: auto;\n  left: 0;\n  justify-content: flex-start;\n}\n\nion-item-option {\n  padding: 0 0.7em;\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-width: 6rem;\n}\n\n.item-option-button {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n  position: absolute;\n  border: 0;\n  background: none;\n}\n\nion-item-options:not([icon-start]) ion-item-option:not([icon-only]) .button-inner {\n  flex-direction: column;\n}\n\nion-item-sliding.active-slide ion-item,\nion-item-sliding.active-slide ion-item.activated {\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  pointer-events: none;\n  will-change: transform;\n}\n\nion-item-sliding.active-slide ion-item-options {\n  display: flex;\n}\n\nion-item-sliding.active-slide.active-options-left ion-item-options[side=left],\nion-item-sliding.active-slide.active-options-right ion-item-options:not([side=left]) {\n  width: 100%;\n  visibility: visible;\n}\n\nion-item-option[expandable] {\n  flex-shrink: 0;\n  transition-duration: 0;\n  transition-property: none;\n  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n\nion-item-sliding.active-swipe-right ion-item-option[expandable] {\n  transition-duration: .6s;\n  transition-property: padding-left;\n  padding-left: 90%;\n  order: 1;\n}\n\nion-item-sliding.active-swipe-left ion-item-option[expandable] {\n  transition-duration: .6s;\n  transition-property: padding-right;\n  padding-right: 90%;\n  order: -1;\n}\n\n.list-md ion-item-sliding {\n  background-color: #fff;\n}\n\n.list-md ion-item-options {\n  border-bottom: 1px solid #dedede;\n}\n\n.item-option-md {\n  font-size: 1.4rem;\n  color: #fff;\n  background-color: #488aff;\n}\n\n.item-option-md .icon {\n  fill: #fff;\n}\n\n.list-md[no-lines] ion-item-options {\n  border-width: 0;\n}\n\n.item-option-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.item-option-md-primary .icon {\n  fill: #fff;\n}\n\n.item-option-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.item-option-md-secondary .icon {\n  fill: #fff;\n}\n\n.item-option-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.item-option-md-danger .icon {\n  fill: #fff;\n}\n\n.item-option-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.item-option-md-light .icon {\n  fill: #000;\n}\n\n.item-option-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.item-option-md-dark .icon {\n  fill: #fff;\n}\nion-item-sliding.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-item-option.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class ItemOption {
    constructor() {
        /**
         * @input {boolean} If true, sets the button into a disabled state.
         */
        this.disabled = false;
    }
    notCaptured() {
        // if (!clickedOptionButton(ev)) {
        //   this.closeOpened();
        // }
    }
    clickedOptionButton(ev) {
        let el = ev.target.closest('ion-item-option');
        return !!el;
    }
    render() {
        const TagType = this.href ? 'a' : 'button';
        return [
            h(TagType, { class: 'item-option-button', onClick: this.clickedOptionButton.bind(this), disabled: this.disabled }),
            h("span", { class: 'button-inner' },
                h("slot", null))
        ];
    }
}

// @stencil/core

/** @hidden */












/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */
function isRightSide(side, defaultRight = false) {
    const isRTL = document.dir === 'rtl';
    switch (side) {
        case 'right': return true;
        case 'left': return false;
        case 'end': return !isRTL;
        case 'start': return isRTL;
        default: return defaultRight ? !isRTL : isRTL;
    }
}
/** @hidden */
function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isCloseDirection, isMovingFast, isOnCloseZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isCloseDirection | isMovingFast | isOnCloseZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
}


/** @hidden */








/**
 * @private
 */

class ItemOptions {
    constructor() {
        /**
         * @input {string} The side the option button should be on. Defaults to `"right"`.
         * If you have multiple `ion-item-options`, a side must be provided for each.
         */
        this.side = 'right';
    }
    isRightSide() {
        return isRightSide(this.side, true);
    }
    width() {
        return this.el.offsetWidth;
    }
    fireSwipeEvent(value) {
        this.ionSwipe.emit(value);
    }
    hostData() {
        return {
            class: {
                'item-options-left': !this.isRightSide(),
                'item-options-right': this.isRightSide()
            }
        };
    }
    render() {
        return h("slot", null);
    }
}

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
class ItemSliding {
    constructor() {
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.tmr = null;
        this.optsDirty = true;
        this.state = 2 /* Disabled */;
        this.gestureOptions = {
            'canStart': this.canStart.bind(this),
            'onStart': this.onDragStart.bind(this),
            'onMove': this.onDragMove.bind(this),
            'onEnd': this.onDragEnd.bind(this),
            'gestureName': 'item-swipe',
            'gesturePriority': -10,
            'type': 'pan',
            'direction': 'x',
            'maxAngle': 20,
            'threshold': 5,
            'attachTo': 'parent'
        };
    }
    componentDidLoad() {
        this.item = this.el.querySelector('ion-item');
        this.list = this.el.closest('ion-list');
        this.updateOptions();
    }
    componentDidUnload() {
        this.item = this.list = this.leftOptions = this.rightOptions = null;
    }
    getOpenAmount() {
        return this.openAmount;
    }
    getSlidingPercent() {
        const openAmount = this.openAmount;
        if (openAmount > 0) {
            return openAmount / this.optsWidthRightSide;
        }
        else if (openAmount < 0) {
            return openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    /**
     * Close the sliding item. Items can also be closed from the [List](../../list/List).
     *
     * The sliding item can be closed by grabbing a reference to `ItemSliding`. In the
     * below example, the template reference variable `slidingItem` is placed on the element
     * and passed to the `share` method.
     *
     * ```html
     * <ion-list>
     *   <ion-item-sliding #slidingItem>
     *     <ion-item>
     *       Item
     *     </ion-item>
     *     <ion-item-options>
     *       <ion-button (click)="share(slidingItem)">Share</ion-button>
     *     </ion-item-options>
     *   </ion-item-sliding>
     * </ion-list>
     * ```
     *
     * ```ts
     * import { Component } from '@angular/core';
     * import { ItemSliding } from 'ionic-angular';
     *
     * @Component({...})
     * export class MyClass {
     *   constructor() { }
     *
     *   share(slidingItem: ItemSliding) {
     *     slidingItem.close();
     *   }
     * }
     * ```
     */
    close() {
        this.setOpenAmount(0, true);
    }
    closeOpened() {
        return this.list && this.list.closeSlidingItems();
    }
    updateOptions() {
        const options = this.el.querySelectorAll('ion-item-options');
        let sides = 0;
        // Reset left and right options in case they were removed
        this.leftOptions = this.rightOptions = null;
        for (var i = 0; i < options.length; i++) {
            let option = options.item(i);
            if (option.isRightSide()) {
                this.rightOptions = option;
                sides |= 2 /* Right */;
            }
            else {
                this.leftOptions = option;
                sides |= 1 /* Left */;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart() {
        const selected = this.list && this.list.getOpenedItem();
        if (selected && selected !== this) {
            this.closeOpened();
            return false;
        }
        return true;
    }
    onDragStart() {
        this.list && this.list.setOpenedItem(this);
        if (this.tmr) {
            clearTimeout(this.tmr);
            this.tmr = null;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4 /* Enabled */;
        }
        this.initialOpenAmount = this.openAmount;
        this.item.style.transition = 'none';
    }
    onDragMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2 /* Right */:
                openAmount = Math.max(0, openAmount);
                break;
            case 1 /* Left */:
                openAmount = Math.min(0, openAmount);
                break;
            case 3 /* Both */: break;
            case 0 /* None */: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onDragEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        this.setOpenAmount(restingPoint, true);
        if (this.state & 32 /* SwipeRight */) {
            this.rightOptions.fireSwipeEvent(this);
        }
        else if (this.state & 64 /* SwipeLeft */) {
            this.leftOptions.fireSwipeEvent(this);
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.optsWidthRightSide = this.rightOptions.width();
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.optsWidthLeftSide = this.leftOptions.width();
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr) {
            clearTimeout(this.tmr);
            this.tmr = null;
        }
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        else if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 /* Right */ | 32 /* SwipeRight */
                : 8 /* Right */;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 /* Left */ | 64 /* SwipeLeft */
                : 16 /* Left */;
        }
        if (openAmount === 0) {
            this.tmr = setTimeout(() => {
                this.state = 2 /* Disabled */;
                this.tmr = null;
            }, 600);
            this.list && this.list.setOpenedItem(null);
            style.transform = '';
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit(this);
    }
    hostData() {
        return {
            class: {
                'item-wrapper': true,
                'active-slide': (this.state !== 2 /* Disabled */),
                'active-options-right': !!(this.state & 8 /* Right */),
                'active-options-left': !!(this.state & 16 /* Left */),
                'active-swipe-right': !!(this.state & 32 /* SwipeRight */),
                'active-swipe-left': !!(this.state & 64 /* SwipeLeft */)
            }
        };
    }
    render() {
        return (h("ion-gesture", Object.assign({}, this.gestureOptions),
            h("slot", null)));
    }
}

exports['ion-item-option'] = ItemOption;
exports['ion-item-options'] = ItemOptions;
exports['ion-item-sliding'] = ItemSliding;
},


/***************** ion-item-option *****************/
[
/** ion-item-option: tag **/
"ion-item-option",

/** ion-item-option: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "href", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-item-option: host **/
{"theme":"item-option"}

],

/***************** ion-item-options *****************/
[
/** ion-item-options: tag **/
"ion-item-options",

/** ion-item-options: members **/
[
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "fireSwipeEvent", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "isRightSide", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "side", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "width", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-item-options: host **/
{},

/** ion-item-options: events **/
[
  [
    /*****  ion-item-options ionSwipe ***** /
    /* event name ***/ "ionSwipe"
  ]
]

],

/***************** ion-item-sliding *****************/
[
/** ion-item-sliding: tag **/
"ion-item-sliding",

/** ion-item-sliding: members **/
[
  [ "close", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "closeOpened", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getOpenAmount", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getSlidingPercent", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "state", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-item-sliding: host **/
{},

/** ion-item-sliding: events **/
[
  [
    /*****  ion-item-sliding ionDrag ***** /
    /* event name ***/ "ionDrag"
  ]
]

]
);