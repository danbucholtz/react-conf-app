/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-loading_ios","ion-loading {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  contain: strict;\n}\n\nion-loading ion-gesture {\n  display: block;\n  width: 100%;\n  height: 100%;\n  visibility: inherit;\n}\n\nion-loading-controller {\n  display: none;\n}\n\n.loading-backdrop {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: .01;\n  transform: translateZ(0);\n}\n\n.loading-wrapper {\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n}\n\n.loading-ios .loading-wrapper {\n  border-radius: 8px;\n  padding: 24px 34px;\n  max-width: 270px;\n  max-height: 90%;\n  color: #000;\n  background: #f8f8f8;\n}\n\n.loading-translucent-ios .loading-wrapper {\n  background: rgba(248, 248, 248, 0.88);\n  backdrop-filter: saturate(180%) blur(20px);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n}\n\n.loading-ios .loading-content {\n  font-weight: bold;\n}\n\n.loading-ios .loading-spinner + .loading-content {\n  margin-left: 16px;\n}\n\n.loading-ios .spinner-ios line,\n.loading-ios .spinner-ios-small line {\n  stroke: #69717d;\n}\n\n.loading-ios .spinner-bubbles circle {\n  fill: #69717d;\n}\n\n.loading-ios .spinner-circles circle {\n  fill: #69717d;\n}\n\n.loading-ios .spinner-crescent circle {\n  stroke: #69717d;\n}\n\n.loading-ios .spinner-dots circle {\n  fill: #69717d;\n}\nion-loading.hydrated{visibility:inherit}","ion-loading-controller_ios","\nion-loading-controller.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-loading.ios",

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
 * iOS Loading Enter Animation
 */
function iosEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.loading-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.loading-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.3);
    wrapperAnimation.fromTo('opacity', 0.01, 1)
        .fromTo('scale', 1.1, 1);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * iOS Loading Leave Animation
 */
function iosLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.loading-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.loading-wrapper'));
    backdropAnimation.fromTo('opacity', 0.3, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0)
        .fromTo('scale', 1, 0.9);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * Md Loading Enter Animation
 */
function mdEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.loading-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.loading-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.5);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * Md Loading Leave Animation
 */
function mdLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.loading-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.loading-wrapper'));
    backdropAnimation.fromTo('opacity', 0.5, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

class Loading {
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

class LoadingController {
    constructor() {
        this.ids = 0;
        this.loadingResolves = {};
        this.loadings = [];
    }
    /**
     * Create a loading overlay and pass options to it
     */
    create(opts) {
        // create ionic's wrapping ion-loading component
        const loading = document.createElement('ion-loading');
        const id = this.ids++;
        // give this loading a unique id
        loading.loadingId = `loading-${id}`;
        loading.style.zIndex = (20000 + id).toString();
        // convert the passed in loading options into props
        // that get passed down into the new loading
        Object.assign(loading, opts);
        // append the loading element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(loading);
        // store the resolve function to be called later up when the loading loads
        return new Promise(resolve => {
            this.loadingResolves[loading.loadingId] = resolve;
        });
    }
    didLoad(ev) {
        const loading = ev.target;
        const loadingResolve = this.loadingResolves[loading.loadingId];
        if (loadingResolve) {
            loadingResolve(loading);
            delete this.loadingResolves[loading.loadingId];
        }
    }
    willPresent(ev) {
        this.loadings.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.loadings.indexOf(ev.target);
        if (index > -1) {
            this.loadings.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastLoading = this.loadings[this.loadings.length - 1];
        if (lastLoading) {
            lastLoading.dismiss();
        }
    }
}

exports['ion-loading'] = Loading;
exports['ion-loading-controller'] = LoadingController;
},


/***************** ion-loading *****************/
[
/** ion-loading: tag **/
"ion-loading",

/** ion-loading: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "content", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismiss", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "dismissOnPageChange", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "duration", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "leaveAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "present", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "showBackdrop", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "spinner", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-loading: host **/
{"theme":"loading"},

/** ion-loading: events **/
[
  [
    /*****  ion-loading ionLoadingDidLoad ***** /
    /* event name ***/ "ionLoadingDidLoad"
  ],
  [
    /*****  ion-loading ionLoadingDidPresent ***** /
    /* event name ***/ "ionLoadingDidPresent"
  ],
  [
    /*****  ion-loading ionLoadingWillPresent ***** /
    /* event name ***/ "ionLoadingWillPresent"
  ],
  [
    /*****  ion-loading ionLoadingWillDismiss ***** /
    /* event name ***/ "ionLoadingWillDismiss"
  ],
  [
    /*****  ion-loading ionLoadingDidDismiss ***** /
    /* event name ***/ "ionLoadingDidDismiss"
  ],
  [
    /*****  ion-loading ionLoadingDidUnload ***** /
    /* event name ***/ "ionLoadingDidUnload"
  ]
]

],

/***************** ion-loading-controller *****************/
[
/** ion-loading-controller: tag **/
"ion-loading-controller",

/** ion-loading-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-loading-controller: host **/
{}

]
);