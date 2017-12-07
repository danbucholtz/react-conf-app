import { CssClassMap, EventEmitter } from '@stencil/core';
import { Animation, AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import { domControllerAsync, playAnimationAsync } from '../../utils/helpers';
import { BACKDROP } from '../../utils/overlay-constants';
import { createThemedClasses } from '../../utils/theme';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export class Alert {
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
export { iosEnterAnimation as iosAlertEnterAnimation, iosLeaveAnimation as iosAlertLeaveAnimation, mdEnterAnimation as mdAlertEnterAnimation, mdLeaveAnimation as mdAlertLeaveAnimation, };
