import { ToastEvent, ToastOptions } from '../../index';
export class ToastController {
    constructor() {
        this.ids = 0;
        this.toastResolves = {};
        this.toasts = [];
    }
    create(opts) {
        // create ionic's wrapping ion-toast component
        const toast = document.createElement('ion-toast');
        const id = this.ids++;
        // give this toast a unique id
        toast.toastId = `toast-${id}`;
        toast.style.zIndex = (10000 + id).toString();
        // convert the passed in toast options into props
        // that get passed down into the new toast
        Object.assign(toast, opts);
        // append the toast element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(toast);
        // store the resolve function to be called later up when the toast loads
        return new Promise(resolve => {
            this.toastResolves[toast.toastId] = resolve;
        });
    }
    didLoad(ev) {
        const toast = ev.target;
        const toastResolve = this.toastResolves[toast.toastId];
        if (toastResolve) {
            toastResolve(toast);
            delete this.toastResolves[toast.toastId];
        }
    }
    willPresent(ev) {
        this.toasts.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.toasts.indexOf(ev.target);
        if (index > -1) {
            this.toasts.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastToast = this.toasts[this.toasts.length - 1];
        if (lastToast) {
            lastToast.dismiss();
        }
    }
}
