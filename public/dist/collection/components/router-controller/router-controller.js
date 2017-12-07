import { RouterSegments, generateURL, parseURL, readNavState, writeNavState } from './router-utils';
import { Config } from '../../index';
export class RouterController {
    constructor() {
        this.busy = false;
        this.enabled = false;
        this.basePrefix = '#';
    }
    componentDidLoad() {
        const enabled = this.enabled = this.config.getBoolean('useRouter', false);
        if (enabled) {
            const base = document.querySelector('head > base');
            if (base) {
                const baseURL = base.getAttribute('href');
                if (baseURL.length > 0) {
                    this.basePrefix = baseURL;
                }
            }
            Context.dom.raf(() => {
                console.debug('[OUT] page load -> write nav state');
                this.writeNavStateRoot();
            });
        }
    }
    onURLHashChanged() {
        if (!this.isBlocked()) {
            console.debug('[OUT] hash changed -> write nav state');
            this.writeNavStateRoot();
        }
    }
    onNavChanged(ev) {
        if (this.isBlocked()) {
            return;
        }
        debugger;
        console.debug('[IN] nav changed -> update URL');
        const { stack, pivot } = this.readNavState();
        if (pivot) {
            // readNavState() found a pivot that is not initialized
            console.debug('[IN] pivot uninitialized -> write partial nav state');
            this.writeNavState(pivot, []);
        }
        const isPop = ev.detail.isPop === true;
        this.setURL(generateURL(stack), isPop);
    }
    setURL(url, isPop) {
        url = this.basePrefix + url;
        const history = window.history;
        if (isPop) {
            history.back();
            history.replaceState(null, null, url);
        }
        else {
            history.pushState(null, null, url);
        }
    }
    isBlocked() {
        return this.busy || !this.enabled;
    }
    writeNavStateRoot() {
        const node = document.querySelector('ion-app');
        return this.writeNavState(node, this.readURL());
    }
    writeNavState(node, url) {
        const segments = new RouterSegments(url);
        this.busy = true; //  prevents reentrance
        return writeNavState(node, segments)
            .catch(err => console.error(err))
            .then(() => this.busy = false);
    }
    readNavState() {
        let root = document.querySelector('ion-app');
        return readNavState(root);
    }
    isHash() {
        return this.basePrefix.length > 0 && this.basePrefix[0] === '#';
    }
    readURL() {
        const url = this.isHash()
            ? window.location.hash.substr(1)
            : window.location.pathname;
        return parseURL(url);
    }
}
