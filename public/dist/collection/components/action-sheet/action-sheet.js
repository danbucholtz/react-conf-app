import { CssClassMap, EventEmitter } from '@stencil/core';
import { Animation, AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import { domControllerAsync, playAnimationAsync } from '../../utils/helpers';
import { createThemedClasses } from '../../utils/theme';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export class ActionSheet {
    constructor() {
        /**
         * If true, the action-sheet will be dismissed when the backdrop is clicked.
         */
        this.enableBackdropDismiss = true;
        /**
         * If true, action-sheet will become translucent. Requires support for backdrop-filters.
         */
        this.translucent = false;
        /**
         * Enable action-sheet animations. If false, action-sheet will not animate in
         */
        this.animate = true;
    }
    /**
     * Present the action-sheet after is has been created
     */
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionActionSheetWillPresent.emit();
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('actionSheetEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
        // build the animation and kick it off
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            if (!this.animate) {
                // if the duration is 0, it won't actually animate I don't think
                // TODO - validate this
                this.animation = animation.duration(0);
            }
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            this.ionActionSheetDidPresent.emit();
        });
    }
    /**
     * Dismiss the action-sheet programatically
     */
    dismiss(data, role) {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionActionSheetWillDismiss.emit({
            data,
            role
        });
        const animationBuilder = this.leaveAnimation || this.config.get('actionSheetLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            return domControllerAsync(Context.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        }).then(() => {
            this.ionActionSheetDidDismiss.emit({
                data,
                role
            });
        });
    }
    componentDidLoad() {
        this.ionActionSheetDidLoad.emit();
    }
    componentDidUnload() {
        this.ionActionSheetDidUnload.emit();
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    backdropClick() {
        if (this.enableBackdropDismiss) {
            this.dismiss();
        }
    }
    buttonClass(button) {
        let buttonClass = !button.role
            ? ['action-sheet-button']
            : [`action-sheet-button`, `action-sheet-${button.role}`];
        if (button.cssClass) {
            let customClass = button.cssClass.split(' ').filter(b => b.trim() !== '').join(' ');
            buttonClass.push(customClass);
        }
        return buttonClass.reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    }
    buttonClick(button) {
        let shouldDismiss = true;
        if (button.handler) {
            if (button.handler() === false) {
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss();
        }
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'action-sheet-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses
        };
    }
    render() {
        if (this.cssClass) {
            this.cssClass.split(' ').forEach(cssClass => {
                if (cssClass.trim() !== '')
                    this.el.classList.add(cssClass);
            });
        }
        let cancelButton;
        let buttons = this.buttons
            .map(b => {
            if (typeof b === 'string') {
                b = { text: b };
            }
            if (!b.cssClass) {
                b.cssClass = '';
            }
            if (b.role === 'cancel') {
                cancelButton = b;
                return null;
            }
            return b;
        })
            .filter(b => b !== null);
        return [
            h("ion-backdrop", { onClick: this.backdropClick.bind(this), class: 'action-sheet-backdrop' }),
            h("div", { class: 'action-sheet-wrapper', role: 'dialog' },
                h("div", { class: 'action-sheet-container' },
                    h("div", { class: 'action-sheet-group' },
                        this.title
                            ? h("div", { class: 'action-sheet-title' }, this.title)
                            : null,
                        this.subTitle
                            ? h("div", { class: 'action-sheet-sub-title' }, this.subTitle)
                            : null,
                        buttons.map(b => h("button", { class: this.buttonClass(b), onClick: () => this.buttonClick(b) },
                            h("span", { class: 'button-inner' },
                                b.icon
                                    ? h("ion-icon", { name: b.icon, class: 'action-sheet-icon' })
                                    : null,
                                b.text)))),
                    cancelButton
                        ? h("div", { class: 'action-sheet-group action-sheet-group-cancel' },
                            h("button", { class: this.buttonClass(cancelButton), onClick: () => this.buttonClick(cancelButton) },
                                h("span", { class: 'button-inner' },
                                    cancelButton.icon
                                        ? h("ion-icon", { name: cancelButton.icon, class: 'action-sheet-icon' })
                                        : null,
                                    cancelButton.text)))
                        : null))
        ];
    }
}
export { iosEnterAnimation as iosActionSheetEnterAnimation, iosLeaveAnimation as iosActionSheetLeaveAnimation, mdEnterAnimation as mdActionSheetEnterAnimation, mdLeaveAnimation as mdActionSheetetLeaveAnimation, };
