import { Config } from '../../index';
import { createThemedClasses, getElementClassObject } from '../../utils/theme';
import { getPageElement } from '../../utils/helpers';
export class Content {
    constructor() {
        this.cTop = 0;
        this.cBottom = 0;
        this.dirty = false;
        /**
         * @input {boolean} If true, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
    }
    onNavChanged() {
        this.resize();
    }
    componentDidLoad() {
        this.scrollEl = this.el.querySelector('ion-scroll');
        this.resize();
    }
    componentDidUnload() {
        this.scrollEl = null;
    }
    hostData() {
        return {
            class: {
                'statusbar-padding': this.config.getBoolean('statusbarPadding')
            }
        };
    }
    enableJsScroll() {
        this.scrollEl.jsScroll = true;
    }
    /**
     * Scroll to the top of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    scrollToTop(duration = 300) {
        return this.scrollEl.scrollToTop(duration);
    }
    /**
     * Scroll to the bottom of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    scrollToBottom(duration = 300) {
        return this.scrollEl.scrollToBottom(duration);
    }
    resize() {
        if (!this.scrollEl) {
            return;
        }
        if (this.fullscreen) {
            Context.dom.raf(() => {
                Context.dom.read(this.readDimensions.bind(this));
                Context.dom.write(this.writeDimensions.bind(this));
            });
        }
        else {
            this.cTop = this.cBottom = null;
            Context.dom.write(() => this.scrollEl.removeAttribute('style'));
        }
    }
    readDimensions() {
        const page = getPageElement(this.el);
        const top = Math.max(this.el.offsetTop, 0);
        const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        this.dirty = top !== this.cTop || bottom !== this.cBottom;
        this.cTop = top;
        this.cBottom = bottom;
    }
    writeDimensions() {
        if (this.dirty && this.scrollEl) {
            const style = this.scrollEl.style;
            style.paddingTop = this.cTop + 'px';
            style.paddingBottom = this.cBottom + 'px';
            style.top = -this.cTop + 'px';
            style.bottom = -this.cBottom + 'px';
            this.dirty = false;
        }
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'content');
        const hostClasses = getElementClassObject(this.el.classList);
        const scrollClasses = Object.assign({}, themedClasses, hostClasses);
        this.resize();
        return [
            h("ion-scroll", { class: scrollClasses },
                h("slot", null)),
            h("slot", { name: 'fixed' })
        ];
    }
}
