import { CssClassMap, EventEmitter } from '@stencil/core';
import { Animation, AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import { domControllerAsync, playAnimationAsync } from '../../utils/helpers';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
export class Picker {
    constructor() {
        this.showSpinner = null;
        this.dismissOnPageChange = false;
        this.showBackdrop = true;
        this.enableBackdropDismiss = true;
        this.buttons = [];
        this.columns = [];
    }
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionPickerWillPresent.emit();
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('pickerEnter', iosEnterAnimation);
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
            this.componentDidEnter();
        });
    }
    dismiss(data, role) {
        clearTimeout(this.durationTimeout);
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionPickerWillDismiss.emit({
            data,
            role
        });
        const animationBuilder = this.leaveAnimation || this.config.get('pickerLeave', iosLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            return domControllerAsync(Context.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        }).then(() => {
            this.ionPickerDidDismiss.emit({
                data,
                role
            });
        });
    }
    componentDidLoad() {
        if (!this.spinner) {
            let defaultSpinner = 'lines';
            if (this.mode === 'md') {
                defaultSpinner = 'crescent';
            }
            this.spinner = this.config.get('pickerSpinner') || defaultSpinner;
        }
        if (this.showSpinner === null || this.showSpinner === undefined) {
            this.showSpinner = !!(this.spinner && this.spinner !== 'hide');
        }
        this.ionPickerDidLoad.emit();
    }
    componentDidEnter() {
        // blur the currently active element
        const activeElement = document.activeElement;
        activeElement && activeElement.blur && activeElement.blur();
        // If there is a duration, dismiss after that amount of time
        if (typeof this.duration === 'number' && this.duration > 10) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
        }
        this.ionPickerDidPresent.emit();
    }
    componentDidUnload() {
        this.ionPickerDidUnload.emit();
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    buttonClick(button) {
        // if (!this.enabled) {
        //   return;
        // }
        // keep the time of the most recent button click
        let shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            if (button.handler(this.getSelected()) === false) {
                // if the return value of the handler is false then do not dismiss
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss();
        }
    }
    getSelected() {
        let selected = {};
        this.columns.forEach((col, index) => {
            let selectedColumn = col.options[col.selectedIndex];
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : null,
                value: selectedColumn ? selectedColumn.value : null,
                columnIndex: index,
            };
        });
        return selected;
    }
    /**
     * @param {any} button Picker toolbar button
     */
    addButton(button) {
        this.buttons.push(button);
    }
    /**
     * @param {PickerColumn} column Picker toolbar button
     */
    addColumn(column) {
        this.columns.push(column);
    }
    getColumn(name) {
        return this.getColumns().find(column => column.name === name);
    }
    getColumns() {
        return this.columns;
    }
    backdropClick() {
        // TODO this.enabled
        if (this.enableBackdropDismiss) {
            let cancelBtn = this.buttons.find(b => b.role === 'cancel');
            if (cancelBtn) {
                this.buttonClick(cancelBtn);
            }
            else {
                this.dismiss();
            }
        }
    }
    render() {
        // TODO: cssClass
        let buttons = this.buttons
            .map(b => {
            if (typeof b === 'string') {
                b = { text: b };
            }
            if (!b.cssClass) {
                b.cssClass = '';
            }
            return b;
        })
            .filter(b => b !== null);
        let columns = this.columns;
        // // clean up dat data
        // data.columns = data.columns.map(column => {
        //   if (!isPresent(column.options)) {
        //     column.options = [];
        //   }
        //   column.selectedIndex = column.selectedIndex || 0;
        //   column.options = column.options.map(inputOpt => {
        //     let opt: PickerColumnOption = {
        //       text: '',
        //       value: '',
        //       disabled: inputOpt.disabled,
        //     };
        //     if (isPresent(inputOpt)) {
        //       if (isString(inputOpt) || isNumber(inputOpt)) {
        //         opt.text = inputOpt.toString();
        //         opt.value = inputOpt;
        //       } else {
        //         opt.text = isPresent(inputOpt.text) ? inputOpt.text : inputOpt.value;
        //         opt.value = isPresent(inputOpt.value) ? inputOpt.value : inputOpt.text;
        //       }
        //     }
        //     return opt;
        //   });
        //   return column;
        // });
        // RENDER TODO
        // <ion-backdrop (click)="bdClick()"></ion-backdrop>
        // <div class="picker-wrapper">
        //   <div class="picker-toolbar">
        //     <div *ngFor="let b of d.buttons" class="picker-toolbar-button" [ngClass]="b.cssRole">
        //       <ion-button (click)="btnClick(b)" [ngClass]="b.cssClass" class="picker-button" clear>
        //         {{b.text}}
        //       </ion-button>
        //     </div>
        //   </div>
        //   <div class="picker-columns">
        //     <div class="picker-above-highlight"></div>
        //     <div *ngFor="let c of d.columns" [col]="c" class="picker-col" (ionChange)="_colChange($event)"></div>
        //     <div class="picker-below-highlight"></div>
        //   </div>
        // </div>
        return [
            h("ion-backdrop", { onClick: this.backdropClick.bind(this), class: {
                    'picker-backdrop': true,
                    'hide-backdrop': !this.showBackdrop
                } }),
            h("div", { class: 'picker-wrapper', role: 'dialog' },
                h("div", { class: 'picker-toolbar' }, buttons.map(b => h("div", { class: this.buttonWrapperClass(b) },
                    h("button", { onClick: () => this.buttonClick(b), class: this.buttonClass(b) }, b.text)))),
                h("div", { class: 'picker-columns' },
                    h("div", { class: 'picker-above-highlight' }),
                    columns.map(c => h("ion-picker-column", { col: c })),
                    h("div", { class: 'picker-below-highlight' })))
        ];
    }
    buttonWrapperClass(button) {
        let buttonClass = !button.role
            ? ['picker-toolbar-button']
            : [`picker-toolbar-button`, `picker-toolbar-${button.role}`];
        return buttonClass.reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    }
    buttonClass(button) {
        let buttonClass = !button.cssClass
            ? ['picker-button']
            : [`picker-button`, `${button.cssClass}`];
        return buttonClass.reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    }
}
export { iosEnterAnimation as iosPickerEnterAnimation, iosLeaveAnimation as iosPickerLeaveAnimation };
