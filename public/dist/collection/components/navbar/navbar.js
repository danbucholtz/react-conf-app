import { createThemedClasses } from '../../utils/theme';
import { Config } from '../../index';
export class Navbar {
    constructor() {
        this.hideBackButton = false;
        this.hidden = false;
    }
    backButtonClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log('back button click');
    }
    componentDidLoad() {
        const buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('button-type', 'bar-button');
        }
    }
    hostData() {
        return {
            class: {
                'statusbar-padding': this.config.getBoolean('statusbarPadding')
            }
        };
    }
    render() {
        const backButtonIcon = this.backButtonIcon || this.config.get('backButtonText', 'Back');
        const backButtonText = this.backButtonText || this.config.get('backButtonIcon', 'Back');
        const backgroundCss = createThemedClasses(this.mode, this.color, 'toolbar-background');
        const contentCss = createThemedClasses(this.mode, this.color, 'toolbar-content');
        const backButtonCss = createThemedClasses(this.mode, this.color, 'back-button');
        const backButtonIconCss = createThemedClasses(this.mode, this.color, 'back-button-icon');
        const backButtonTextCss = createThemedClasses(this.mode, this.color, 'back-button-text');
        return [
            h("div", { class: backgroundCss }),
            h("button", { onClick: this.backButtonClick.bind(this), class: backButtonCss, hidden: this.hideBackButton },
                backButtonIcon
                    ? h("ion-icon", { class: backButtonIconCss, name: backButtonIcon })
                    : null,
                h("span", { class: backButtonTextCss }, backButtonText)),
            h("slot", { name: 'start' }),
            h("slot", { name: 'mode-start' }),
            h("slot", { name: 'mode-end' }),
            h("slot", { name: 'end' }),
            h("div", { class: contentCss },
                h("slot", null))
        ];
    }
}
