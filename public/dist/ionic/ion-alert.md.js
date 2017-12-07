/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-alert_md","ion-alert {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  contain: strict;\n}\n\nion-alert.alert-top {\n  padding-top: 50px;\n  align-items: flex-start;\n}\n\nion-alert input {\n  width: 100%;\n}\n\n.alert-wrapper {\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  max-height: 90%;\n  opacity: 0;\n  contain: content;\n}\n\n.alert-title {\n  margin: 0;\n  padding: 0;\n}\n\n.alert-sub-title {\n  margin: 5px 0 0;\n  padding: 0;\n  font-weight: normal;\n}\n\n.alert-message {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.alert-input {\n  padding: 10px 0;\n  border: 0;\n  background: inherit;\n}\n\n.alert-input::-moz-placeholder {\n  color: #999;\n}\n\n.alert-input:-ms-input-placeholder {\n  color: #999;\n}\n\n.alert-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: #999;\n}\n\n.alert-button-group {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.alert-button-group-vertical {\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n.alert-button {\n  margin: 0;\n  z-index: 0;\n  display: block;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.alert-tappable {\n  text-align: left;\n  text-align: start;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-size: inherit;\n  line-height: initial;\n  background: transparent;\n}\n\n.alert-md .alert-wrapper {\n  border-radius: 2px;\n  max-width: 280px;\n  background-color: #fafafa;\n  box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);\n}\n\n.alert-md .alert-head {\n  text-align: left;\n  text-align: start;\n  padding: 24px 24px 20px;\n}\n\n.alert-md .alert-title {\n  font-size: 22px;\n}\n\n.alert-md .alert-sub-title {\n  font-size: 16px;\n}\n\n.alert-md .alert-message,\n.alert-md .alert-input-group {\n  padding: 0 24px 24px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.alert-md .alert-message {\n  max-height: 240px;\n  font-size: 15px;\n}\n\n.alert-md .alert-message:empty {\n  padding: 0;\n}\n\n.alert-md .alert-input {\n  margin: 5px 0;\n  border-bottom: 1px solid #dedede;\n  color: #000;\n}\n\n.alert-md .alert-input:focus {\n  margin-bottom: 4px;\n  border-bottom: 2px solid #488aff;\n}\n\n.alert-md .alert-radio-group,\n.alert-md .alert-checkbox-group {\n  position: relative;\n  overflow: auto;\n  max-height: 240px;\n  border-top: 1px solid #dedede;\n  border-bottom: 1px solid #dedede;\n}\n\n.alert-md .alert-tappable {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  min-height: 44px;\n}\n\n.alert-md .alert-radio-label {\n  padding: 13px 26px;\n  overflow: hidden;\n  flex: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: initial;\n}\n\n.alert-md .alert-radio-icon {\n  left: 13px;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #787878;\n}\n\n.alert-md .alert-radio-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background-color: #488aff;\n  transform: scale3d(0, 0, 0);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.alert-md [aria-checked=true] .alert-radio-label {\n  color: #488aff;\n}\n\n.alert-md [aria-checked=true] .alert-radio-icon {\n  border-color: #488aff;\n}\n\n.alert-md [aria-checked=true] .alert-radio-inner {\n  transform: scale3d(1, 1, 1);\n}\n\n.alert-md .alert-checkbox-label {\n  padding: 13px 26px;\n  overflow: hidden;\n  flex: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: initial;\n}\n\n.alert-md [aria-checked=true] .alert-checkbox-label {\n  color: initial;\n}\n\n.alert-md .alert-checkbox-icon {\n  left: 13px;\n  top: 0;\n  border-radius: 2px;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #787878;\n}\n\n.alert-md [aria-checked=true] .alert-checkbox-icon {\n  border-color: #488aff;\n  background-color: #488aff;\n}\n\n.alert-md [aria-checked=true] .alert-checkbox-inner {\n  left: 3px;\n  top: 0;\n  position: absolute;\n  width: 6px;\n  height: 10px;\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\n.alert-md .alert-button-group {\n  padding: 8px 8px 8px 24px;\n  flex-wrap: wrap-reverse;\n  justify-content: flex-end;\n}\n\n.alert-md .alert-button {\n  border-radius: 2px;\n  margin: 0 8px 0 0;\n  padding: 10px;\n  text-align: right;\n  text-align: end;\n  position: relative;\n  overflow: hidden;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #488aff;\n  background-color: transparent;\n}\n\n.alert-md .alert-button.activated {\n  background-color: rgba(158, 158, 158, 0.2);\n}\n\n.alert-md .alert-button .button-inner {\n  justify-content: flex-end;\n}\nion-alert.hydrated{visibility:inherit}","ion-alert-controller_md","\nion-alert-controller.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-alert.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

/** @hidden */












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








/**
 * @private
 */

function playAnimationAsync(animation) {
    return new Promise((resolve) => {
        animation.onFinish((ani) => {
            resolve(ani);
        });
        animation.play();
    });
}
function domControllerAsync(domControllerFunction, callback) {
    return new Promise((resolve) => {
        domControllerFunction(() => {
            callback();
            resolve();
        });
    });
}

const BACKDROP = 'backdrop';

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

/**
 * iOS Alert Enter Animation
 */
function iosEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.alert-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.3);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * iOS Alert Leave Animation
 */
function iosLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.alert-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.3, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * Md Alert Enter Animation
 */
function mdEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.alert-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.5);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * Md Alert Leave Animation
 */
function mdLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.alert-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.5, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

class Alert {
    constructor() {
        /**
         * Array of buttons to be added to the alert. See AlertButton type for valid options
         */
        this.buttons = [];
        /**
         * Array of input to show in the alert. See AlertInput type for valid options
         */
        this.inputs = [];
        /**
         * If true, the alert will be dismissed when the backdrop is clicked.
         */
        this.enableBackdropDismiss = true;
        /**
         * If true, alert will become translucent. Requires support for backdrop-filters.
         */
        this.translucent = false;
        /**
         * Enable alert animations. If false, alert will not animate in
         */
        this.animate = true;
    }
    /**
     * Present the alert after is has been created
     */
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionAlertWillPresent.emit();
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('alertEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
        // build the animation and kick it off
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            if (!this.animate) {
                // if the duration is 0, it won't actually animate I don't think
                // TODO - validate this
                this.animation = animation.duration(0);
            }
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            const firstInput = this.el.querySelector('[tabindex]');
            if (firstInput) {
                firstInput.focus();
            }
            this.ionAlertDidPresent.emit();
        });
    }
    /**
     * Dismiss the alert programatically
     */
    dismiss(data, role) {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionAlertWillDismiss.emit({
            data: data,
            role: role
        });
        // get the user's animation fn if one was provided
        const animationBuilder = this.leaveAnimation || this.config.get('alertLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            return domControllerAsync(Context.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        }).then(() => {
            this.ionAlertDidDismiss.emit({
                data: data,
                role: role
            });
        });
    }
    componentDidLoad() {
        this.ionAlertDidLoad.emit();
    }
    componentDidEnter() {
        this.ionAlertDidPresent.emit();
    }
    componentDidUnload() {
        this.ionAlertDidUnload.emit();
    }
    backdropClick() {
        if (this.enableBackdropDismiss) {
            this.dismiss(null, BACKDROP);
        }
    }
    rbClick(inputIndex) {
        this.inputs = this.inputs.map((input, index) => {
            input.checked = (inputIndex === index);
            return input;
        });
        const rbButton = this.inputs[inputIndex];
        this.activeId = rbButton.id;
        if (rbButton.handler) {
            rbButton.handler(rbButton);
        }
    }
    cbClick(inputIndex) {
        this.inputs = this.inputs.map((input, index) => {
            if (inputIndex === index) {
                input.checked = !input.checked;
            }
            return input;
        });
        const cbButton = this.inputs[inputIndex];
        if (cbButton.handler) {
            cbButton.handler(cbButton);
        }
    }
    buttonClick(button) {
        let shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            if (button.handler(this.getValues()) === false) {
                // if the return value of the handler is false then do not dismiss
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss(this.getValues(), button.role);
        }
    }
    getValues() {
        if (this.inputType === 'radio') {
            // this is an alert with radio buttons (single value select)
            // return the one value which is checked, otherwise undefined
            const checkedInput = this.inputs.find(i => i.checked);
            console.debug('returning', checkedInput ? checkedInput.value : undefined);
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === 'checkbox') {
            // this is an alert with checkboxes (multiple value select)
            // return an array of all the checked values
            console.debug('returning', this.inputs.filter(i => i.checked).map(i => i.value));
            return this.inputs.filter(i => i.checked).map(i => i.value);
        }
        if (this.inputs.length === 0) {
            // this is an alert without any options/inputs at all
            console.debug('returning', 'undefined');
            return undefined;
        }
        // this is an alert with text inputs
        // return an object of all the values with the input name as the key
        const values = {};
        this.inputs.forEach(i => {
            values[i.name] = i.value;
        });
        console.debug('returning', values);
        return values;
    }
    buttonClass(button) {
        let buttonClass = ['alert-button'];
        if (button.cssClass) {
            let customClass = button.cssClass.split(' ').filter(b => b.trim() !== '').join(' ');
            buttonClass.push(customClass);
        }
        return buttonClass.reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    }
    renderCheckbox(inputs) {
        if (inputs.length === 0)
            return null;
        return (h("div", { class: 'alert-checkbox-group' }, inputs.map((i, index) => (h("button", { onClick: () => this.cbClick(index), "aria-checked": i.checked, id: i.id, disabled: i.disabled, tabIndex: 0, role: 'checkbox', class: 'alert-tappable alert-checkbox alert-checkbox-button' },
            h("div", { class: 'button-inner' },
                h("div", { class: 'alert-checkbox-icon' },
                    h("div", { class: 'alert-checkbox-inner' })),
                h("div", { class: 'alert-checkbox-label' }, i.label)))))));
    }
    renderRadio(inputs) {
        if (inputs.length === 0)
            return null;
        return (h("div", { class: 'alert-radio-group', role: 'radiogroup', "aria-labelledby": this.hdrId, "aria-activedescendant": this.activeId }, inputs.map((i, index) => (h("button", { onClick: () => this.rbClick(index), "aria-checked": i.checked, disabled: i.disabled, id: i.id, tabIndex: 0, class: 'alert-radio-button alert-tappable alert-radio', role: 'radio' },
            h("div", { class: 'button-inner' },
                h("div", { class: 'alert-radio-icon' },
                    h("div", { class: 'alert-radio-inner' })),
                h("div", { class: 'alert-radio-label' }, i.label)))))));
    }
    renderInput(inputs) {
        if (inputs.length === 0)
            return null;
        return (h("div", { class: 'alert-input-group' }, inputs.map(i => (h("div", { class: 'alert-input-wrapper' },
            h("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, id: i.id, disabled: i.disabled, tabIndex: 0, class: 'alert-input' }))))));
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'alert-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses,
            id: this.alertId
        };
    }
    render() {
        const hdrId = `${this.alertId}-hdr`;
        const subHdrId = `${this.alertId}-sub-hdr`;
        const msgId = `${this.alertId}-msg`;
        if (this.cssClass) {
            this.cssClass.split(' ').forEach(cssClass => {
                if (cssClass.trim() !== '')
                    this.el.classList.add(cssClass);
            });
        }
        if (this.title || !this.subTitle) {
            this.hdrId = hdrId;
        }
        else if (this.subTitle) {
            this.hdrId = subHdrId;
        }
        const alertButtonGroupClass = {
            'alert-button-group': true,
            'alert-button-group-vertical': this.buttons.length > 2
        };
        const buttons = this.buttons
            .map(b => {
            if (typeof b === 'string') {
                b = { text: b };
            }
            return b;
        })
            .filter(b => b !== null);
        // An alert can be created with several different inputs. Radios,
        // checkboxes and inputs are all accepted, but they cannot be mixed.
        const inputTypes = [];
        this.inputs = this.inputs
            .map((i, index) => {
            let r = {
                type: i.type || 'text',
                name: i.name ? i.name : index + '',
                placeholder: i.placeholder ? i.placeholder : '',
                value: i.value ? i.value : '',
                label: i.label,
                checked: !!i.checked,
                disabled: !!i.disabled,
                id: i.id ? i.id : `alert-input-${this.alertId}-${index}`,
                handler: i.handler ? i.handler : null,
                min: i.min ? i.min : null,
                max: i.max ? i.max : null
            };
            return r;
        })
            .filter(i => i !== null);
        this.inputs.forEach(i => {
            if (inputTypes.indexOf(i.type) < 0) {
                inputTypes.push(i.type);
            }
        });
        if (inputTypes.length > 1 && (inputTypes.indexOf('checkbox') > -1 || inputTypes.indexOf('radio') > -1)) {
            console.warn(`Alert cannot mix input types: ${(inputTypes.join('/'))}. Please see alert docs for more info.`);
        }
        this.inputType = inputTypes.length ? inputTypes[0] : null;
        return [
            h("ion-backdrop", { onClick: this.backdropClick.bind(this), class: 'alert-backdrop' }),
            h("div", { class: 'alert-wrapper' },
                h("div", { class: 'alert-head' },
                    this.title
                        ? h("h2", { id: hdrId, class: 'alert-title' }, this.title)
                        : null,
                    this.subTitle
                        ? h("h2", { id: subHdrId, class: 'alert-sub-title' }, this.subTitle)
                        : null),
                h("div", { id: msgId, class: 'alert-message', innerHTML: this.message }),
                (() => {
                    switch (this.inputType) {
                        case 'checkbox':
                            return this.renderCheckbox(this.inputs);
                        case 'radio':
                            return this.renderRadio(this.inputs);
                        default:
                            return this.renderInput(this.inputs);
                    }
                })(),
                h("div", { class: alertButtonGroupClass }, buttons.map(b => h("button", { class: this.buttonClass(b), tabIndex: 0, onClick: () => this.buttonClick(b) },
                    h("span", { class: 'button-inner' }, b.text)))))
        ];
    }
}

class AlertController {
    constructor() {
        this.ids = 0;
        this.alertResolves = {};
        this.alerts = [];
    }
    /**
     * Open an alert with a title, subTitle, and an array of buttons
     * @param {AlertOptions} opts Action sheet options
     */
    create(opts) {
        // create ionic's wrapping ion-alert component
        const alert = document.createElement('ion-alert');
        const id = this.ids++;
        // give this action sheet a unique id
        alert.alertId = `alert-${id}`;
        alert.style.zIndex = (20000 + id).toString();
        // convert the passed in action sheet options into props
        // that get passed down into the new action sheet
        Object.assign(alert, opts);
        // append the action sheet element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(alert);
        // store the resolve function to be called later up when the action sheet loads
        return new Promise((resolve) => {
            this.alertResolves[alert.alertId] = resolve;
        });
    }
    didLoad(ev) {
        const alert = ev.target;
        const alertResolve = this.alertResolves[alert.alertId];
        if (alertResolve) {
            alertResolve(alert);
            delete this.alertResolves[alert.alertId];
        }
    }
    willPresent(event) {
        console.log('willPresent: ', event);
        this.alerts.push(event.target);
    }
    willDismiss(event) {
        console.log('willDismiss: ', event);
        const index = this.alerts.indexOf(event.target);
        if (index > -1) {
            this.alerts.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastAlert = this.alerts[this.alerts.length - 1];
        if (lastAlert) {
            lastAlert.dismiss();
        }
    }
}

exports['ion-alert'] = Alert;
exports['ion-alert-controller'] = AlertController;
},


/***************** ion-alert *****************/
[
/** ion-alert: tag **/
"ion-alert",

/** ion-alert: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "buttons", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismiss", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableBackdropDismiss", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "inputs", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "leaveAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "message", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "present", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "subTitle", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "title", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-alert: host **/
{"theme":"alert"},

/** ion-alert: events **/
[
  [
    /*****  ion-alert ionAlertDidLoad ***** /
    /* event name ***/ "ionAlertDidLoad"
  ],
  [
    /*****  ion-alert ionAlertDidPresent ***** /
    /* event name ***/ "ionAlertDidPresent"
  ],
  [
    /*****  ion-alert ionAlertWillPresent ***** /
    /* event name ***/ "ionAlertWillPresent"
  ],
  [
    /*****  ion-alert ionAlertWillDismiss ***** /
    /* event name ***/ "ionAlertWillDismiss"
  ],
  [
    /*****  ion-alert ionAlertDidDismiss ***** /
    /* event name ***/ "ionAlertDidDismiss"
  ],
  [
    /*****  ion-alert ionAlertDidUnload ***** /
    /* event name ***/ "ionAlertDidUnload"
  ]
]

],

/***************** ion-alert-controller *****************/
[
/** ion-alert-controller: tag **/
"ion-alert-controller",

/** ion-alert-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-alert-controller: host **/
{}

]
);