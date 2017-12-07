import { EventEmitter } from '@stencil/core';
export class Segment {
    constructor() {
        /*
         * @input {boolean} If true, the user cannot interact with the segment. Default false.
         */
        this.disabled = false;
    }
    valueChanged(val) {
        this.selectButton(val);
    }
    componentDidLoad() {
        this.buttons = this.el.querySelectorAll('ion-segment-button');
        for (var i = 0; i < this.buttons.length; i++) {
            const button = this.buttons[i];
            button.activated = (button.value === this.value);
            // If there is no value set on the segment and a button
            // is checked we should activate it
            if (!this.value && button.checked) {
                button.activated = button.checked;
            }
        }
    }
    segmentClick(ev) {
        let selectedButton = ev.detail.segmentButton;
        this.value = selectedButton.value;
        this.selectButton(this.value);
        // TODO should this move to valueChanged
        this.ionChange.emit({ segment: this });
    }
    selectButton(val) {
        for (var i = 0; i < this.buttons.length; i++) {
            const button = this.buttons[i];
            button.activated = (button.value === val);
        }
        // returning true tells the renderer to queue an update
        return true;
    }
    hostData() {
        return {
            class: {
                'segment-disabled': this.disabled
            }
        };
    }
    render() {
        return h("slot", null);
    }
}
