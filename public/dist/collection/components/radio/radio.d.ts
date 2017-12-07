import { BlurEvent, CheckedInputChangeEvent, FocusEvent, RadioButtonInput, StyleEvent } from '../../utils/input-interfaces';
import { ComponentDidLoad, ComponentDidUnload, ComponentWillLoad, EventEmitter } from '@stencil/core';
export declare class Radio implements RadioButtonInput, ComponentDidLoad, ComponentDidUnload, ComponentWillLoad {
    private didLoad;
    private inputId;
    private nativeInput;
    private styleTmr;
    keyFocus: boolean;
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
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    disabled: boolean;
    /**
     * @input {boolean} If true, the radio is selected. Defaults to `false`.
     */
    checked: boolean;
    /**
     * @input {string} the value of the radio.
     */
    value: string;
    /**
     * @output {RadioEvent} Emitted when the radio loads.
     */
    ionRadioDidLoad: EventEmitter;
    /**
     * @output {RadioEvent} Emitted when the radio unloads.
     */
    ionRadioDidUnload: EventEmitter;
    /**
     * @output {Event} Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    /**
     * @output {Event} Emitted when the radio button is selected.
     */
    ionSelect: EventEmitter<CheckedInputChangeEvent>;
    /**
     * @output {Event} Emitted when the radio button has focus.
     */
    ionFocus: EventEmitter<FocusEvent>;
    /**
     * @output {Event} Emitted when the radio button loses focus.
     */
    ionBlur: EventEmitter<BlurEvent>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    colorChanged(): void;
    checkedChanged(isChecked: boolean): void;
    disabledChanged(isDisabled: boolean): void;
    emitStyle(): void;
    onChange(): void;
    onKeyUp(): void;
    onFocus(): void;
    onBlur(): void;
    hostData(): any;
    render(): JSX.Element[];
}
export interface HTMLIonRadioElementEvent extends CustomEvent {
    target: HTMLIonRadioElement;
}
