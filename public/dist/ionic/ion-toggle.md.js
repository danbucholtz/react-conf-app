/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-toggle_md","ion-toggle {\n  display: inline-block;\n  contain: content;\n}\n\nion-toggle ion-gesture {\n  display: block;\n  width: 100%;\n  height: 100%;\n  visibility: inherit;\n}\n\n.toggle-cover {\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  background: transparent;\n  cursor: pointer;\n}\n\nion-toggle input {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer;\n  pointer-events: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.toggle-key input {\n  border: 2px solid #5e9ed6;\n}\n\n.toggle-md {\n  padding: 12px;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  box-sizing: content-box;\n  contain: strict;\n}\n\n.toggle-md .toggle-icon {\n  border-radius: 14px;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #dedede;\n  transition: background-color 300ms;\n  pointer-events: none;\n}\n\n.toggle-md .toggle-inner {\n  left: 0;\n  top: -3px;\n  border-radius: 50%;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition-duration: 300ms;\n  transition-property: transform, background-color;\n  will-change: transform, background-color;\n  contain: strict;\n}\n\n.toggle-md.toggle-checked .toggle-icon {\n  background-color: #c8dcff;\n}\n\n.toggle-md.toggle-checked .toggle-inner {\n  transform: translate3d(16px,  0,  0);\n  background-color: #488aff;\n}\n\n.toggle-md.toggle-disabled,\n.item-md.item-toggle-disabled ion-label {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.toggle-md.toggle-disabled ion-radio {\n  opacity: 0.3;\n}\n\n.item-md .toggle-md[slot] {\n  margin: 0;\n  padding: 12px 8px 12px 16px;\n  cursor: pointer;\n}\n\n.item-md .toggle-md[slot=\"start\"] {\n  padding: 12px 18px 12px 2px;\n}\n\n.item-md.item-toggle ion-label {\n  margin-left: 0;\n}\n\n.toggle-md-primary.toggle-checked .toggle-icon {\n  background-color: #c8dcff;\n}\n\n.toggle-md-primary.toggle-checked .toggle-inner {\n  background-color: #488aff;\n}\n\n.toggle-md-secondary.toggle-checked .toggle-icon {\n  background-color: #9eeeb6;\n}\n\n.toggle-md-secondary.toggle-checked .toggle-inner {\n  background-color: #32db64;\n}\n\n.toggle-md-danger.toggle-checked .toggle-icon {\n  background-color: #fbb6b6;\n}\n\n.toggle-md-danger.toggle-checked .toggle-inner {\n  background-color: #f53d3d;\n}\n\n.toggle-md-light.toggle-checked .toggle-icon {\n  background-color: white;\n}\n\n.toggle-md-light.toggle-checked .toggle-inner {\n  background-color: #f4f4f4;\n}\n\n.toggle-md-dark.toggle-checked .toggle-icon {\n  background-color: #626262;\n}\n\n.toggle-md-dark.toggle-checked .toggle-inner {\n  background-color: #222;\n}\nion-toggle.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-toggle.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

const _engine = window.TapticEngine;
/**
 * Check to see if the Haptic Plugin is available
 * @return {boolean} Returns true or false if the plugin is available
 *
 */

/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
function hapticSelection() {
    _engine && _engine.selection();
}
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */

/**
 * Tell the haptic engine that a selection changed during a gesture.
 */

/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */

/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ type: 'success' }` (or `warning`/`error`)
 */

/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */

class Toggle {
    constructor() {
        this.activated = false;
        /**
         * @input {boolean} If true, the toggle is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * @input {boolean} If true, the user cannot interact with the toggle. Default false.
         */
        this.disabled = false;
        this.gestureConfig = {
            'onStart': this.onDragStart.bind(this),
            'onMove': this.onDragMove.bind(this),
            'onEnd': this.onDragEnd.bind(this),
            'gestureName': 'toggle',
            'gesturePriority': 30,
            'type': 'pan',
            'direction': 'x',
            'threshold': 0,
            'attachTo': 'parent'
        };
    }
    componentWillLoad() {
        this.inputId = 'ion-tg-' + (toggleIds++);
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
                'toggle-disabled': this.disabled,
                'toggle-checked': this.checked,
                'toggle-activated': this.activated
            });
        });
    }
    onDragStart(detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
    }
    onDragMove(detail) {
        const currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            hapticSelection();
        }
    }
    onDragEnd(detail) {
        const delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            hapticSelection();
        }
        this.activated = false;
        this.nativeInput.focus();
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
                'toggle-activated': this.activated,
                'toggle-checked': this.checked,
                'toggle-disabled': this.disabled,
                'toggle-key': this.keyFocus
            }
        };
    }
    render() {
        return [
            h("ion-gesture", Object.assign({}, this.gestureConfig, { enabled: !this.disabled, tabIndex: -1 }),
                h("div", { class: 'toggle-icon' },
                    h("div", { class: 'toggle-inner' })),
                h("div", { class: 'toggle-cover' })),
            h("input", { type: 'checkbox', onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r })
        ];
    }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
let toggleIds = 0;

exports['ion-toggle'] = Toggle;
},


/***************** ion-toggle *****************/
[
/** ion-toggle: tag **/
"ion-toggle",

/** ion-toggle: members **/
[
  [ "activated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "keyFocus", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-toggle: host **/
{"theme":"toggle"},

/** ion-toggle: events **/
[
  [
    /*****  ion-toggle ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-toggle ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-toggle ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-toggle ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-toggle: propWillChanges **/
0 /* no prop will change methods */,

/** ion-toggle: propDidChanges **/
[
  [
    /*****  ion-toggle prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-toggle prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

]
);