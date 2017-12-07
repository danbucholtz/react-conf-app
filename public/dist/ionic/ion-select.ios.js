/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-select_ios","ion-select {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  max-width: 45%;\n}\n\n.select-text {\n  overflow: hidden;\n  flex: 1;\n  min-width: 16px;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.item-multiple-inputs ion-select {\n  position: relative;\n}\n\n.select-disabled,\n.item-select-disabled ion-label {\n  opacity: .4;\n  pointer-events: none;\n}\n\n.select-popover ion-list {\n  margin: -1px 0;\n}\n\n.select-option {\n  display: none;\n}\n\n.select-ios {\n  padding: 11px 8px 11px 16px;\n}\n\n.select-ios .select-placeholder {\n  color: #999;\n}\n\n.select-ios .select-icon {\n  position: relative;\n  width: 12px;\n  height: 18px;\n}\n\n.select-ios .select-icon .select-icon-inner {\n  left: 5px;\n  top: 50%;\n  margin-top: -2px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 5px solid;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  color: #999;\n  pointer-events: none;\n}\nion-select.hydrated{visibility:inherit}","ion-select-option_ios","\nion-select-option.hydrated{visibility:inherit}","ion-select-popover_ios","\nion-select-popover.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-select.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

/** @hidden */
function isCheckedProperty(a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}











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
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}







/**
 * @private
 */

/**
 * Create the mode and color classes for the component based on the classes passed in
 */

/**
 * Get the classes from a class list and return them as an object
 */

class SelectOption {
    constructor() {
        /**
         * @input {boolean} If true, the user cannot interact with the select option.
         */
        this.disabled = false;
        /**
         * @input {boolean} If true, the element is selected.
         */
        this.selected = false;
    }
    getText() {
        return this.el.textContent || '';
    }
    render() {
        return h("slot", null);
    }
}

class Select {
    constructor() {
        // TODO rename this
        this.texts = [];
        this.options = [];
        /**
         * @input {boolean} If true, the user cannot interact with the select. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * @input {string} The text to display on the cancel button. Default: `Cancel`.
         */
        this.cancelText = 'Cancel';
        /**
         * @input {string} The text to display on the ok button. Default: `OK`.
         */
        this.okText = 'OK';
        /**
         * @input {any} Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
         * [PopoverController API docs](../../popover/PopoverController/#create) for the
         * create options for each interface.
         */
        this.selectOptions = {};
        /**
         * @input {string} The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.
         */
        this.interface = 'alert';
    }
    valueChanged() {
        this.optionUpdated();
    }
    componentDidLoad() {
        // Get the nearest label
        this.label = this.el.closest('ion-item').querySelector('ion-label');
        this.setOptions();
    }
    setOptions() {
        // Get the options
        const options = this.el.querySelectorAll('ion-select-option');
        Array.from(options).forEach(option => {
            if (!option.value) {
                option.value = option.getText();
            }
            this.options.push(option);
        });
        const values = this.getValues();
        if (values.length === 0) {
            // there are no values set at this point
            // so check to see who should be selected
            let filtered = this.options.filter(o => o.selected).map(o => o.value);
            this.value = filtered;
        }
        else {
            this.optionUpdated();
        }
    }
    /**
     * @hidden
     * Update the select options when the value changes
     */
    optionUpdated() {
        this.texts = [];
        if (this.options) {
            this.options.forEach(option => {
                // check this option if the option's value is in the values array
                option.selected = this.getValues().some(selectValue => {
                    return isCheckedProperty(selectValue, option.value);
                });
                if (option.selected) {
                    this.texts.push(option.getText());
                }
            });
        }
        this.text = this.texts.join(', ');
    }
    /**
     * @hidden
     */
    getValues() {
        if (!this.value) {
            return [];
        }
        const values = Array.isArray(this.value) ? this.value : [this.value];
        return values;
    }
    /**
     * Close the select interface.
     */
    close() {
        // TODO check !this.overlay || !this.isFocus()
        if (!this.overlay) {
            return;
        }
        return this.overlay.dismiss();
    }
    /**
     * @hidden
     */
    getText() {
        return (this.multiple ? this.texts : this.texts.join());
    }
    /**
     * @hidden
     */
    resetInterface(ev) {
        let selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn('Interface cannot be "' + selectInterface + '" with a multi-value select. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Interface cannot be "' + selectInterface + '" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        return selectInterface;
    }
    buildAlert(selectOptions) {
        console.debug('Build Select: Alert with', selectOptions, this.options);
        // user cannot provide inputs from selectOptions
        // alert inputs must be created by ionic from ion-select-options
        selectOptions.inputs = this.options.map((option) => {
            return {
                type: (this.multiple ? 'checkbox' : 'radio'),
                label: option.getText(),
                value: option.value,
                checked: option.selected,
                disabled: option.disabled,
                handler: (selectedOption) => {
                    // Only emit the select event if it is being checked
                    // For multi selects this won't emit when unchecking
                    if (selectedOption.checked) {
                        option.ionSelect.emit(option.value);
                    }
                }
            };
        });
        // If multiple is true use checkboxes, else use radio buttons
        var selectCssClass = 'select-alert ' + this.multiple ? 'multiple-select-alert' : 'single-select-alert';
        // If the user passed a cssClass for the select, add it
        selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
        // Add an ok button to the alert
        selectOptions.buttons = selectOptions.buttons.concat({
            text: this.okText,
            handler: (selectedValues) => this.value = selectedValues
        });
        // create the alert instance from our built up selectOptions
        const alertOptions = Object.assign({ cssClass: selectCssClass }, selectOptions);
        console.debug('Built Select: Alert with', alertOptions);
        return this.alertCtrl.create(alertOptions);
    }
    buildActionSheet(selectOptions) {
        console.debug('Building Select: Action Sheet with', selectOptions, this.options);
        selectOptions.buttons = selectOptions.buttons.concat(this.options.map((option) => {
            return {
                role: (option.selected ? 'selected' : ''),
                text: option.getText(),
                handler: () => {
                    this.value = option.value;
                    option.ionSelect.emit(option.value);
                }
            };
        }));
        var selectCssClass = 'select-action-sheet';
        // If the user passed a cssClass for the select, add it
        selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
        const actionSheetOptions = Object.assign({ cssClass: selectCssClass }, selectOptions);
        console.debug('Built Select: Action Sheet with', actionSheetOptions);
        return this.actionSheetCtrl.create(actionSheetOptions);
    }
    buildPopover(selectOptions) {
        console.debug('Building Select: Popover with', selectOptions, this.options);
        selectOptions = this.options.map((option) => {
            return {
                text: option.getText(),
                checked: option.selected,
                disabled: option.disabled,
                value: option.value,
                handler: () => {
                    this.value = option.value;
                    option.ionSelect.emit(option.value);
                }
            };
        });
        var selectCssClass = 'select-popover';
        // If the user passed a cssClass for the select, add it
        selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
        const popoverOptions = {
            component: 'ion-select-popover',
            componentProps: {
                options: selectOptions
            },
            cssClass: selectCssClass,
            ev: event
        };
        console.debug('Built Select: Popover with', popoverOptions);
        return this.popoverCtrl.create(popoverOptions);
    }
    open(ev) {
        // the user may have assigned some options specifically for the alert
        const selectOptions = deepCopy(this.selectOptions);
        // make sure their buttons array is removed from the options
        // and we create a new array for the alert's two buttons
        selectOptions.buttons = [{
                text: this.cancelText,
                role: 'cancel',
                handler: () => {
                    this.ionCancel.emit(this);
                }
            }];
        // if the selectOptions didn't provide a title then use the label's text
        if (!selectOptions.title && this.label) {
            selectOptions.title = this.label.getText();
        }
        // If the user passed in an invalid interface we need to reset it to alert
        let selectInterface = this.resetInterface(ev);
        let controller;
        if (selectInterface === 'action-sheet') {
            controller = this.buildActionSheet(selectOptions);
        }
        else if (selectInterface === 'popover') {
            controller = this.buildPopover(selectOptions);
        }
        else {
            controller = this.buildAlert(selectOptions);
        }
        controller.then((component) => {
            component.present();
            // component.onDidDismiss(() => {
            //   this.overlay = undefined;
            // })
            // this.overlay = component;
        });
    }
    hostData() {
        return {
            class: {
                'select-disabled': this.disabled
            }
        };
    }
    render() {
        let addPlaceholderClass = false;
        // If selected text has been passed in, use that first
        let selectText = this.selectedText || this.text;
        if (!selectText && this.placeholder) {
            selectText = this.placeholder;
            addPlaceholderClass = true;
        }
        const selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        return [
            h("div", { class: selectTextClasses }, selectText),
            h("div", { class: 'select-icon' },
                h("div", { class: 'select-icon-inner' })),
            h("button", { "aria-haspopup": 'true', id: this.selectId, "aria-labelledby": this.labelId, "aria-disabled": this.disabled ? 'true' : false, onClick: this.open.bind(this), class: 'item-cover' })
        ];
    }
}

class SelectPopover {
    onChange(ev) {
        this.value = ev.detail.value;
    }
    // public get value() {
    //   let checkedOption = this.options.find(option => option.checked);
    //   return checkedOption ? checkedOption.value : undefined;
    // }
    dismiss(value) {
        this.ionDismiss.emit(value);
    }
    valueChanged(value) {
        let checkedOption = this.options.find(option => option.value === value);
        if (checkedOption && checkedOption.handler) {
            checkedOption.handler();
        }
        this.dismiss(value);
    }
    render() {
        return (h("ion-list", { "no-lines": this.mode === 'md' },
            h("ion-radio-group", { value: this.value }, this.options.map(option => h("ion-item", null,
                h("ion-label", null, option.text),
                h("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled }))))));
    }
}

exports['ion-select'] = Select;
exports['ion-select-option'] = SelectOption;
exports['ion-select-popover'] = SelectPopover;
},


/***************** ion-select *****************/
[
/** ion-select: tag **/
"ion-select",

/** ion-select: members **/
[
  [ "actionSheetCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-action-sheet-controller" ],
  [ "alertCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-alert-controller" ],
  [ "cancelText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "interface", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "multiple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "okText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placeholder", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "popoverCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-popover-controller" ],
  [ "selectedText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "selectOptions", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "text", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-select: host **/
{"theme":"select"},

/** ion-select: events **/
[
  [
    /*****  ion-select ionCancel ***** /
    /* event name ***/ "ionCancel"
  ]
],

/** ion-select: propWillChanges **/
0 /* no prop will change methods */,

/** ion-select: propDidChanges **/
[
  [
    /*****  ion-select prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-select-option *****************/
[
/** ion-select-option: tag **/
"ion-select-option",

/** ion-select-option: members **/
[
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getText", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "selected", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "value", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-select-option: host **/
{"theme":"select-option"},

/** ion-select-option: events **/
[
  [
    /*****  ion-select-option ionSelect ***** /
    /* event name ***/ "ionSelect"
  ]
]

],

/***************** ion-select-popover *****************/
[
/** ion-select-popover: tag **/
"ion-select-popover",

/** ion-select-popover: members **/
[
  [ "options", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-select-popover: host **/
{"theme":"select-popover"},

/** ion-select-popover: events **/
[
  [
    /*****  ion-select-popover ionDismiss ***** /
    /* event name ***/ "ionDismiss"
  ]
],

/** ion-select-popover: propWillChanges **/
0 /* no prop will change methods */,

/** ion-select-popover: propDidChanges **/
[
  [
    /*****  ion-select-popover prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

]
);