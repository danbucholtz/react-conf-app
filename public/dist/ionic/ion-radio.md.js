/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-radio_md","ion-radio {\n  position: relative;\n  display: inline-block;\n}\n\nion-radio input {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.radio-md .radio-icon {\n  left: 0;\n  top: 0;\n  margin: 0;\n  border-radius: 50%;\n  position: relative;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #787878;\n}\n\n.radio-md .radio-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background-color: #488aff;\n  transform: scale3d(0, 0, 0);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.radio-md .radio-checked {\n  border-color: #488aff;\n}\n\n.radio-md .radio-checked .radio-inner {\n  transform: scale3d(1, 1, 1);\n}\n\n.radio-md.radio-disabled,\n.item-md.item-radio-disabled ion-label {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.radio-key .radio-icon::after {\n  border-radius: 50%;\n  left: -12px;\n  top: -12px;\n  position: absolute;\n  display: block;\n  width: 36px;\n  height: 36px;\n  background: #86a8df;\n  content: \"\";\n  opacity: .3;\n}\n\n.item-md .radio-md {\n  margin: 9px 10px 9px 0;\n  position: static;\n  display: block;\n}\n\n.item-md .radio-md[slot=\"start\"] {\n  margin: 11px 36px 10px 4px;\n}\n\n.item-radio.item-md ion-label {\n  margin-left: 0;\n}\n\n.item-radio-checked.item-md ion-label {\n  color: #488aff;\n}\n\n.item-radio-md-primary.item-radio-checked ion-label {\n  color: #488aff;\n}\n\n.radio-md-primary .radio-checked {\n  border-color: #488aff;\n}\n\n.radio-md-primary .radio-inner {\n  background-color: #488aff;\n}\n\n.item-radio-md-secondary.item-radio-checked ion-label {\n  color: #32db64;\n}\n\n.radio-md-secondary .radio-checked {\n  border-color: #32db64;\n}\n\n.radio-md-secondary .radio-inner {\n  background-color: #32db64;\n}\n\n.item-radio-md-danger.item-radio-checked ion-label {\n  color: #f53d3d;\n}\n\n.radio-md-danger .radio-checked {\n  border-color: #f53d3d;\n}\n\n.radio-md-danger .radio-inner {\n  background-color: #f53d3d;\n}\n\n.item-radio-md-light.item-radio-checked ion-label {\n  color: #f4f4f4;\n}\n\n.radio-md-light .radio-checked {\n  border-color: #f4f4f4;\n}\n\n.radio-md-light .radio-inner {\n  background-color: #f4f4f4;\n}\n\n.item-radio-md-dark.item-radio-checked ion-label {\n  color: #222;\n}\n\n.radio-md-dark .radio-checked {\n  border-color: #222;\n}\n\n.radio-md-dark .radio-inner {\n  background-color: #222;\n}\nion-radio.hydrated{visibility:inherit}","ion-radio-group_md","\nion-radio-group.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-radio.md",

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

class Radio {
    constructor() {
        /*
         * @input {boolean} If true, the user cannot interact with the radio. Default false.
         */
        this.disabled = false;
        /**
         * @input {boolean} If true, the radio is selected. Defaults to `false`.
         */
        this.checked = false;
    }
    componentWillLoad() {
        this.inputId = 'ion-rb-' + (radioButtonIds++);
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.ionRadioDidLoad.emit({ radio: this });
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
    componentDidUnload() {
        this.ionRadioDidUnload.emit({ radio: this });
    }
    colorChanged() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        if (this.nativeInput.checked !== isChecked) {
            // keep the checked value and native input `nync
            this.nativeInput.checked = isChecked;
        }
        if (this.didLoad && isChecked) {
            // only emit ionSelect when checked is true
            this.ionSelect.emit({
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
            this.ionStyle.emit(Object.assign({}, createThemedClasses(this.mode, this.color, 'radio'), { 'radio-checked': this.checked, 'radio-disabled': this.disabled }));
        });
    }
    onChange() {
        this.checked = true;
        this.nativeInput.focus();
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
        const hostAttrs = {
            'class': {
                'radio-checked': this.checked,
                'radio-disabled': this.disabled,
                'radio-key': this.keyFocus
            }
        };
        return hostAttrs;
    }
    render() {
        const radioClasses = {
            'radio-icon': true,
            'radio-checked': this.checked
        };
        return [
            h("div", { class: radioClasses },
                h("div", { class: 'radio-inner' })),
            h("input", { type: 'radio', onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r })
        ];
    }
}
let radioButtonIds = 0;

class RadioGroup {
    constructor() {
        this.radios = [];
        /*
         * @input {boolean} If true, the radios can be deselected. Default false.
         */
        this.allowEmptySelection = false;
        /*
         * @input {boolean} If true, the user cannot interact with the radio group. Default false.
         */
        this.disabled = false;
    }
    valueChanged() {
        // this radio group's value just changed
        // double check the button with this value is checked
        if (this.value === undefined) {
            // set to undefined
            // ensure all that are checked become unchecked
            this.radios.filter(r => r.checked).forEach(radio => {
                radio.checked = false;
            });
        }
        else {
            let hasChecked = false;
            this.radios.forEach(radio => {
                if (radio.value === this.value) {
                    if (!radio.checked && !hasChecked) {
                        // correct value for this radio
                        // but this radio isn't checked yet
                        // and we haven't found a checked yet
                        // so CHECK IT!
                        radio.checked = true;
                    }
                    else if (hasChecked && radio.checked) {
                        // somehow we've got multiple radios
                        // with the same value, but only one can be checked
                        radio.checked = false;
                    }
                    // remember we've got a checked radio button now
                    hasChecked = true;
                }
                else if (radio.checked) {
                    // this radio doesn't have the correct value
                    // and it's also checked, so let's uncheck it
                    radio.checked = false;
                }
            });
        }
        // emit the new value
        this.ionChange.emit({ value: this.value });
    }
    onRadioDidLoad(ev) {
        const radio = ev.target;
        this.radios.push(radio);
        radio.name = this.name;
        if (this.value !== undefined && radio.value === this.value) {
            // this radio-group has a value and this
            // radio equals the correct radio-group value
            // so let's check this radio
            radio.checked = true;
        }
        else if (this.value === undefined && radio.checked) {
            // this radio-group does not have a value
            // but this radio is checked, so let's set the
            // radio-group's value from the checked radio
            this.value = radio.value;
        }
        else if (radio.checked) {
            // if it doesn't match one of the above cases, but the
            // radio is still checked, then we need to uncheck it
            radio.checked = false;
        }
    }
    onRadioDidUnload(ev) {
        const index = this.radios.indexOf(ev.target);
        if (index > -1) {
            this.radios.splice(index, 1);
        }
    }
    onRadioSelect(ev) {
        // ionSelect only come from the checked radio button
        this.radios.forEach(radio => {
            if (radio === ev.target) {
                this.value = radio.value;
            }
            else {
                radio.checked = false;
            }
        });
    }
    componentWillLoad() {
        this.name = this.name || 'ion-rg-' + (radioGroupIds++);
    }
    componentDidLoad() {
        // Get the list header if it exists and set the id
        // this is used to set aria-labelledby
        let header = this.el.querySelector('ion-list-header');
        if (!header) {
            header = this.el.querySelector('ion-item-divider');
        }
        if (header) {
            const label = header.querySelector('ion-label');
            if (label) {
                this.labelId = label.id = this.name + '-lbl';
            }
        }
    }
    hostData() {
        const hostAttrs = {
            'role': 'radiogroup'
        };
        if (this.labelId) {
            hostAttrs['aria-labelledby'] = this.labelId;
        }
        return hostAttrs;
    }
    render() {
        return h("slot", null);
    }
}
let radioGroupIds = 0;

exports['ion-radio'] = Radio;
exports['ion-radio-group'] = RadioGroup;
},


/***************** ion-radio *****************/
[
/** ion-radio: tag **/
"ion-radio",

/** ion-radio: members **/
[
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "keyFocus", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-radio: host **/
{"theme":"radio"},

/** ion-radio: events **/
[
  [
    /*****  ion-radio ionRadioDidLoad ***** /
    /* event name ***/ "ionRadioDidLoad"
  ],
  [
    /*****  ion-radio ionRadioDidUnload ***** /
    /* event name ***/ "ionRadioDidUnload"
  ],
  [
    /*****  ion-radio ionStyle ***** /
    /* event name ***/ "ionStyle"
  ],
  [
    /*****  ion-radio ionSelect ***** /
    /* event name ***/ "ionSelect"
  ],
  [
    /*****  ion-radio ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-radio ionBlur ***** /
    /* event name ***/ "ionBlur"
  ]
],

/** ion-radio: propWillChanges **/
0 /* no prop will change methods */,

/** ion-radio: propDidChanges **/
[
  [
    /*****  ion-radio prop did change [0] ***** /
    /* prop name **/ "color",
    /* call fn *****/ "colorChanged"
  ],
  [
    /*****  ion-radio prop did change [1] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-radio prop did change [2] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

],

/***************** ion-radio-group *****************/
[
/** ion-radio-group: tag **/
"ion-radio-group",

/** ion-radio-group: members **/
[
  [ "allowEmptySelection", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "labelId", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "name", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-radio-group: host **/
{},

/** ion-radio-group: events **/
[
  [
    /*****  ion-radio-group ionChange ***** /
    /* event name ***/ "ionChange"
  ]
],

/** ion-radio-group: propWillChanges **/
0 /* no prop will change methods */,

/** ion-radio-group: propDidChanges **/
[
  [
    /*****  ion-radio-group prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

]
);