import { EventEmitter } from '@stencil/core';
import { CssClassMap } from '../../index';
import { createThemedClasses, getElementClassObject } from '../../utils/theme';
export class SegmentButton {
    constructor() {
        this.activated = false;
        /**
         * @input {boolean} If true, the segment button is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * @input {boolean} If true, the user cannot interact with the segment button. Default false.
         */
        this.disabled = false;
    }
    segmentButtonClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log('in segment button click');
        this.emitClick();
    }
    /**
     * Emit the click event to the parent segment
     */
    emitClick() {
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(() => {
            this.ionClick.emit({ segmentButton: this });
        });
    }
    /**
     * @hidden
     * Get the classes for the segment button state
     */
    getElementClassList() {
        let classList = [].concat(this.disabled ? 'segment-button-disabled' : [], this.activated ? 'segment-activated' : []);
        return classList;
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'segment-button');
        const hostClasses = getElementClassObject(this.el.classList);
        const elementClasses = []
            .concat(this.getElementClassList())
            .reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
        const buttonClasses = Object.assign({}, themedClasses, hostClasses, elementClasses);
        return [
            h("button", { onClick: this.segmentButtonClick.bind(this), class: buttonClasses, "aria-pressed": this.activated },
                h("slot", null))
        ];
    }
}
