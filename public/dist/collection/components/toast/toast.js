import { EventEmitter } from '@stencil/core';
import { Animation, AnimationBuilder, AnimationController, Config, CssClassMap, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import { domControllerAsync, playAnimationAsync } from '../../utils/helpers';
import { createThemedClasses } from '../../utils/theme';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export class Toast {
    constructor() {
        this.translucent = false;
    }
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionToastWillPresent.emit();
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('toastEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
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
            this.componentDidEnter();
        });
    }
    dismiss(data, role) {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionToastWillDismiss.emit({
            data,
            role
        });
        const animationBuilder = this.leaveAnimation || this.config.get('toastLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            return domControllerAsync(Context.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        }).then(() => {
            this.ionToastDidDismiss.emit({
                data,
                role
            });
        });
    }
    componentDidLoad() {
        this.ionToastDidLoad.emit();
    }
    componentDidEnter() {
        this.ionToastDidPresent.emit();
        if (this.duration) {
            setTimeout(() => {
                this.dismiss();
            }, this.duration);
        }
    }
    componentDidUnload() {
        this.ionToastDidUnload.emit();
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    wrapperClass() {
        let wrapperClass = !this.position
            ? ['toast-wrapper', 'toast-bottom']
            : [`toast-wrapper`, `toast-${this.position}`];
        return wrapperClass.reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'toast-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses
        };
    }
    render() {
        let userCssClass = 'toast-content';
        if (this.cssClass) {
            userCssClass += ' ' + this.cssClass;
        }
        return (h("div", { class: this.wrapperClass() },
            h("div", { class: 'toast-container' },
                this.message
                    ? h("div", { class: 'toast-message' }, this.message)
                    : null,
                this.showCloseButton
                    ? h("ion-button", { fill: 'clear', color: 'light', class: 'toast-button', onClick: () => this.dismiss() }, this.closeButtonText || 'Close')
                    : null)));
    }
}
export { iosEnterAnimation as iosToastEnterAnimation, iosLeaveAnimation as iosToastLeaveAnimation, mdEnterAnimation as mdToastEnterAnimation, mdLeaveAnimation as mdToastLeaveAnimation };
