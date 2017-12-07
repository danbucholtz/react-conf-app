import { PopoverEvent, PopoverOptions } from '../../index';
export class PopoverController {
    constructor() {
        this.ids = 0;
        this.popoverResolves = {};
        this.popovers = [];
    }
    /**
     * Create a popover component instance
     * @param opts Options when creating a new popover instance
     */
    create(opts) {
        // create ionic's wrapping ion-popover component
        const popover = document.createElement('ion-popover');
        const id = this.ids++;
        // give this popover a unique id
        popover.popoverId = `popover-${id}`;
        popover.style.zIndex = (10000 + id).toString();
        // convert the passed in popover options into props
        // that get passed down into the new popover
        Object.assign(popover, opts);
        // append the popover element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(popover);
        // store the resolve function to be called later up when the popover loads
        return new Promise(resolve => {
            this.popoverResolves[popover.popoverId] = resolve;
        });
    }
    didLoad(ev) {
        const popover = ev.target;
        const popoverResolve = this.popoverResolves[popover.popoverId];
        if (popoverResolve) {
            popoverResolve(popover);
            delete this.popoverResolves[popover.popoverId];
        }
    }
    willPresent(ev) {
        this.popovers.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.popovers.indexOf(ev.target);
        if (index > -1) {
            this.popovers.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastPopover = this.popovers[this.popovers.length - 1];
        if (lastPopover) {
            lastPopover.dismiss();
        }
    }
}
