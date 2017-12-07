import { BlurEvent, CheckboxInput, CheckedInputChangeEvent, FocusEvent, StyleEvent } from '../../utils/input-interfaces';
import { EventEmitter } from '@stencil/core';
export declare class Toggle implements CheckboxInput {
    private didLoad;
    private gestureConfig;
    private inputId;
    private nativeInput;
    private pivotX;
    private styleTmr;
    activated: boolean;
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
     * @input {boolean} If true, the toggle is selected. Defaults to `false`.
     */
    checked: boolean;
    disabled: boolean;
    /**
     * @input {string} the value of the toggle.
     */
    value: string;
    /**
     * @output {Event} Emitted when the value property has changed.
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
    constructor();
    componentWillLoad(): void;
    componentDidLoad(): void;
    checkedChanged(isChecked: boolean): void;
    disabledChanged(isDisabled: boolean): void;
    emitStyle(): void;
    private onDragStart(detail);
    private onDragMove(detail);
    private onDragEnd(detail);
    onChange(): void;
    onKeyUp(): void;
    onFocus(): void;
    onBlur(): void;
    hostData(): {
        class: {
            'toggle-activated': boolean;
            'toggle-checked': boolean;
            'toggle-disabled': boolean;
            'toggle-key': boolean;
        };
    };
    render(): JSX.Element[];
}
