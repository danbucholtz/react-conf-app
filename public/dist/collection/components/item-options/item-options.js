import { EventEmitter } from '@stencil/core';
import { Side, isRightSide } from '../../utils/helpers';
export class ItemOptions {
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
