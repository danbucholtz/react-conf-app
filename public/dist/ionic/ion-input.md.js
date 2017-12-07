/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-input_md","ion-input,\nion-textarea {\n  position: relative;\n  display: block;\n  flex: 1;\n  width: 100%;\n}\n\n.item-input ion-input,\n.item-input ion-textarea {\n  position: static;\n}\n\n.item.item-textarea {\n  align-items: stretch;\n}\n\n.text-input {\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  display: inline-block;\n  flex: 1;\n  width: 92%;\n  width: calc(100% - 10px);\n  border: 0;\n  background: transparent;\n}\n\n.text-input::-moz-placeholder {\n  color: #999;\n}\n\n.text-input:-ms-input-placeholder {\n  color: #999;\n}\n\n.text-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: #999;\n}\n\ntextarea.text-input {\n  display: block;\n}\n\n.text-input[disabled] {\n  opacity: .4;\n}\n\ninput.text-input:-webkit-autofill {\n  background-color: transparent;\n}\n\n.platform-mobile textarea.text-input {\n  resize: none;\n}\n\n.input-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.input[disabled] .input-cover {\n  pointer-events: none;\n}\n\n.item-input-has-focus .input-cover {\n  display: none;\n}\n\n.item-input-has-focus {\n  pointer-events: none;\n}\n\n.item-input-has-focus input,\n.item-input-has-focus textarea,\n.item-input-has-focus a,\n.item-input-has-focus button {\n  pointer-events: auto;\n}\n\n[next-input] {\n  padding: 0;\n  position: absolute;\n  bottom: 20px;\n  width: 1px;\n  height: 1px;\n  border: 0;\n  background: transparent;\n  pointer-events: none;\n}\n\n.text-input-clear-icon {\n  margin: 0;\n  padding: 0;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  display: none;\n  height: 100%;\n  background-repeat: no-repeat;\n}\n\n.item-input-has-focus.item-input-has-value .text-input-clear-icon {\n  display: block;\n}\n\n.text-input-md {\n  margin: 13px 8px;\n  padding: 0;\n  width: calc(100% - 8px - 8px);\n}\n\n.input-md .inset-input {\n  padding: 6.5px 8px;\n  margin: 6.5px 16px;\n}\n\n.item-md.item-input.item-input-has-focus .item-inner {\n  border-bottom-color: #488aff;\n  box-shadow: inset 0 -1px 0 0 #488aff;\n}\n\n.list-md .item-input.item-input-has-focus:last-child {\n  border-bottom-color: #488aff;\n  box-shadow: inset 0 -1px 0 0 #488aff;\n}\n\n.list-md .item-input.item-input-has-focus:last-child .item-inner {\n  box-shadow: none;\n}\n\n.item-md.item-input.ng-valid.item-input-has-value:not(.item-input-has-focus) .item-inner {\n  border-bottom-color: #32db64;\n  box-shadow: inset 0 -1px 0 0 #32db64;\n}\n\n.list-md .item-input.ng-valid.item-input-has-value:not(.item-input-has-focus):last-child {\n  border-bottom-color: #32db64;\n  box-shadow: inset 0 -1px 0 0 #32db64;\n}\n\n.list-md .item-input.ng-valid.item-input-has-value:not(.item-input-has-focus):last-child .item-inner {\n  box-shadow: none;\n}\n\n.item-md.item-input.ng-invalid.ng-touched:not(.item-input-has-focus) .item-inner {\n  border-bottom-color: #f53d3d;\n  box-shadow: inset 0 -1px 0 0 #f53d3d;\n}\n\n.list-md .item-input.ng-invalid.ng-touched:not(.item-input-has-focus):last-child {\n  border-bottom-color: #f53d3d;\n  box-shadow: inset 0 -1px 0 0 #f53d3d;\n}\n\n.list-md .item-input.ng-invalid.ng-touched:not(.item-input-has-focus):last-child .item-inner {\n  box-shadow: none;\n}\n\n.item-label-stacked .text-input-md,\n.item-label-floating .text-input-md {\n  margin-left: 0;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: calc(100% - 8px);\n}\n\n.item-label-stacked .select-md,\n.item-label-floating .select-md {\n  padding-left: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.input-md[clear-input] {\n  position: relative;\n}\n\n.input-md[clear-input] .text-input {\n  padding-right: 30px;\n}\n\n.input-md .text-input-clear-icon {\n  right: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='%235b5b5b'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");\n  width: 30px;\n  background-color: transparent;\n  background-size: 22px;\n}\nion-input.hydrated{visibility:inherit}","ion-textarea_md","\nion-textarea.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-input.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    let classObj = {};
    return classes.split(' ')
        .reduce((classObj, classString) => {
        classObj[classString] = true;
        if (mode) {
            classObj[`${classString}-${mode}`] = true;
            if (color) {
                classObj[`${classString}-${color}`] = true;
                classObj[`${classString}-${mode}-${color}`] = true;
            }
        }
        return classObj;
    }, classObj);
}
/**
 * Get the classes from a class list and return them as an object
 */

// Shared Interfaces

class Input {
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

class Textarea {
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

exports['ion-input'] = Input;
exports['ion-textarea'] = Textarea;
},


/***************** ion-input *****************/
[
/** ion-input: tag **/
"ion-input",

/** ion-input: members **/
[
  [ "accept", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocapitalize", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocomplete", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocorrect", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autofocus", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "checked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "clearInput", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "clearOnEdit", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "inputmode", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "max", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "maxlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "min", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "minlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "multiple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "pattern", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placeholder", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "readonly", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "required", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "results", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "size", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "spellcheck", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "step", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-input: host **/
{"theme":"input"},

/** ion-input: events **/
[
  [
    /*****  ion-input ionStyle ***** /
    /* event name ***/ "ionStyle"
  ],
  [
    /*****  ion-input ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-input ionFocus ***** /
    /* event name ***/ "ionFocus"
  ]
],

/** ion-input: propWillChanges **/
0 /* no prop will change methods */,

/** ion-input: propDidChanges **/
[
  [
    /*****  ion-input prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-input prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ],
  [
    /*****  ion-input prop did change [2] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-textarea *****************/
[
/** ion-textarea: tag **/
"ion-textarea",

/** ion-textarea: members **/
[
  [ "autocapitalize", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocomplete", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autofocus", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "clearOnEdit", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "cols", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "maxlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "minlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placeholder", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "readonly", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "required", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "rows", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "spellcheck", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "wrap", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-textarea: host **/
{"theme":"input"},

/** ion-textarea: events **/
[
  [
    /*****  ion-textarea ionStyle ***** /
    /* event name ***/ "ionStyle"
  ],
  [
    /*****  ion-textarea ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-textarea ionFocus ***** /
    /* event name ***/ "ionFocus"
  ]
],

/** ion-textarea: propWillChanges **/
0 /* no prop will change methods */,

/** ion-textarea: propDidChanges **/
[
  [
    /*****  ion-textarea prop did change [0] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ],
  [
    /*****  ion-textarea prop did change [1] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

]
);