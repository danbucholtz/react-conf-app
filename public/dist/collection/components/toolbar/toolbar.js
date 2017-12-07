import { createThemedClasses } from '../../utils/theme';
import { Config } from '../../index';
export class Toolbar {
    constructor() {
        /**
         * @input {boolean} If true, adds transparency to the header.
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
    }
    componentDidLoad() {
        const buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('button-type', 'bar-button');
        }
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'toolbar-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses, { 'statusbar-padding': this.config.getBoolean('statusbarPadding') });
        return {
            class: hostClasses
        };
    }
    render() {
        const backgroundCss = createThemedClasses(this.mode, this.color, 'toolbar-background');
        const contentCss = createThemedClasses(this.mode, this.color, 'toolbar-content');
        return [
            h("div", { class: backgroundCss }),
            h("slot", { name: 'start' }),
            h("slot", { name: 'mode-start' }),
            h("slot", { name: 'mode-end' }),
            h("slot", { name: 'end' }),
            h("div", { class: contentCss },
                h("slot", null))
        ];
    }
}
