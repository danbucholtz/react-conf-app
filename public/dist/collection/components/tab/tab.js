import { EventEmitter } from '@stencil/core';
import { PublicViewController, StencilElement } from '../../index';
export class Tab {
    constructor() {
        this.init = false;
        this.active = false;
        /**
         * @input {string} The badge color for the tab button.
         */
        this.badgeStyle = 'default';
        /**
         * @input {boolean} If true, enable the tab. If false,
         * the user cannot interact with this element.
         * Default: `true`.
         */
        this.enabled = true;
        /**
         * @input {boolean} If true, the tab button is visible within the
         * tabbar. Default: `true`.
         */
        this.show = true;
        /**
         * @input {boolean} If true, hide the tabs on child pages.
         */
        this.tabsHideOnSubPages = false;
        this.selected = false;
        this.nav = new Promise((resolve) => this.resolveNav = resolve);
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit(this.el);
        }
    }
    componentDidUpdate() {
        if (this.init && this.resolveNav) {
            const nav = this.el.querySelector('ion-nav');
            nav.componentOnReady(this.resolveNav);
            this.resolveNav = null;
        }
    }
    _setActive(shouldActive) {
        if (this.active === shouldActive) {
            return Promise.resolve();
        }
        this.active = shouldActive;
        this.selected = shouldActive;
        const needsLifecycle = this.init;
        if (shouldActive) {
            this.init = true;
        }
        if (needsLifecycle) {
            if (shouldActive) {
                // lifecycle didEnter
            }
            else {
                // lifecycle didLeave
            }
        }
        return this.nav;
    }
    getPath() {
        if (this.path != null) {
            return this.path;
        }
        if (this.title) {
            return this.title.toLowerCase();
        }
        return '';
    }
    goToRoot(opts = {}) {
        return this.nav.then(nav => nav && nav.setRoot(nav.root, null, opts));
    }
    getActive() {
        return this.nav.then(nav => nav && nav.getActive());
    }
    getNav() {
        return this.nav;
    }
    hostData() {
        const visible = this.active && this.selected;
        return {
            'aria-hidden': !visible ? 'true' : null,
            'aria-labelledby': this.btnId,
            'role': 'tabpanel',
            class: {
                'show-tab': this.active
            }
        };
    }
    render() {
        if (this.init) {
            return h("ion-nav", null,
                h("slot", null));
        }
        return null;
    }
}
