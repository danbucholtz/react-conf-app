import { EventEmitter } from '@stencil/core';
import { Animation, AnimationBuilder, AnimationController, Config, OverlayDismissEvent, OverlayDismissEventDetail } from '../../index';
import { domControllerAsync, playAnimationAsync } from '../../utils/helpers';
import { createThemedClasses } from '../../utils/theme';
import iosEnterAnimation from './animations/ios.enter';
import iosLeaveAnimation from './animations/ios.leave';
import mdEnterAnimation from './animations/md.enter';
import mdLeaveAnimation from './animations/md.leave';
export class Loading {
    constructor() {
        /**
         * Dismiss the loading indicator if the page is changed
         */
        this.dismissOnPageChange = false;
        /**
         * If true, the background will be translucent. Browser support for backdrop-filter is required for the full effect
         */
        this.translucent = false;
        /**
         * Show the backdrop of not
         */
        this.showBackdrop = true;
        /**
         * Toggles whether animation should occur or not
         */
        this.animate = true;
    }
    /**
     * Present a loading overlay after it has been created
     */
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionLoadingWillPresent.emit();
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('loadingEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
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
    /**
     * Dismiss a loading indicator programatically
     */
    dismiss(data, role) {
        clearTimeout(this.durationTimeout);
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionLoadingWillDismiss.emit({
            data,
            role
        });
        const animationBuilder = this.leaveAnimation || this.config.get('loadingLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            return domControllerAsync(Context.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        }).then(() => {
            this.ionLoadingDidDismiss.emit({
                data,
                role
            });
        });
    }
    componentDidLoad() {
        if (!this.spinner) {
            this.spinner = this.config.get('loadingSPinner', this.mode === 'ios' ? 'lines' : 'crescent');
        }
        this.ionLoadingDidLoad.emit();
    }
    componentDidEnter() {
        // blur the currently active element
        const activeElement = document.activeElement;
        activeElement && activeElement.blur && activeElement.blur();
        // If there is a duration, dismiss after that amount of time
        if (typeof this.duration === 'number' && this.duration > 10) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
        }
        this.ionLoadingDidPresent.emit();
    }
    componentDidUnload() {
        this.ionLoadingDidUnload.emit();
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'loading-translucent') : {};
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
        const loadingInner = [];
        if (this.spinner !== 'hide') {
            loadingInner.push(h("div", { class: 'loading-spinner' },
                h("ion-spinner", { name: this.spinner })));
        }
        if (this.content) {
            loadingInner.push(h("div", { class: 'loading-content' }, this.content));
        }
        return [
            h("ion-gesture", { attachTo: 'parent', autoBlockAll: true, class: {
                    'loading-backdrop': true,
                    'hide-backdrop': !this.showBackdrop
                } }),
            h("div", { class: 'loading-wrapper', role: 'dialog' }, loadingInner)
        ];
    }
}
export { iosEnterAnimation as iosLoadingEnterAnimation, iosLeaveAnimation as iosLoadingLeaveAnimation, mdEnterAnimation as mdLoadingEnterAnimation, mdLeaveAnimation as mdLoadingLeaveAnimation };
