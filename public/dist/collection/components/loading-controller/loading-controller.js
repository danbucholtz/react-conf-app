import { LoadingEvent, LoadingOptions } from '../../index';
export class LoadingController {
    constructor() {
        this.ids = 0;
        this.loadingResolves = {};
        this.loadings = [];
    }
    /**
     * Create a loading overlay and pass options to it
     */
    create(opts) {
        // create ionic's wrapping ion-loading component
        const loading = document.createElement('ion-loading');
        const id = this.ids++;
        // give this loading a unique id
        loading.loadingId = `loading-${id}`;
        loading.style.zIndex = (20000 + id).toString();
        // convert the passed in loading options into props
        // that get passed down into the new loading
        Object.assign(loading, opts);
        // append the loading element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(loading);
        // store the resolve function to be called later up when the loading loads
        return new Promise(resolve => {
            this.loadingResolves[loading.loadingId] = resolve;
        });
    }
    didLoad(ev) {
        const loading = ev.target;
        const loadingResolve = this.loadingResolves[loading.loadingId];
        if (loadingResolve) {
            loadingResolve(loading);
            delete this.loadingResolves[loading.loadingId];
        }
    }
    willPresent(ev) {
        this.loadings.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.loadings.indexOf(ev.target);
        if (index > -1) {
            this.loadings.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastLoading = this.loadings[this.loadings.length - 1];
        if (lastLoading) {
            lastLoading.dismiss();
        }
    }
}
