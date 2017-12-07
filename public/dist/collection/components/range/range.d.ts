import { EventEmitter } from '@stencil/core';
import { BaseInputComponent, GestureDetail } from '../../index';
export declare class Range implements BaseInputComponent {
    private styleTmr;
    activated: boolean;
    hasFocus: boolean;
    startX: number;
    private el;
    barL: string;
    barR: string;
    valA: number;
    valB: number;
    ratioA: number;
    ratioB: number;
    ticks: any[];
    activeB: boolean;
    rect: ClientRect;
    pressed: boolean;
    pressedA: boolean;
    pressedB: boolean;
    /**
     * @output {Event} Emitted when the value property has changed.
     */
    ionChange: EventEmitter;
    /**
     * @output {Event} Emitted when the styles change.
     */
    ionStyle: EventEmitter;
    /**
     * @output {Event} Emitted when the range has focus.
     */
    ionFocus: EventEmitter;
    /**
     * @output {Event} Emitted when the range loses focus.
     */
    ionBlur: EventEmitter;
    /**
     * @input {string} The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    color: string;
    /**
     * @input {string} The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     * For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
     */
    mode: 'ios' | 'md';
    /**
     * @input {number} How long, in milliseconds, to wait to trigger the
     * `ionChange` event after each change in the range value. Default `0`.
     */
    debounce: number;
    disabled: boolean;
    /**
     * @input {boolean} Show two knobs. Defaults to `false`.
     */
    dualKnobs: boolean;
    /**
     * @input {number} Maximum integer value of the range. Defaults to `100`.
     */
    max: number;
    /**
     * @input {number} Minimum integer value of the range. Defaults to `0`.
     */
    min: number;
    /**
     * @input {boolean} If true, a pin with integer value is shown when the knob
     * is pressed. Defaults to `false`.
     */
    pin: boolean;
    /**
     * @input {boolean} If true, the knob snaps to tick marks evenly spaced based
     * on the step property value. Defaults to `false`.
     */
    snaps: boolean;
    /**
     * @input {number} Specifies the value granularity. Defaults to `1`.
     */
    step: number;
    /**
     * @input {string} the value of the range.
     */
    value: any;
    protected disabledChanged(): void;
    protected valueChanged(val: boolean): void;
    componentWillLoad(): void;
    private emitStyle();
    fireBlur(): void;
    fireFocus(): void;
    inputUpdated(): void;
    updateBar(): void;
    createTicks(): void;
    updateTicks(): void;
    valueToRatio(value: number): number;
    ratioToValue(ratio: number): number;
    inputNormalize(val: any): any;
    update(current: {
        x?: number;
        y?: number;
    }, rect: ClientRect, isPressed: boolean): boolean;
    /**
     * Returns the ratio of the knob's is current location, which is a number
     * between `0` and `1`. If two knobs are used, this property represents
     * the lower value.
     */
    ratio(): number;
    /**
     * Returns the ratio of the upper value's is current location, which is
     * a number between `0` and `1`. If there is only one knob, then this
     * will return `null`.
     */
    ratioUpper(): number;
    keyChng(ev: RangeEvent): void;
    onDragStart(detail: GestureDetail): boolean;
    onDragEnd(detail: GestureDetail): void;
    onDragMove(detail: GestureDetail): void;
    hostData(): {
        class: {
            'range-disabled': boolean;
            'range-pressed': boolean;
            'range-has-pin': boolean;
        };
    };
    render(): JSX.Element[];
}
export interface RangeEvent extends Event {
    detail: {
        isIncrease: boolean;
        knob: string;
    };
}
