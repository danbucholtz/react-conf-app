import { EventEmitter } from '@stencil/core';
import { GestureDetail } from '../../index';
import { swipeShouldReset } from '../../utils/helpers';
import { ItemOptions } from '../item-options/item-options';
const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
export class ItemSliding {
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
