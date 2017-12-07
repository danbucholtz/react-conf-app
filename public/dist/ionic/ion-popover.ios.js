/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-popover_ios","ion-popover {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.popover-wrapper {\n  z-index: 10;\n  opacity: 0;\n}\n\n.popover-content {\n  position: absolute;\n  z-index: 10;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n.popover-content ion-content,\n.popover-content ion-scroll {\n  contain: none;\n}\n\n.popover-content ion-scroll {\n  position: relative;\n}\n\nion-popover-controller {\n  display: none;\n}\n\n.popover-backdrop {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: .01;\n  transform: translateZ(0);\n}\n\n.popover-backdrop.backdrop-no-tappable {\n  cursor: auto;\n}\n\n.popover-ios .popover-content {\n  border-radius: 10px;\n  width: 200px;\n  min-width: 0;\n  min-height: 0;\n  max-height: 90%;\n  color: #000;\n  background: #fff;\n}\n\n.popover-ios .popover-arrow {\n  position: absolute;\n  display: block;\n  overflow: hidden;\n  width: 20px;\n  height: 10px;\n}\n\n.popover-ios .popover-arrow::after {\n  left: 3px;\n  top: 3px;\n  border-radius: 3px;\n  position: absolute;\n  z-index: 10;\n  width: 14px;\n  height: 14px;\n  background-color: #fff;\n  content: \"\";\n  transform: rotate(45deg);\n}\n\n.popover-ios.popover-bottom .popover-arrow {\n  top: auto;\n  bottom: -10px;\n}\n\n.popover-ios.popover-bottom .popover-arrow::after {\n  top: -6px;\n}\n\n.popover-translucent-ios .popover-content,\n.popover-translucent-ios .popover-arrow::after {\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\nion-popover.hydrated{visibility:inherit}","ion-popover-controller_ios","\nion-popover-controller.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-popover.ios",

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
 * iOS Popover Enter Animation
 */
function iosEnterAnimation(Animation, baseElm, ev) {
    let originY = 'top';
    let originX = 'left';
    let contentEl = baseElm.querySelector('.popover-content');
    let contentDimentions = contentEl.getBoundingClientRect();
    let contentWidth = contentDimentions.width;
    let contentHeight = contentDimentions.height;
    let bodyWidth = window.innerWidth;
    let bodyHeight = window.innerHeight;
    // If ev was passed, use that for target element
    let targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    let targetTop = targetDim && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    let targetLeft = targetDim && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    let targetWidth = (targetDim && targetDim.width) || 0;
    let targetHeight = (targetDim && targetDim.height) || 0;
    let arrowEl = baseElm.querySelector('.popover-arrow');
    let arrowDim = arrowEl.getBoundingClientRect();
    let arrowWidth = arrowDim.width;
    let arrowHeight = arrowDim.height;
    if (!targetDim) {
        arrowEl.style.display = 'none';
    }
    let arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    let popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    //
    let checkSafeAreaLeft = false;
    let checkSafeAreaRight = false;
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    // 25 is a random/arbitrary number. It seems to work fine for ios11
    // and iPhoneX. Is it perfect? No. Does it work? Yes.
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 >
        bodyWidth) {
        // Ok, so we're on the right side of the screen,
        // but now we need to make sure we're still a bit further right
        // cus....notchurally... Again, 25 is random. It works tho
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseElm.className = baseElm.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        if (CSS.supports('left', 'constant(safe-area-inset-left)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px + constant(safe-area-inset-left)`;
        }
        else if (CSS.supports('left', 'env(safe-area-inset-left)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px + env(safe-area-inset-left)`;
        }
    }
    if (checkSafeAreaRight) {
        if (CSS.supports('right', 'constant(safe-area-inset-right)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px - constant(safe-area-inset-right)`;
        }
        else if (CSS.supports('right', 'env(safe-area-inset-right)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px - env(safe-area-inset-right)`;
        }
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.popover-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease')
        .duration(100)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}
const POPOVER_IOS_BODY_PADDING = 5;

/**
 * iOS Popover Leave Animation
 */
function iosLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.popover-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * Md Popover Enter Animation
 */
function mdEnterAnimation(Animation, baseElm, ev) {
    let originY = 'top';
    let originX = 'left';
    let contentEl = baseElm.querySelector('.popover-content');
    let contentDimentions = contentEl.getBoundingClientRect();
    let contentWidth = contentDimentions.width;
    let contentHeight = contentDimentions.height;
    let bodyWidth = window.innerWidth;
    let bodyHeight = window.innerHeight;
    // If ev was passed, use that for target element
    let targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    let targetTop = targetDim && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    let targetLeft = targetDim && 'left' in targetDim
        ? targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    let targetHeight = (targetDim && targetDim.height) || 0;
    let popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        originX = 'right';
    }
    // If the popover when popped down stretches past bottom of screen,
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight;
        baseElm.className = baseElm.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    contentEl.style.transformOrigin = originY + ' ' + originX;
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.popover-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    const contentAnimation = new Animation();
    contentAnimation.addElement(baseElm.querySelector('.popover-content'));
    contentAnimation.fromTo('scale', 0.001, 1);
    const viewportAnimation = new Animation();
    viewportAnimation.addElement(baseElm.querySelector('.popover-viewport'));
    viewportAnimation.fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .add(backdropAnimation)
        .add(wrapperAnimation)
        .add(contentAnimation)
        .add(viewportAnimation);
}
const POPOVER_MD_BODY_PADDING = 12;

/**
 * Md Popover Leave Animation
 */
function mdLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.popover-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

class Popover {
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

class PopoverController {
    constructor() {
        this.ids = 0;
        this.popoverResolves = {};
        this.popovers = [];
    }
    /**
     * Create a popover component instance
     * @param opts Options when creating a new popover instance
     */
    create(opts) {
        // create ionic's wrapping ion-popover component
        const popover = document.createElement('ion-popover');
        const id = this.ids++;
        // give this popover a unique id
        popover.popoverId = `popover-${id}`;
        popover.style.zIndex = (10000 + id).toString();
        // convert the passed in popover options into props
        // that get passed down into the new popover
        Object.assign(popover, opts);
        // append the popover element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(popover);
        // store the resolve function to be called later up when the popover loads
        return new Promise(resolve => {
            this.popoverResolves[popover.popoverId] = resolve;
        });
    }
    didLoad(ev) {
        const popover = ev.target;
        const popoverResolve = this.popoverResolves[popover.popoverId];
        if (popoverResolve) {
            popoverResolve(popover);
            delete this.popoverResolves[popover.popoverId];
        }
    }
    willPresent(ev) {
        this.popovers.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.popovers.indexOf(ev.target);
        if (index > -1) {
            this.popovers.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastPopover = this.popovers[this.popovers.length - 1];
        if (lastPopover) {
            lastPopover.dismiss();
        }
    }
}

exports['ion-popover'] = Popover;
exports['ion-popover-controller'] = PopoverController;
},


/***************** ion-popover *****************/
[
/** ion-popover: tag **/
"ion-popover",

/** ion-popover: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "component", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "componentProps", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismiss", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableBackdropDismiss", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "ev", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "leaveAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "popoverId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "present", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "showBackdrop", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-popover: host **/
{"theme":"popover"},

/** ion-popover: events **/
[
  [
    /*****  ion-popover ionPopoverDidLoad ***** /
    /* event name ***/ "ionPopoverDidLoad"
  ],
  [
    /*****  ion-popover ionPopoverDidPresent ***** /
    /* event name ***/ "ionPopoverDidPresent"
  ],
  [
    /*****  ion-popover ionPopoverWillPresent ***** /
    /* event name ***/ "ionPopoverWillPresent"
  ],
  [
    /*****  ion-popover ionPopoverWillDismiss ***** /
    /* event name ***/ "ionPopoverWillDismiss"
  ],
  [
    /*****  ion-popover ionPopoverDidDismiss ***** /
    /* event name ***/ "ionPopoverDidDismiss"
  ],
  [
    /*****  ion-popover ionPopoverDidUnload ***** /
    /* event name ***/ "ionPopoverDidUnload"
  ]
]

],

/***************** ion-popover-controller *****************/
[
/** ion-popover-controller: tag **/
"ion-popover-controller",

/** ion-popover-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-popover-controller: host **/
{}

]
);