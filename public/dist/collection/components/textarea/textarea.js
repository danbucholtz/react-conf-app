import { EventEmitter } from '@stencil/core';
import { createThemedClasses } from '../../utils/theme';
import { TextareaComponent } from '../input/input-base';
export class Textarea {
    constructor() {
        /**
         * @input {string} Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Defaults to `"none"`.
         */
        this.autocapitalize = 'none';
        /**
         * @input {string} Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.
         */
        this.autocomplete = 'off';
        /**
         * @input {string} This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
         */
        this.autofocus = false;
        /**
         * @input {boolean} If true, the user cannot interact with the textarea. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * @input {boolean} If true, the user cannot modify the value. Defaults to `false`.
         */
        this.readonly = false;
        /**
         * @input {boolean} If true, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * @input {string} If true, the element will have its spelling and grammar checked. Defaults to `false`.
         */
        this.spellcheck = false;
    }
    /**
     * @hidden
     */
    disabledChanged() {
        this.emitStyle();
    }
    /**
     * @hidden
     * Update the native input element when the value changes
     */
    valueChanged() {
        const inputEl = this.el.querySelector('textarea');
        if (inputEl.value !== this.value) {
            inputEl.value = this.value;
        }
    }
    componentDidLoad() {
        this.emitStyle();
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        let styles = {
            'textarea': true,
            'input': true,
            'input-disabled': this.disabled,
            'input-has-value': this.hasValue(),
            'input-has-focus': this.hasFocus()
        };
        this.styleTmr = setTimeout(() => {
            this.ionStyle.emit(styles);
        });
    }
    /**
     * @hidden
     */
    clearTextInput() {
        this.value = '';
    }
    /**
     * @hidden
     */
    inputBlurred(ev) {
        this.ionBlur.emit(ev);
        this.focusChange(this.hasFocus());
        this.emitStyle();
    }
    /**
     * @hidden
     */
    inputChanged(ev) {
        this.value = ev.target && ev.target.value;
        this.emitStyle();
    }
    /**
     * @hidden
     */
    inputFocused(ev) {
        this.ionFocus.emit(ev);
        this.focusChange(this.hasFocus());
        this.emitStyle();
    }
    /**
     * @hidden
     */
    inputKeydown() {
        this.checkClearOnEdit();
    }
    /**
    * Check if we need to clear the text input if clearOnEdit is enabled
    * @hidden
    */
    checkClearOnEdit() {
        if (!this.clearOnEdit) {
            return;
        }
        // Did the input value change after it was blurred and edited?
        if (this.didBlurAfterEdit && this.hasValue()) {
            // Clear the input
            this.clearTextInput();
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
    }
    /**
     * @hidden
     */
    focusChange(inputHasFocus) {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (this.clearOnEdit && !inputHasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    }
    /**
     * @hidden
     */
    hasFocus() {
        // check if an input has focus or not
        return this.el && (this.el.querySelector(':focus') === this.el.querySelector('textarea'));
    }
    /**
     * @hidden
     */
    hasValue() {
        return (this.value !== null && this.value !== undefined && this.value !== '');
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'text-input');
        // TODO aria-labelledby={this.item.labelId}
        return (h("textarea", { autoCapitalize: this.autocapitalize, 
            // autoComplete={this.autocomplete}
            autoFocus: this.autofocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, class: themedClasses, onBlur: this.inputBlurred.bind(this), onInput: this.inputChanged.bind(this), onFocus: this.inputFocused.bind(this), onKeyDown: this.inputKeydown.bind(this) }, this.value));
    }
}
