/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-toast_ios","ion-toast {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 1000;\n  display: block;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  contain: strict;\n}\n\n.toast-container {\n  display: flex;\n  align-items: center;\n  pointer-events: auto;\n  contain: content;\n}\n\n.toast-button {\n  font-size: 15px;\n}\n\n.toast-message {\n  flex: 1;\n}\n\n.toast-ios .toast-wrapper {\n  left: 10px;\n  right: 10px;\n  margin: auto;\n  border-radius: 14px;\n  position: absolute;\n  z-index: 10;\n  display: block;\n  max-width: 700px;\n  background: #ededef;\n}\n\n.toast-translucent-ios .toast-wrapper {\n  background: rgba(237, 237, 239, 0.88);\n  backdrop-filter: saturate(180%) blur(20px);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n}\n\n.toast-ios .toast-wrapper.toast-top {\n  transform: translate3d(0,  -100%,  0);\n  top: 0;\n}\n\n.toast-ios .toast-wrapper.toast-bottom {\n  transform: translate3d(0,  100%,  0);\n  bottom: 0;\n}\n\n.toast-ios .toast-wrapper.toast-middle {\n  opacity: .01;\n}\n\n.toast-ios .toast-message {\n  padding: 15px;\n  font-size: 14px;\n  color: #474747;\n}\n\n.toast-ios .toast-button {\n  color: #474747;\n}\nion-toast.hydrated{visibility:inherit}","ion-toast-controller_ios","\nion-toast-controller.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-toast.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

/** @hidden */












/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */

/** @hidden */



/** @hidden */








/**
 * @private
 */

function playAnimationAsync(animation) {
    return new Promise((resolve) => {
        animation.onFinish((ani) => {
            resolve(ani);
        });
        animation.play();
    });
}
function domControllerAsync(domControllerFunction, callback) {
    return new Promise((resolve) => {
        domControllerFunction(() => {
            callback();
            resolve();
        });
    });
}

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    let classObj = {};
    return classes.split(' ')
        .reduce((classObj, classString) => {
        classObj[classString] = true;
        if (mode) {
            classObj[`${classString}-${mode}`] = true;
            if (color) {
                classObj[`${classString}-${color}`] = true;
                classObj[`${classString}-${mode}-${color}`] = true;
            }
        }
        return classObj;
    }, classObj);
}
/**
 * Get the classes from a class list and return them as an object
 */

/**
 * iOS Toast Enter Animation
 */
function iosEnterAnimation(Animation, baseElm, position) {
    const baseAnimation = new Animation();
    const wrapperAnimation = new Animation();
    const wrapperEle = baseElm.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', '10px');
            break;
        case 'middle':
            let topPosition = Math.floor(baseElm.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', '-10px');
            break;
    }
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .add(wrapperAnimation);
}

/**
 * iOS Toast Leave Animation
 */
function iosLeaveAnimation(Animation, baseElm, position) {
    const baseAnimation = new Animation();
    const wrapperAnimation = new Animation();
    const wrapperEle = baseElm.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', `${10}px`, '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', `${0 - 10}px`, '100%');
            break;
    }
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation);
}

/**
 * MD Toast Enter Animation
 */
function mdEnterAnimation(Animation, baseElm, position) {
    const baseAnimation = new Animation();
    const wrapperAnimation = new Animation();
    const wrapperEle = baseElm.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', '0%');
            break;
        case 'middle':
            let topPosition = Math.floor(baseElm.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', '0%');
            break;
    }
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(wrapperAnimation);
}

/**
 * md Toast Leave Animation
 */
function mdLeaveAnimation(Animation, baseElm, position) {
    const baseAnimation = new Animation();
    const wrapperAnimation = new Animation();
    const wrapperEle = baseElm.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '0px', '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', `0px`, '100%');
            break;
    }
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation);
}

class Toast {
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

class ToastController {
    constructor() {
        this.ids = 0;
        this.toastResolves = {};
        this.toasts = [];
    }
    create(opts) {
        // create ionic's wrapping ion-toast component
        const toast = document.createElement('ion-toast');
        const id = this.ids++;
        // give this toast a unique id
        toast.toastId = `toast-${id}`;
        toast.style.zIndex = (10000 + id).toString();
        // convert the passed in toast options into props
        // that get passed down into the new toast
        Object.assign(toast, opts);
        // append the toast element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(toast);
        // store the resolve function to be called later up when the toast loads
        return new Promise(resolve => {
            this.toastResolves[toast.toastId] = resolve;
        });
    }
    didLoad(ev) {
        const toast = ev.target;
        const toastResolve = this.toastResolves[toast.toastId];
        if (toastResolve) {
            toastResolve(toast);
            delete this.toastResolves[toast.toastId];
        }
    }
    willPresent(ev) {
        this.toasts.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.toasts.indexOf(ev.target);
        if (index > -1) {
            this.toasts.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastToast = this.toasts[this.toasts.length - 1];
        if (lastToast) {
            lastToast.dismiss();
        }
    }
}

exports['ion-toast'] = Toast;
exports['ion-toast-controller'] = ToastController;
},


/***************** ion-toast *****************/
[
/** ion-toast: tag **/
"ion-toast",

/** ion-toast: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "closeButtonText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismiss", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "dismissOnPageChange", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "duration", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "leaveAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "message", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "position", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "present", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "showCloseButton", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "toastId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-toast: host **/
{"theme":"toast"},

/** ion-toast: events **/
[
  [
    /*****  ion-toast ionToastDidLoad ***** /
    /* event name ***/ "ionToastDidLoad"
  ],
  [
    /*****  ion-toast ionToastDidPresent ***** /
    /* event name ***/ "ionToastDidPresent"
  ],
  [
    /*****  ion-toast ionToastWillPresent ***** /
    /* event name ***/ "ionToastWillPresent"
  ],
  [
    /*****  ion-toast ionToastWillDismiss ***** /
    /* event name ***/ "ionToastWillDismiss"
  ],
  [
    /*****  ion-toast ionToastDidDismiss ***** /
    /* event name ***/ "ionToastDidDismiss"
  ],
  [
    /*****  ion-toast ionToastDidUnload ***** /
    /* event name ***/ "ionToastDidUnload"
  ]
]

],

/***************** ion-toast-controller *****************/
[
/** ion-toast-controller: tag **/
"ion-toast-controller",

/** ion-toast-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-toast-controller: host **/
{}

]
);