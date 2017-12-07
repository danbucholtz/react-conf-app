/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-checkbox_md","ion-checkbox {\n  position: relative;\n  display: inline-block;\n}\n\nion-checkbox input {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.checkbox-md .checkbox-icon {\n  border-radius: 2px;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #787878;\n  background-color: #fff;\n  transition-duration: 280ms;\n  transition-property: background;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.checkbox-md .checkbox-checked {\n  border-color: #488aff;\n  background-color: #488aff;\n}\n\n.checkbox-md .checkbox-checked .checkbox-inner {\n  left: 4px;\n  top: 0;\n  position: absolute;\n  width: 5px;\n  height: 10px;\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\n.checkbox-md.checkbox-disabled,\n.item-md.item-checkbox-disabled ion-label {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.checkbox-key .checkbox-icon::after {\n  border-radius: 50%;\n  left: -12px;\n  top: -12px;\n  position: absolute;\n  display: block;\n  width: 36px;\n  height: 36px;\n  background: #86a8df;\n  content: \"\";\n  opacity: .3;\n}\n\n.item.item-md .checkbox-md {\n  margin: 9px 36px 9px 4px;\n  position: static;\n  display: block;\n}\n\n.item.item-md .checkbox-md[slot=\"end\"] {\n  margin: 11px 10px 10px 0;\n}\n\n.checkbox-md + .item-inner ion-label {\n  margin-left: 0;\n}\n\n.checkbox-md-primary .checkbox-checked {\n  border-color: #488aff;\n  background-color: #488aff;\n}\n\n.checkbox-md-primary .checkbox-checked .checkbox-inner {\n  border-color: #fff;\n}\n\n.checkbox-md-secondary .checkbox-checked {\n  border-color: #32db64;\n  background-color: #32db64;\n}\n\n.checkbox-md-secondary .checkbox-checked .checkbox-inner {\n  border-color: #fff;\n}\n\n.checkbox-md-danger .checkbox-checked {\n  border-color: #f53d3d;\n  background-color: #f53d3d;\n}\n\n.checkbox-md-danger .checkbox-checked .checkbox-inner {\n  border-color: #fff;\n}\n\n.checkbox-md-light .checkbox-checked {\n  border-color: #f4f4f4;\n  background-color: #f4f4f4;\n}\n\n.checkbox-md-light .checkbox-checked .checkbox-inner {\n  border-color: #000;\n}\n\n.checkbox-md-dark .checkbox-checked {\n  border-color: #222;\n  background-color: #222;\n}\n\n.checkbox-md-dark .checkbox-checked .checkbox-inner {\n  border-color: #fff;\n}\nion-checkbox.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-checkbox.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class Checkbox {
    constructor() {
        /**
         * @input {boolean} If true, the checkbox is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * @input {boolean} If true, the user cannot interact with the checkbox. Default false.
         */
        this.disabled = false;
    }
    componentWillLoad() {
        this.inputId = 'ion-cb-' + (checkboxIds++);
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.nativeInput.checked = this.checked;
        this.didLoad = true;
        const parentItem = this.nativeInput.closest('ion-item');
        if (parentItem) {
            const itemLabel = parentItem.querySelector('ion-label');
            if (itemLabel) {
                itemLabel.id = this.inputId + '-lbl';
                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
            }
        }
    }
    checkedChanged(isChecked) {
        if (this.nativeInput.checked !== isChecked) {
            // keep the checked value and native input `nync
            this.nativeInput.checked = isChecked;
        }
        if (this.didLoad) {
            this.ionChange.emit({
                checked: isChecked,
                value: this.value
            });
        }
        this.emitStyle();
    }
    disabledChanged(isDisabled) {
        this.nativeInput.disabled = isDisabled;
        this.emitStyle();
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(() => {
            this.ionStyle.emit({
                'checkbox-disabled': this.disabled,
                'checkbox-checked': this.checked,
            });
        });
    }
    onChange() {
        this.checked = !this.checked;
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    hostData() {
        return {
            class: {
                'checkbox-checked': this.checked,
                'checkbox-disabled': this.disabled,
                'checkbox-key': this.keyFocus
            }
        };
    }
    render() {
        const checkboxClasses = {
            'checkbox-icon': true,
            'checkbox-checked': this.checked
        };
        return [
            h("div", { class: checkboxClasses },
                h("div", { class: 'checkbox-inner' })),
            h("input", { type: 'checkbox', onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r })
        ];
    }
}
let checkboxIds = 0;

exports['ion-checkbox'] = Checkbox;
},


/***************** ion-checkbox *****************/
[
/** ion-checkbox: tag **/
"ion-checkbox",

/** ion-checkbox: members **/
[
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "keyFocus", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-checkbox: host **/
{"theme":"checkbox"},

/** ion-checkbox: events **/
[
  [
    /*****  ion-checkbox ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-checkbox ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-checkbox ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-checkbox ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-checkbox: propWillChanges **/
0 /* no prop will change methods */,

/** ion-checkbox: propDidChanges **/
[
  [
    /*****  ion-checkbox prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-checkbox prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

]
);