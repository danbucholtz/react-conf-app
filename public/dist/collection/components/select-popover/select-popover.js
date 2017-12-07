import { EventEmitter } from '@stencil/core';
export class SelectPopover {
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
