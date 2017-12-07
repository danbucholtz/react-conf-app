/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-range_ios",".range-ios {\n  padding: 8px 16px;\n}\n\n.range-ios [range-left] {\n  margin: 0 20px 0 0;\n}\n\n.range-ios [range-right] {\n  margin: 0 0 0 20px;\n}\n\n.range-ios.range-has-pin {\n  padding-top: 20px;\n}\n\n.range-ios .range-slider {\n  height: 42px;\n}\n\n.range-ios .range-bar {\n  left: 0;\n  top: 21px;\n  border-radius: 1px;\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: #bdbdbd;\n  pointer-events: none;\n}\n\n.range-ios.range-pressed .range-bar-active {\n  will-change: left, right;\n}\n\n.range-ios.range-pressed .range-knob-handle {\n  will-change: left;\n}\n\n.range-ios .range-bar-active {\n  bottom: 0;\n  width: auto;\n  background: #488aff;\n}\n\n.range-ios .range-knob-handle {\n  left: 0;\n  top: 21px;\n  margin-left: -21px;\n  margin-top: -21px;\n  text-align: center;\n  position: absolute;\n  width: 42px;\n  height: 42px;\n}\n\n.range-ios .range-knob {\n  left: 7px;\n  top: 7px;\n  border-radius: 50%;\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  background: #fff;\n  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);\n  pointer-events: none;\n}\n\n.range-ios .range-tick {\n  margin-left: -0.5px;\n  border-radius: 0;\n  position: absolute;\n  top: 17.5px;\n  width: 1px;\n  height: 8px;\n  background: #bdbdbd;\n  pointer-events: none;\n}\n\n.range-ios .range-tick-active {\n  background: #488aff;\n}\n\n.range-ios .range-pin {\n  text-align: center;\n  border-radius: 50px;\n  transform: translate3d(0,  28px,  0) scale(0.01);\n  padding: 8px;\n  position: relative;\n  top: -20px;\n  display: inline-block;\n  min-width: 28px;\n  font-size: 12px;\n  color: #000;\n  background: transparent;\n  transition: transform 120ms ease;\n}\n\n.range-ios .range-knob-pressed .range-pin {\n  transform: translate3d(0,  0,  0) scale(1);\n}\n\n.range-ios.range-disabled {\n  opacity: .5;\n}\n\n.range-ios-primary .range-bar-active,\n.range-ios-primary .range-tick-active {\n  background: #488aff;\n}\n\n.range-ios-secondary .range-bar-active,\n.range-ios-secondary .range-tick-active {\n  background: #32db64;\n}\n\n.range-ios-danger .range-bar-active,\n.range-ios-danger .range-tick-active {\n  background: #f53d3d;\n}\n\n.range-ios-light .range-bar-active,\n.range-ios-light .range-tick-active {\n  background: #f4f4f4;\n}\n\n.range-ios-dark .range-bar-active,\n.range-ios-dark .range-tick-active {\n  background: #222;\n}\nion-range.hydrated{visibility:inherit}","ion-range-knob_ios","\nion-range-knob.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-range.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

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

class Range {
    constructor() {
        this.activated = false;
        this.hasFocus = false;
        this.valA = 0;
        this.valB = 0;
        this.ratioA = 0;
        this.ratioB = 0;
        this.ticks = [];
        /**
         * @input {number} How long, in milliseconds, to wait to trigger the
         * `ionChange` event after each change in the range value. Default `0`.
         */
        this.debounce = 0;
        /*
         * @input {boolean} If true, the user cannot interact with the range. Default false.
         */
        this.disabled = false;
        /**
         * @input {boolean} Show two knobs. Defaults to `false`.
         */
        this.dualKnobs = false;
        /**
         * @input {number} Maximum integer value of the range. Defaults to `100`.
         */
        this.max = 100;
        /**
         * @input {number} Minimum integer value of the range. Defaults to `0`.
         */
        this.min = 0;
        /**
         * @input {boolean} If true, a pin with integer value is shown when the knob
         * is pressed. Defaults to `false`.
         */
        this.pin = false;
        /**
         * @input {boolean} If true, the knob snaps to tick marks evenly spaced based
         * on the step property value. Defaults to `false`.
         */
        this.snaps = false;
        /**
         * @input {number} Specifies the value granularity. Defaults to `1`.
         */
        this.step = 1;
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged(val) {
        setTimeout(() => this.ionChange.emit({ value: val }), this.debounce);
        this.emitStyle();
    }
    componentWillLoad() {
        this.inputUpdated();
        this.createTicks();
        this.emitStyle();
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(() => {
            this.ionStyle.emit({
                'range-disabled': this.disabled
            });
        });
    }
    fireBlur() {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.ionBlur.emit();
            this.emitStyle();
        }
    }
    fireFocus() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.ionFocus.emit();
            this.emitStyle();
        }
    }
    inputUpdated() {
        const val = this.value;
        if (this.dualKnobs) {
            this.valA = val.lower;
            this.valB = val.upper;
            this.ratioA = this.valueToRatio(val.lower);
            this.ratioB = this.valueToRatio(val.upper);
        }
        else {
            this.valA = val;
            this.ratioA = this.valueToRatio(val);
        }
        this.updateBar();
    }
    updateBar() {
        const ratioA = this.ratioA;
        const ratioB = this.ratioB;
        if (this.dualKnobs) {
            this.barL = `${Math.min(ratioA, ratioB) * 100}%`;
            this.barR = `${100 - Math.max(ratioA, ratioB) * 100}%`;
        }
        else {
            this.barL = '';
            this.barR = `${100 - ratioA * 100}%`;
        }
        this.updateTicks();
    }
    createTicks() {
        if (this.snaps) {
            for (let value = this.min; value <= this.max; value += this.step) {
                let ratio = this.valueToRatio(value);
                this.ticks.push({
                    ratio,
                    left: `${ratio * 100}%`
                });
            }
            this.updateTicks();
        }
    }
    updateTicks() {
        const ticks = this.ticks;
        const ratio = this.ratio;
        if (this.snaps && ticks) {
            if (this.dualKnobs) {
                let upperRatio = this.ratioUpper();
                ticks.forEach(t => {
                    t.active = t.ratio >= ratio && t.ratio <= upperRatio;
                });
            }
            else {
                ticks.forEach(t => {
                    t.active = t.ratio <= ratio;
                });
            }
        }
    }
    valueToRatio(value) {
        value = Math.round((value - this.min) / this.step) * this.step;
        value = value / (this.max - this.min);
        return clamp(0, value, 1);
    }
    ratioToValue(ratio) {
        ratio = Math.round((this.max - this.min) * ratio);
        ratio = Math.round(ratio / this.step) * this.step + this.min;
        return clamp(this.min, ratio, this.max);
    }
    inputNormalize(val) {
        if (this.dualKnobs) {
            return val;
        }
        else {
            val = parseFloat(val);
            return isNaN(val) ? undefined : val;
        }
    }
    update(current, rect, isPressed) {
        // figure out where the pointer is currently at
        // update the knob being interacted with
        let ratio = clamp(0, (current.x - rect.left) / rect.width, 1);
        let val = this.ratioToValue(ratio);
        if (this.snaps) {
            // snaps the ratio to the current value
            ratio = this.valueToRatio(val);
        }
        // update which knob is pressed
        this.pressed = isPressed;
        let valChanged = false;
        if (this.activeB) {
            // when the pointer down started it was determined
            // that knob B was the one they were interacting with
            this.pressedB = isPressed;
            this.pressedA = false;
            this.ratioB = ratio;
            valChanged = val === this.valB;
            this.valB = val;
        }
        else {
            // interacting with knob A
            this.pressedA = isPressed;
            this.pressedB = false;
            this.ratioA = ratio;
            valChanged = val === this.valA;
            this.valA = val;
        }
        this.updateBar();
        if (valChanged) {
            return false;
        }
        // value has been updated
        let value;
        if (this.dualKnobs) {
            // dual knobs have an lower and upper value
            value = {
                lower: Math.min(this.valA, this.valB),
                upper: Math.max(this.valA, this.valB)
            };
        }
        else {
            // single knob only has one value
            value = this.valA;
        }
        // Update input value
        this.value = value;
        return true;
    }
    /**
     * Returns the ratio of the knob's is current location, which is a number
     * between `0` and `1`. If two knobs are used, this property represents
     * the lower value.
     */
    ratio() {
        if (this.dualKnobs) {
            return Math.min(this.ratioA, this.ratioB);
        }
        return this.ratioA;
    }
    /**
     * Returns the ratio of the upper value's is current location, which is
     * a number between `0` and `1`. If there is only one knob, then this
     * will return `null`.
     */
    ratioUpper() {
        if (this.dualKnobs) {
            return Math.max(this.ratioA, this.ratioB);
        }
        return null;
    }
    keyChng(ev) {
        const step = this.step;
        if (ev.detail.knob === 'knobB') {
            if (!!ev.detail.isIncrease) {
                this.valB += step;
            }
            else {
                this.valB -= step;
            }
            this.valB = clamp(this.min, this.valB, this.max);
            this.ratioB = this.valueToRatio(this.valB);
        }
        else {
            if (!!ev.detail.isIncrease) {
                this.valA += step;
            }
            else {
                this.valA -= step;
            }
            this.valA = clamp(this.min, this.valA, this.max);
            this.ratioA = this.valueToRatio(this.valA);
        }
        this.updateBar();
    }
    onDragStart(detail) {
        if (this.disabled)
            return false;
        this.fireFocus();
        const current = { x: detail.currentX, y: detail.currentY };
        const el = this.el.querySelector('.range-slider');
        this.rect = el.getBoundingClientRect();
        const rect = this.rect;
        // figure out which knob they started closer to
        const ratio = clamp(0, (current.x - rect.left) / rect.width, 1);
        this.activeB =
            this.dualKnobs &&
                Math.abs(ratio - this.ratioA) > Math.abs(ratio - this.ratioB);
        // update the active knob's position
        this.update(current, rect, true);
        // return true so the pointer events
        // know everything's still valid
        return true;
    }
    onDragEnd(detail) {
        if (this.disabled) {
            return;
        }
        // update the active knob's position
        this.update({ x: detail.currentX, y: detail.currentY }, this.rect, false);
        // trigger ionBlur event
        this.fireBlur();
    }
    onDragMove(detail) {
        if (this.disabled) {
            return;
        }
        const current = { x: detail.currentX, y: detail.currentY };
        // update the active knob's position
        this.update(current, this.rect, true);
    }
    hostData() {
        return {
            class: {
                'range-disabled': this.disabled,
                'range-pressed': this.pressed,
                'range-has-pin': this.pin
            }
        };
    }
    render() {
        return [
            h("slot", { name: 'start' }),
            h("ion-gesture", Object.assign({}, {
                disableScroll: true,
                onStart: this.onDragStart.bind(this),
                onMove: this.onDragMove.bind(this),
                onEnd: this.onDragEnd.bind(this),
                enabled: !this.disabled,
                gestureName: 'range',
                gesturePriority: 30,
                type: 'pan',
                direction: 'x',
                threshold: 0
            }),
                h("div", { class: 'range-slider' },
                    this.ticks.map(t => h("div", { style: { left: t.left }, role: 'presentation', class: { 'range-tick': true, 'range-tick-active': t.active } })),
                    h("div", { class: 'range-bar', role: 'presentation' }),
                    h("div", { class: 'range-bar range-bar-active', style: {
                            left: this.barL,
                            right: this.barR
                        }, role: 'presentation' }),
                    h("ion-range-knob", { class: 'range-knob-handle', knob: 'knobA', pressed: this.pressedA, ratio: this.ratioA, val: this.valA, pin: this.pin, min: this.min, max: this.max }),
                    this.dualKnobs
                        ? h("ion-range-knob", { class: 'range-knob-handle', knob: 'knobB', pressed: this.pressedB, ratio: this.ratioB, val: this.valB, pin: this.pin, min: this.min, max: this.max })
                        : null)),
            h("slot", { name: 'end' })
        ];
    }
}

class RangeKnob {
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
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

exports['ion-range'] = Range;
exports['ion-range-knob'] = RangeKnob;
},


/***************** ion-range *****************/
[
/** ion-range: tag **/
"ion-range",

/** ion-range: members **/
[
  [ "activeB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "barL", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "barR", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "debounce", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "dualKnobs", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "max", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "min", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "pin", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "pressed", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "pressedA", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "pressedB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratio", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratioA", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratioB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratioUpper", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "rect", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "snaps", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "step", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "ticks", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "valA", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "valB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-range: host **/
{"theme":"range"},

/** ion-range: events **/
[
  [
    /*****  ion-range ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-range ionStyle ***** /
    /* event name ***/ "ionStyle"
  ],
  [
    /*****  ion-range ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-range ionBlur ***** /
    /* event name ***/ "ionBlur"
  ]
],

/** ion-range: propWillChanges **/
0 /* no prop will change methods */,

/** ion-range: propDidChanges **/
[
  [
    /*****  ion-range prop did change [0] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ],
  [
    /*****  ion-range prop did change [1] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-range-knob *****************/
[
/** ion-range-knob: tag **/
"ion-range-knob",

/** ion-range-knob: members **/
[
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "knob", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "labelId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "max", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "min", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "pin", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "pressed", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "ratio", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "val", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ]
],

/** ion-range-knob: host **/
{},

/** ion-range-knob: events **/
[
  [
    /*****  ion-range-knob ionIncrease ***** /
    /* event name ***/ "ionIncrease"
  ],
  [
    /*****  ion-range-knob ionDecrease ***** /
    /* event name ***/ "ionDecrease"
  ]
]

]
);