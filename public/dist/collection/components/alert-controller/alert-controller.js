import { AlertEvent, AlertOptions } from '../../index';
export class AlertController {
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
