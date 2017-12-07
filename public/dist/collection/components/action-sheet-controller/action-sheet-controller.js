import { ActionSheetEvent, ActionSheetOptions } from '../../index';
export class ActionSheetController {
    constructor() {
        this.ids = 0;
        this.actionSheetResolves = {};
        this.actionSheets = [];
    }
    /**
     * Open an action-sheet with a title, subTitle, and an array of buttons
     * @param {ActionSheetOptions} opts Action sheet options
     */
    create(opts) {
        // create ionic's wrapping ion-action-sheet component
        const actionSheet = document.createElement('ion-action-sheet');
        const id = this.ids++;
        // give this action sheet a unique id
        actionSheet.actionSheetId = `action-sheet-${id}`;
        actionSheet.style.zIndex = (20000 + id).toString();
        // convert the passed in action sheet options into props
        // that get passed down into the new action sheet
        Object.assign(actionSheet, opts);
        // append the action sheet element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(actionSheet);
        // store the resolve function to be called later up when the action sheet loads
        return new Promise((resolve) => {
            this.actionSheetResolves[actionSheet.actionSheetId] = resolve;
        });
    }
    didLoad(ev) {
        const actionSheet = ev.target;
        const actionSheetResolve = this.actionSheetResolves[actionSheet.actionSheetId];
        if (actionSheetResolve) {
            actionSheetResolve(actionSheet);
            delete this.actionSheetResolves[actionSheet.actionSheetId];
        }
    }
    willPresent(ev) {
        this.actionSheets.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.actionSheets.indexOf(ev.target);
        if (index > -1) {
            this.actionSheets.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastActionSheet = this.actionSheets[this.actionSheets.length - 1];
        if (lastActionSheet) {
            lastActionSheet.dismiss();
        }
    }
}
