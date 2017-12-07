import { BlurEvent, CheckboxInput, CheckedInputChangeEvent, FocusEvent, StyleEvent } from '../../utils/input-interfaces';
import { CssClassMap, EventEmitter } from '@stencil/core';
export class Checkbox {
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
