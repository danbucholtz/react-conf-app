import { EventEmitter } from '@stencil/core';
export class RangeKnob {
    handleKeyBoard(ev) {
        const keyCode = ev.keyCode;
        if (keyCode === KEY_LEFT || keyCode === KEY_DOWN) {
            this.ionDecrease.emit({ isIncrease: false, knob: this.knob });
            ev.preventDefault();
            ev.stopPropagation();
        }
        else if (keyCode === KEY_RIGHT || keyCode === KEY_UP) {
            this.ionIncrease.emit({ isIncrease: true, knob: this.knob });
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    leftPos(val) {
        return `${val * 100}%`;
    }
    hostData() {
        return {
            class: {
                'range-knob-pressed': this.pressed,
                'range-knob-min': this.val === this.min || this.val === undefined,
                'range-knob-max': this.val === this.max
            },
            style: {
                'left': this.leftPos(this.ratio)
            },
            'role': 'slider',
            'tabindex': this.disabled ? -1 : 0,
            'aria-valuemin': this.min,
            'aria-valuemax': this.max,
            'aria-disabled': this.disabled,
            'aria-labelledby': this.labelId,
            'aria-valuenow': this.val
        };
    }
    render() {
        if (this.pin) {
            return [
                h("div", { class: 'range-pin', role: 'presentation' }, this.val),
                h("div", { class: 'range-knob', role: 'presentation' })
            ];
        }
        return h("div", { class: 'range-knob', role: 'presentation' });
    }
}
export const KEY_LEFT = 37;
export const KEY_UP = 38;
export const KEY_RIGHT = 39;
export const KEY_DOWN = 40;
