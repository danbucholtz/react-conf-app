/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-action-sheet_ios","ion-action-sheet {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 1000;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.action-sheet-wrapper {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transform: translate3d(0,  100%,  0);\n  position: absolute;\n  z-index: 10;\n  display: block;\n  width: 100%;\n  max-width: 500px;\n  pointer-events: none;\n}\n\n.action-sheet-button {\n  width: 100%;\n}\n\n.action-sheet-container {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-end;\n  height: 100%;\n  max-height: 100%;\n}\n\n.action-sheet-group {\n  overflow: scroll;\n  flex-shrink: 2;\n  pointer-events: all;\n}\n\n.action-sheet-group-cancel {\n  overflow: hidden;\n  flex-shrink: 0;\n}\n\n.action-sheet-ios {\n  text-align: center;\n}\n\n.action-sheet-ios .action-sheet-wrapper {\n  margin: constant(safe-area-inset-top) auto constant(safe-area-inset-bottom);\n  margin: env(safe-area-inset-top) auto env(safe-area-inset-bottom);\n}\n\n.action-sheet-ios .action-sheet-container {\n  padding: 0 10px;\n}\n\n.action-sheet-ios .action-sheet-group {\n  border-radius: 13px;\n  margin-bottom: 8px;\n  background: #f9f9f9;\n}\n\n.action-sheet-ios .action-sheet-group:first-child {\n  margin-top: 10px;\n}\n\n.action-sheet-ios .action-sheet-group:last-child {\n  margin-bottom: 10px;\n}\n\n.action-sheet-translucent-ios .action-sheet-group {\n  background: rgba(249, 249, 249, 0.88);\n  backdrop-filter: saturate(180%) blur(20px);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n}\n\n.action-sheet-ios .action-sheet-title {\n  padding: 1.5rem;\n  text-align: center;\n  border-bottom: 0.55px solid rgba(0, 0, 0, 0.1);\n  font-size: 1.3rem;\n  font-weight: 400;\n  color: #8f8f8f;\n}\n\n.action-sheet-ios .action-sheet-button {\n  margin: 0;\n  padding: 18px;\n  min-height: 5.6rem;\n  border-bottom: 0.55px solid rgba(0, 0, 0, 0.1);\n  font-size: 2rem;\n  color: #007aff;\n  background: transparent;\n}\n\n.action-sheet-ios .action-sheet-button .action-sheet-icon {\n  margin-top: -10px;\n  padding-right: 0.1em;\n  height: 0.7em;\n  font-size: 1.4em;\n  fill: #007aff;\n}\n\n.action-sheet-ios .action-sheet-button:last-child {\n  border-bottom-color: transparent;\n}\n\n.action-sheet-ios .action-sheet-button.activated {\n  margin-top: -0.55px;\n  border-top: 0.55px solid rgba(115, 115, 115, 0.1);\n  border-bottom-color: rgba(115, 115, 115, 0.1);\n  background: rgba(115, 115, 115, 0.1);\n}\n\n.action-sheet-ios .action-sheet-selected {\n  font-weight: bold;\n  background: #fff;\n}\n\n.action-sheet-ios .action-sheet-destructive {\n  color: #f53d3d;\n}\n\n.action-sheet-ios .action-sheet-destructive .action-sheet-icon {\n  fill: #f53d3d;\n}\n\n.action-sheet-ios .action-sheet-cancel {\n  font-weight: 600;\n  background: #fff;\n}\nion-action-sheet.hydrated{visibility:inherit}","ion-action-sheet-controller_ios","\nion-action-sheet-controller.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-action-sheet.ios",

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
 * iOS Action Sheet Enter Animation
 */
function iosEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.action-sheet-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * iOS Action Sheet Leave Animation
 */
function iosLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.action-sheet-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.4, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * MD Action Sheet Enter Animation
 */
function mdEnterAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.action-sheet-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.26);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

/**
 * MD Action Sheet Leave Animation
 */
function mdLeaveAnimation(Animation, baseElm) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.action-sheet-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.26, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
}

class ActionSheet {
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

class ActionSheetController {
    constructor() {
        this.ids = 0;
        this.actionSheetResolves = {};
        this.actionSheets = [];
    }
    /**
     * Open an action-sheet with a title, subTitle, and an array of buttons
     * @param {ActionSheetOptions} opts Action sheet options
     */
    create(opts) {
        // create ionic's wrapping ion-action-sheet component
        const actionSheet = document.createElement('ion-action-sheet');
        const id = this.ids++;
        // give this action sheet a unique id
        actionSheet.actionSheetId = `action-sheet-${id}`;
        actionSheet.style.zIndex = (20000 + id).toString();
        // convert the passed in action sheet options into props
        // that get passed down into the new action sheet
        Object.assign(actionSheet, opts);
        // append the action sheet element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(actionSheet);
        // store the resolve function to be called later up when the action sheet loads
        return new Promise((resolve) => {
            this.actionSheetResolves[actionSheet.actionSheetId] = resolve;
        });
    }
    didLoad(ev) {
        const actionSheet = ev.target;
        const actionSheetResolve = this.actionSheetResolves[actionSheet.actionSheetId];
        if (actionSheetResolve) {
            actionSheetResolve(actionSheet);
            delete this.actionSheetResolves[actionSheet.actionSheetId];
        }
    }
    willPresent(ev) {
        this.actionSheets.push(ev.target);
    }
    willDismiss(ev) {
        const index = this.actionSheets.indexOf(ev.target);
        if (index > -1) {
            this.actionSheets.splice(index, 1);
        }
    }
    escapeKeyUp() {
        const lastActionSheet = this.actionSheets[this.actionSheets.length - 1];
        if (lastActionSheet) {
            lastActionSheet.dismiss();
        }
    }
}

exports['ion-action-sheet'] = ActionSheet;
exports['ion-action-sheet-controller'] = ActionSheetController;
},


/***************** ion-action-sheet *****************/
[
/** ion-action-sheet: tag **/
"ion-action-sheet",

/** ion-action-sheet: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "buttons", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismiss", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableBackdropDismiss", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "leaveAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "present", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "subTitle", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "title", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-action-sheet: host **/
{"theme":"action-sheet"},

/** ion-action-sheet: events **/
[
  [
    /*****  ion-action-sheet ionActionSheetDidLoad ***** /
    /* event name ***/ "ionActionSheetDidLoad"
  ],
  [
    /*****  ion-action-sheet ionActionSheetDidPresent ***** /
    /* event name ***/ "ionActionSheetDidPresent"
  ],
  [
    /*****  ion-action-sheet ionActionSheetWillPresent ***** /
    /* event name ***/ "ionActionSheetWillPresent"
  ],
  [
    /*****  ion-action-sheet ionActionSheetWillDismiss ***** /
    /* event name ***/ "ionActionSheetWillDismiss"
  ],
  [
    /*****  ion-action-sheet ionActionSheetDidDismiss ***** /
    /* event name ***/ "ionActionSheetDidDismiss"
  ],
  [
    /*****  ion-action-sheet ionActionSheetDidUnload ***** /
    /* event name ***/ "ionActionSheetDidUnload"
  ]
]

],

/***************** ion-action-sheet-controller *****************/
[
/** ion-action-sheet-controller: tag **/
"ion-action-sheet-controller",

/** ion-action-sheet-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-action-sheet-controller: host **/
{}

]
);