import { EventEmitter } from '@stencil/core';
import { Animation, AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import { domControllerAsync, playAnimationAsync } from '../../utils/helpers';
import { createThemedClasses } from '../../utils/theme';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export class Popover {
    constructor() {
        this.componentProps = {};
        this.enableBackdropDismiss = true;
        this.showBackdrop = true;
        this.translucent = false;
        this.animate = true;
    }
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionPopoverWillPresent.emit();
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('popoverEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
        // build the animation and kick it off
        return this.animationCtrl.create(animationBuilder, this.el, this.ev).then(animation => {
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
        this.ionPopoverWillDismiss.emit({
            data,
            role
        });
        const animationBuilder = this.leaveAnimation || this.config.get('popoverLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            return domControllerAsync(Context.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        }).then(() => {
            this.ionPopoverDidDismiss.emit({
                data,
                role
            });
        });
    }
    componentDidLoad() {
        this.ionPopoverDidLoad.emit();
    }
    componentDidEnter() {
        this.ionPopoverDidPresent.emit();
    }
    componentDidUnload() {
        this.ionPopoverDidUnload.emit();
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    backdropClick() {
        if (this.enableBackdropDismiss) {
            // const opts: NavOptions = {
            //   minClickBlockDuration: 400
            // };
            this.dismiss();
        }
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'popover-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses
        };
    }
    render() {
        const ThisComponent = this.component;
        const wrapperClasses = createThemedClasses(this.mode, this.color, 'popover-wrapper');
        return [
            h("ion-backdrop", { onClick: this.backdropClick.bind(this), class: 'popover-backdrop' }),
            h("div", { class: wrapperClasses },
                h("div", { class: 'popover-arrow' }),
                h("div", { class: 'popover-content' },
                    h("div", { class: 'popover-viewport' },
                        h(ThisComponent, Object.assign({}, this.componentProps, { class: this.cssClass })))))
        ];
    }
}
export const POPOVER_POSITION_PROPERTIES = {
    ios: {
        padding: 2,
        unit: '%',
        showArrow: true,
        centerTarget: true
    },
    md: {
        padding: 12,
        unit: 'px',
        showArrow: false,
        centerTarget: false
    }
};
export { iosEnterAnimation as iosPopoverEnterAnimation, iosLeaveAnimation as iosPopoverLeaveAnimation, mdEnterAnimation as mdPopoverEnterAnimation, mdLeaveAnimation as mdPopoverLeaveAnimation };
