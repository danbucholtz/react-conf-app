import { EventEmitter } from '@stencil/core';
import { Side } from '../../utils/helpers';
export declare class ItemOptions {
    private el;
    /**
     * @input {string} The side the option button should be on. Defaults to `"right"`.
     * If you have multiple `ion-item-options`, a side must be provided for each.
     */
    side: Side;
    /**
     * @output {Event} Emitted when the item has been fully swiped.
     */
    ionSwipe: EventEmitter;
    isRightSide(): boolean;
    width(): number;
    fireSwipeEvent(value: any): void;
    hostData(): {
        class: {
            'item-options-left': boolean;
            'item-options-right': boolean;
        };
    };
    render(): JSX.Element;
}
