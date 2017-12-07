import { EventEmitter } from '@stencil/core';
export class SelectOption {
    constructor() {
        /**
         * @input {boolean} If true, the user cannot interact with the select option.
         */
        this.disabled = false;
        /**
         * @input {boolean} If true, the element is selected.
         */
        this.selected = false;
    }
    getText() {
        return this.el.textContent || '';
    }
    render() {
        return h("slot", null);
    }
}
