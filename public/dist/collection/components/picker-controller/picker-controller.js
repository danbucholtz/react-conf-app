import { PickerEvent, PickerOptions } from '../../index';
export class PickerController {
    constructor() {
        this.ids = 0;
        this.pickerResolves = {};
        this.pickers = [];
    }
    create(opts) {
        // create ionic's wrapping ion-picker component
        const picker = document.createElement('ion-picker');
        const id = this.ids++;
        // give this picker a unique id
        picker.pickerId = `picker-${id}`;
        picker.style.zIndex = (20000 + id).toString();
        // convert the passed in picker options into props
        // that get passed down into the new picker
        Object.assign(picker, opts);
        // append the picker element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(picker);
        // store the resolve function to be called later up when the picker loads
        return new Promise(resolve => {
            this.pickerResolves[picker.pickerId] = resolve;
        });
    }
    didLoad(ev) {
        const picker = ev.target;
        const pickerResolve = this.pickerResolves[picker.pickerId];
        if (pickerResolve) {
            pickerResolve(picker);
            delete this.pickerResolves[picker.pickerId];
        }
    }
    willPresent(ev) {
        this.pickers.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.pickers.indexOf(ev.target);
        if (index > -1) {
            this.pickers.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastPicker = this.pickers[this.pickers.length - 1];
        if (lastPicker) {
            lastPicker.dismiss();
        }
    }
}
