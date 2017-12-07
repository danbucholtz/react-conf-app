/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-modal_ios","ion-modal {\n  left: 0;\n  top: 0;\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  contain: strict;\n}\n\nion-modal-controller {\n  display: none;\n}\n\n.modal-backdrop {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: .01;\n  transform: translateZ(0);\n}\n\n\@media not all and (min-width: 768px) and (min-height: 600px) {\n  .modal-backdrop {\n    visibility: hidden;\n  }\n}\n\n.modal-backdrop.backdrop-no-tappable {\n  cursor: auto;\n}\n\n.modal-backdrop.hide-backdrop {\n  visibility: hidden;\n}\n\n.modal-wrapper {\n  z-index: 10;\n  height: 100%;\n  contain: strict;\n}\n\n\@media only screen and (min-width: 768px) and (min-height: 600px) {\n  .modal-wrapper {\n    left: calc(50% - (600px/2));\n    top: calc(50% - (500px/2));\n    position: absolute;\n    width: 600px;\n    height: 500px;\n  }\n}\n\n\@media only screen and (min-width: 768px) and (min-height: 768px) {\n  .modal-wrapper {\n    left: calc(50% - (600px/2));\n    top: calc(50% - (600px/2));\n    position: absolute;\n    width: 600px;\n    height: 600px;\n  }\n}\n\n.modal-wrapper-ios {\n  transform: translate3d(0,  100%,  0);\n}\n\n\@media only screen and (min-width: 768px) and (min-height: 600px) {\n  .modal-wrapper-ios {\n    border-radius: 10px;\n    overflow: hidden;\n  }\n}\nion-modal.hydrated{visibility:inherit}","ion-modal-controller_ios","\nion-modal-controller.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-modal.ios",

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
 * iOS Modal Enter Animation
 */
function iosEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.modal-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.modal-wrapper'));
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '100%', '0%');
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation);
}
/**
 * Animations for modals
 */
// export function modalSlideIn(rootElm: HTMLElement) {
// }
// export class ModalSlideOut {
//   constructor(el: HTMLElement) {
//     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
//     let wrapperEleRect = wrapperEle.getBoundingClientRect();
//     let wrapper = new Animation(this.plt, wrapperEle);
//     // height of the screen - top of the container tells us how much to scoot it down
//     // so it's off-screen
//     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     this
//       .element(this.leavingView.pageRef())
//       .easing('ease-out')
//       .duration(250)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideIn {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.01, 0.4);
//     wrapper.fromTo('translateY', '40px', '0px');
//     wrapper.fromTo('opacity', 0.01, 1);
//     const DURATION = 280;
//     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
//     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideOut {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     wrapper.fromTo('translateY', '0px', '40px');
//     wrapper.fromTo('opacity', 0.99, 0);
//     this
//       .element(this.leavingView.pageRef())
//       .duration(200)
//       .easing('cubic-bezier(0.47,0,0.745,0.715)')
//       .add(wrapper)
//       .add(backdrop);
//   }
// }

/**
 * iOS Modal Leave Animation
 */
function iosLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.modal-backdrop'));
    const wrapperAnimation = new Animation();
    const wrapperElm = baseElm.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperElm);
    const wrapperElmRect = wrapperElm.getBoundingClientRect();
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '0%', `${window.innerHeight - wrapperElmRect.top}px`);
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-out')
        .duration(250)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * Md Modal Enter Animation
 */
function mdEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.modal-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.modal-wrapper'));
    wrapperAnimation
        .fromTo('opacity', 0.01, 1)
        .fromTo('translateY', '40px', '0px');
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * Md Modal Leave Animation
 */
function mdLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.modal-backdrop'));
    const wrapperAnimation = new Animation();
    const wrapperElm = baseElm.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperElm);
    wrapperAnimation
        .fromTo('opacity', 0.99, 0)
        .fromTo('translateY', '0px', '40px');
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

class Modal {
    constructor() {
        this.data = {};
        this.enableBackdropDismiss = true;
        this.showBackdrop = true;
    }
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionModalWillPresent.emit();
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('modalEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
        // build the animation and kick it off
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
            this.ionModalDidPresent.emit();
        });
    }
    dismiss(data, role) {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionModalWillDismiss.emit({
            data,
            role
        });
        // get the user's animation fn if one was provided
        const animationBuilder = this.leaveAnimation || this.config.get('modalLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            return domControllerAsync(Context.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        }).then(() => {
            this.ionModalDidDismiss.emit({
                data,
                role
            });
        });
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    componentDidLoad() {
        this.ionModalDidLoad.emit();
    }
    componentDidUnload() {
        this.ionModalDidUnload.emit();
    }
    backdropClick() {
        if (this.enableBackdropDismiss) {
            // const opts: NavOptions = {
            //   minClickBlockDuration: 400
            // };
            this.dismiss();
        }
    }
    render() {
        const dialogClasses = createThemedClasses(this.mode, this.color, 'modal-wrapper');
        return [
            h("div", { onClick: this.backdropClick.bind(this), class: {
                    'modal-backdrop': true,
                    'hide-backdrop': !this.showBackdrop
                } }),
            h("div", { role: 'dialog', class: dialogClasses })
        ];
    }
}

class ModalController {
    constructor() {
        this.ids = 0;
        this.modalResolves = {};
        this.modals = [];
    }
    create(opts) {
        // create ionic's wrapping ion-modal component
        const modal = document.createElement('ion-modal');
        const id = this.ids++;
        // give this modal a unique id
        modal.modalId = `modal-${id}`;
        modal.style.zIndex = (10000 + id).toString();
        // convert the passed in modal options into props
        // that get passed down into the new modal
        Object.assign(modal, opts);
        // append the modal element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(modal);
        // store the resolve function to be called later up when the modal loads
        return new Promise(resolve => {
            this.modalResolves[modal.modalId] = resolve;
        });
    }
    modalDidLoad(ev) {
        const modal = ev.target;
        const modalResolve = this.modalResolves[modal.modalId];
        if (modalResolve) {
            modalResolve(modal);
            delete this.modalResolves[modal.modalId];
        }
    }
    modalWillPresent(ev) {
        this.modals.push(ev.target);
    }
    modalWillDismiss(ev) {
        const index = this.modals.indexOf(ev.target);
        if (index > -1) {
            this.modals.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastModal = this.modals[this.modals.length - 1];
        if (lastModal) {
            lastModal.dismiss();
        }
    }
}

exports['ion-modal'] = Modal;
exports['ion-modal-controller'] = ModalController;
},


/***************** ion-modal *****************/
[
/** ion-modal: tag **/
"ion-modal",

/** ion-modal: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "component", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "data", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "dismiss", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableBackdropDismiss", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "leaveAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "modalId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "present", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "showBackdrop", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-modal: host **/
{"theme":"modal"},

/** ion-modal: events **/
[
  [
    /*****  ion-modal ionModalDidLoad ***** /
    /* event name ***/ "ionModalDidLoad"
  ],
  [
    /*****  ion-modal ionModalDidPresent ***** /
    /* event name ***/ "ionModalDidPresent"
  ],
  [
    /*****  ion-modal ionModalWillPresent ***** /
    /* event name ***/ "ionModalWillPresent"
  ],
  [
    /*****  ion-modal ionModalWillDismiss ***** /
    /* event name ***/ "ionModalWillDismiss"
  ],
  [
    /*****  ion-modal ionModalDidDismiss ***** /
    /* event name ***/ "ionModalDidDismiss"
  ],
  [
    /*****  ion-modal ionModalDidUnload ***** /
    /* event name ***/ "ionModalDidUnload"
  ]
]

],

/***************** ion-modal-controller *****************/
[
/** ion-modal-controller: tag **/
"ion-modal-controller",

/** ion-modal-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-modal-controller: host **/
{}

]
);