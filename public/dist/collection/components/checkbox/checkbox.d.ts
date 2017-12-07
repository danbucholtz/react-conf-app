import { BlurEvent, CheckboxInput, CheckedInputChangeEvent, FocusEvent, StyleEvent } from '../../utils/input-interfaces';
import { EventEmitter } from '@stencil/core';
export declare class Checkbox implements CheckboxInput {
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
    /**
     * @input {boolean} If true, the checkbox is selected. Defaults to `false`.
     */
    checked: boolean;
    disabled: boolean;
    /**
     * @input {string} the value of the checkbox.
     */
    value: string;
    /**
     * @output {Event} Emitted when the checked property has changed.
     */
    ionChange: EventEmitter<CheckedInputChangeEvent>;
    /**
     * @output {Event} Emitted when the toggle has focus.
     */
    ionFocus: EventEmitter<FocusEvent>;
    /**
     * @output {Event} Emitted when the toggle loses focus.
     */
    ionBlur: EventEmitter<BlurEvent>;
    /**
     * @output {Event} Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    checkedChanged(isChecked: boolean): void;
    disabledChanged(isDisabled: boolean): void;
    emitStyle(): void;
    onChange(): void;
    onKeyUp(): void;
    onFocus(): void;
    onBlur(): void;
    hostData(): {
        class: {
            'checkbox-checked': boolean;
            'checkbox-disabled': boolean;
            'checkbox-key': boolean;
        };
    };
    render(): JSX.Element[];
}
