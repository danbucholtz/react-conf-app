import { EventEmitter } from '@stencil/core';
import { createThemedClasses } from '../../utils/theme';
import { InputComponent } from './input-base';
export class Input {
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
         * @input {string} Whether autocorrection should be enabled when the user is entering/editing the text value. Defaults to `"off"`.
         */
        this.autocorrect = 'off';
        /**
         * @input {string} This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
         */
        this.autofocus = false;
        /**
         * @input {boolean} If true and the type is `checkbox` or `radio`, the control is selected by default. Defaults to `false`.
         */
        this.checked = false;
        /**
         * @input {boolean} If true, a clear icon will appear in the input when there is a value. Clicking it clears the input. Defaults to `false`.
         */
        this.clearInput = false;
        /**
         * @input {boolean} If true, the user cannot interact with the input. Defaults to `false`.
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
        /**
         * @input {string} The type of control to display. The default type is text. Possible values are: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, or `"url"`.
         */
        this.type = 'text';
    }
    /**
     * @hidden
     */
    checkedChanged() {
        this.emitStyle();
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
        const inputEl = this.el.querySelector('input');
        if (inputEl.value !== this.value) {
            inputEl.value = this.value;
        }
    }
    componentDidLoad() {
        this.emitStyle();
        // By default, password inputs clear after focus when they have content
        if (this.type === 'password' && this.clearOnEdit !== false) {
            this.clearOnEdit = true;
        }
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        let styles = {
            'input': true,
            'input-checked': this.checked,
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
    focusChange(inputHasFocus) {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (this.clearOnEdit && !inputHasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
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
    clearTextInput() {
        this.value = '';
    }
    /**
     * @hidden
     */
    hasFocus() {
        // check if an input has focus or not
        return this.el && (this.el.querySelector(':focus') === this.el.querySelector('input'));
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
        return [
            h("input", { "aria-disabled": this.disabled ? 'true' : false, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, checked: this.checked, disabled: this.disabled, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder, results: this.results, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: this.value, class: themedClasses, onBlur: this.inputBlurred.bind(this), onInput: this.inputChanged.bind(this), onFocus: this.inputFocused.bind(this), onKeyDown: this.inputKeydown.bind(this) }),
            h("button", { hidden: this.clearInput !== true, class: 'text-input-clear-icon', onClick: this.clearTextInput.bind(this), onMouseDown: this.clearTextInput.bind(this) })
        ];
    }
}
