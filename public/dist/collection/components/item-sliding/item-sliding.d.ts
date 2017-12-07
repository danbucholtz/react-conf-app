import { EventEmitter } from '@stencil/core';
export declare const enum ItemSide {
    None = 0,
    Left = 1,
    Right = 2,
    Both = 3,
}
export declare const enum SlidingState {
    Disabled = 2,
    Enabled = 4,
    Right = 8,
    Left = 16,
    SwipeRight = 32,
    SwipeLeft = 64,
}
export declare class ItemSliding {
    private item;
    private list;
    private openAmount;
    private initialOpenAmount;
    private optsWidthRightSide;
    private optsWidthLeftSide;
    private sides;
    private tmr;
    private leftOptions;
    private rightOptions;
    private optsDirty;
    private gestureOptions;
    private el;
    state: SlidingState;
    /**
     * @output {Event} Emitted when the sliding position changes.
     * It reports the relative position.
     *
     * ```ts
     * onDrag(slidingItem) {
     *   let percent = slidingItem.getSlidingPercent();
     *   if (percent > 0) {
     *     // positive
     *     console.log('right side');
     *   } else {
     *     // negative
     *     console.log('left side');
     *   }
     *   if (Math.abs(percent) > 1) {
     *     console.log('overscroll');
     *   }
     * }
     * ```
     *
     */
    ionDrag: EventEmitter;
    constructor();
    componentDidLoad(): void;
    componentDidUnload(): void;
    getOpenAmount(): number;
    getSlidingPercent(): number;
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
    close(): void;
    closeOpened(): boolean;
    private updateOptions();
    private canStart();
    private onDragStart();
    private onDragMove(gesture);
    private onDragEnd(gesture);
    private calculateOptsWidth();
    private setOpenAmount(openAmount, isFinal);
    hostData(): {
        class: {
            'item-wrapper': boolean;
            'active-slide': boolean;
            'active-options-right': boolean;
            'active-options-left': boolean;
            'active-swipe-right': boolean;
            'active-swipe-left': boolean;
        };
    };
    render(): JSX.Element;
}
