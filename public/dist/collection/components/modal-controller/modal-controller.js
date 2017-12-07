import { Modal, ModalEvent, ModalOptions } from '../../index';
export class ModalController {
    constructor() {
        this.ids = 0;
        this.modalResolves = {};
        this.modals = [];
    }
    create(opts) {
        // create ionic's wrapping ion-modal component
        const modal = document.createElement('ion-modal');
        const id = this.ids++;
        // give this modal a unique id
        modal.modalId = `modal-${id}`;
        modal.style.zIndex = (10000 + id).toString();
        // convert the passed in modal options into props
        // that get passed down into the new modal
        Object.assign(modal, opts);
        // append the modal element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(modal);
        // store the resolve function to be called later up when the modal loads
        return new Promise(resolve => {
            this.modalResolves[modal.modalId] = resolve;
        });
    }
    modalDidLoad(ev) {
        const modal = ev.target;
        const modalResolve = this.modalResolves[modal.modalId];
        if (modalResolve) {
            modalResolve(modal);
            delete this.modalResolves[modal.modalId];
        }
    }
    modalWillPresent(ev) {
        this.modals.push(ev.target);
    }
    modalWillDismiss(ev) {
        const index = this.modals.indexOf(ev.target);
        if (index > -1) {
            this.modals.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastModal = this.modals[this.modals.length - 1];
        if (lastModal) {
            lastModal.dismiss();
        }
    }
}
