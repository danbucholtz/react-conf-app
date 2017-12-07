import { EventEmitter } from '@stencil/core';
import { TextareaComponent } from '../input/input-base';
export declare class Textarea implements TextareaComponent {
    mode: string;
    color: string;
    didBlurAfterEdit: boolean;
    styleTmr: number;
    private el;
    /**
     * @output {Event} Emitted when the styles change.
     */
    ionStyle: EventEmitter;
    /**
     * @output {Event} Emitted when the input loses focus.
     */
    ionBlur: EventEmitter;
    /**
     * @output {Event} Emitted when the input has focus.
     */
    ionFocus: EventEmitter;
    /**
     * @input {string} Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Defaults to `"none"`.
     */
    autocapitalize: string;
    /**
     * @input {string} Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.
     */
    autocomplete: string;
    /**
     * @input {string} This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
     */
    autofocus: boolean;
    /**
     * @input {boolean} If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
     */
    clearOnEdit: boolean;
    /**
     * @input {boolean} If true, the user cannot interact with the textarea. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * @hidden
     */
    protected disabledChanged(): void;
    /**
     * @input {number} If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    maxlength: number;
    /**
     * @input {number} If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    minlength: number;
    /**
     * @input {string} The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * @input {string} Instructional text that shows before the input has a value.
     */
    placeholder: string;
    /**
     * @input {boolean} If true, the user cannot modify the value. Defaults to `false`.
     */
    readonly: boolean;
    /**
     * @input {boolean} If true, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * @input {string} If true, the element will have its spelling and grammar checked. Defaults to `false`.
     */
    spellcheck: boolean;
    /**
     * @input {number} The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
     */
    cols: number;
    /**
     * @input {number} The number of visible text lines for the control.
     */
    rows: number;
    /**
     * @input {string} Indicates how the control wraps text. Possible values are: `"hard"`, `"soft"`, `"off"`.
     */
    wrap: string;
    /**
     * @input {string} The value of the textarea.
     */
    value: string;
    /**
     * @hidden
     * Update the native input element when the value changes
     */
    protected valueChanged(): void;
    componentDidLoad(): void;
    private emitStyle();
    /**
     * @hidden
     */
    clearTextInput(): void;
    /**
     * @hidden
     */
    inputBlurred(ev: any): void;
    /**
     * @hidden
     */
    inputChanged(ev: any): void;
    /**
     * @hidden
     */
    inputFocused(ev: any): void;
    /**
     * @hidden
     */
    inputKeydown(): void;
    /**
    * Check if we need to clear the text input if clearOnEdit is enabled
    * @hidden
    */
    checkClearOnEdit(): void;
    /**
     * @hidden
     */
    focusChange(inputHasFocus: boolean): void;
    /**
     * @hidden
     */
    hasFocus(): boolean;
    /**
     * @hidden
     */
    hasValue(): boolean;
    render(): JSX.Element;
}
