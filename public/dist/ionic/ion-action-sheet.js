/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-action-sheet",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
/**
 * iOS Action Sheet Enter Animation
 */
var iOSEnterAnimation = function (Animation, baseElm) {
    var baseAnimation = new Animation();
    var backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.action-sheet-backdrop'));
    var wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
};

/**
 * iOS Action Sheet Leave Animation
 */
var iOSLeaveAnimation = function (Animation, baseElm) {
    var baseAnimation = new Animation();
    var backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.action-sheet-backdrop'));
    var wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.4, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
};

var ActionSheet = /** @class */ (function () {
    function ActionSheet() {
        this.enableBackdropDismiss = true;
    }
    ActionSheet.prototype.present = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._present(resolve);
        });
    };
    ActionSheet.prototype._present = function (resolve) {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionActionSheetWillPresent.emit({ actionSheet: this });
        // get the user's animation fn if one was provided
        var animationBuilder = this.enterAnimation;
        if (!animationBuilder) {
            // user did not provide a custom animation fn
            // decide from the config which animation to use
            animationBuilder = iOSEnterAnimation;
        }
        // build the animation and kick it off
        this.animationCtrl.create(animationBuilder, this.el).then(function (animation) {
            _this.animation = animation;
            animation.onFinish(function (a) {
                a.destroy();
                _this.ionViewDidEnter();
                resolve();
            }).play();
        });
    };
    ActionSheet.prototype.dismiss = function () {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        return new Promise(function (resolve) {
            _this.ionActionSheetWillDismiss.emit({ actionSheet: _this });
            // get the user's animation fn if one was provided
            var animationBuilder = _this.exitAnimation;
            if (!animationBuilder) {
                // user did not provide a custom animation fn
                // decide from the config which animation to use
                animationBuilder = iOSLeaveAnimation;
            }
            // build the animation and kick it off
            _this.animationCtrl.create(animationBuilder, _this.el).then(function (animation) {
                _this.animation = animation;
                animation.onFinish(function (a) {
                    a.destroy();
                    _this.ionActionSheetDidDismiss.emit({ actionSheet: _this });
                    Context.dom.write(function () {
                        _this.el.parentNode.removeChild(_this.el);
                    });
                    resolve();
                }).play();
            });
        });
    };
    ActionSheet.prototype["componentDidunload"] = function () {
        this.ionActionSheetDidUnload.emit({ actionSheet: this });
    };
    ActionSheet.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    ActionSheet.prototype["componentDidLoad"] = function () {
        this.ionActionSheetDidLoad.emit({ actionSheet: this });
    };
    ActionSheet.prototype.ionViewDidEnter = function () {
        this.ionActionSheetDidPresent.emit({ loading: this });
    };
    ActionSheet.prototype.backdropClick = function () {
        if (this.enableBackdropDismiss) {
            // const opts: NavOptions = {
            //   minClickBlockDuration: 400
            // };
            this.dismiss();
        }
    };
    ActionSheet.prototype.click = function (button) {
        var shouldDismiss = true;
        if (button.handler) {
            if (button.handler() === false) {
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss();
        }
    };
    ActionSheet.prototype.render = function () {
        var _this = this;
        var userCssClass = 'action-sheet-content';
        if (this.cssClass) {
            userCssClass += ' ' + this.cssClass;
        }
        var cancelButton;
        var buttons = this.buttons
            .map(function (b) {
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
            .filter(function (b) { return b !== null; });
        return [
            h("ion-backdrop", { "c": { "action-sheet-backdrop": true }, "o": { "click": this.backdropClick.bind(this) } }),
            h("div", { "c": { "action-sheet-wrapper": true }, "a": { "role": "dialog" } },
                h("div", { "c": { "action-sheet-container": true } },
                    h("div", { "c": { "action-sheet-group": true } },
                        this.title
                            ? h("div", { "c": { "action-sheet-title": true } }, this.title)
                            : null,
                        this.subTitle
                            ? h("div", { "c": { "action-sheet-sub-title": true } }, this.subTitle)
                            : null,
                        buttons.map(function (b) {
                            return h("button", { "c": _this.buttonClass(b), "o": { "click": function () { return _this.click(b); } } },
                                h("span", { "c": { "button-inner": true } },
                                    b.icon
                                        ? h("ion-icon", { "c": { "action-sheet-icon": true }, "p": { "name": b.icon } })
                                        : null,
                                    b.text));
                        })),
                    cancelButton
                        ? h("div", { "c": { "action-sheet-group": true } },
                            h("button", { "c": this.buttonClass(cancelButton), "o": { "click": function () { return _this.click(cancelButton); } } },
                                cancelButton.icon
                                    ? h("ion-icon", { "c": { "action-sheet-icon": true }, "p": { "name": cancelButton.icon } })
                                    : null,
                                cancelButton.text))
                        : null))
        ];
    };
    ActionSheet.prototype.buttonClass = function (button) {
        var buttonClass = !button.role
            ? ['action-sheet-button']
            : ["action-sheet-button", "action-sheet-" + button.role];
        return buttonClass.reduce(function (prevValue, cssClass) {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    };
    return ActionSheet;
}());

var ActionSheetController = /** @class */ (function () {
    function ActionSheetController() {
        this.ids = 0;
        this.actionSheetResolves = {};
        this.actionSheets = [];
    }
    ActionSheetController.prototype.create = function (opts) {
        var _this = this;
        // create ionic's wrapping ion-action-sheet component
        var actionSheet = document.createElement('ion-action-sheet');
        var id = this.ids++;
        // give this action sheet a unique id
        actionSheet.id = "action-sheet-" + id;
        actionSheet.style.zIndex = (20000 + id).toString();
        // convert the passed in action sheet options into props
        // that get passed down into the new action sheet
        Object.assign(actionSheet, opts);
        // append the action sheet element to the document body
        var appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(actionSheet);
        // store the resolve function to be called later up when the action sheet loads
        return new Promise(function (resolve) {
            _this.actionSheetResolves[actionSheet.id] = resolve;
        });
    };
    ActionSheetController.prototype.viewDidLoad = function (ev) {
        var actionSheet = ev.detail.actionSheet;
        var actionSheetResolve = this.actionSheetResolves[actionSheet.id];
        if (actionSheetResolve) {
            actionSheetResolve(actionSheet);
            delete this.actionSheetResolves[actionSheet.id];
        }
    };
    ActionSheetController.prototype.willPresent = function (ev) {
        this.actionSheets.push(ev.detail.actionSheet);
    };
    ActionSheetController.prototype.willDismiss = function (ev) {
        var index = this.actionSheets.indexOf(ev.detail.actionSheet);
        if (index > -1) {
            this.actionSheets.splice(index, 1);
        }
    };
    ActionSheetController.prototype.escapeKeyUp = function () {
        var lastActionSheet = this.actionSheets[this.actionSheets.length - 1];
        if (lastActionSheet) {
            lastActionSheet.dismiss();
        }
    };
    return ActionSheetController;
}());

exports['ION-ACTION-SHEET'] = ActionSheet;
exports['ION-ACTION-SHEET-CONTROLLER'] = ActionSheetController;
},


/***************** ion-action-sheet *****************/
[
/** ion-action-sheet: tag **/
"ION-ACTION-SHEET",

/** ion-action-sheet: members **/
[
  [ "animationCtrl", /** prop connect **/ 4, /** type any **/ 0, /** context ***/ "ion-animation-controller" ],
  [ "buttons", /** prop **/ 1 ],
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1 ],
  [ "el", /** element ref **/ 7 ],
  [ "enableBackdropDismiss", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "enterAnimation", /** prop **/ 1 ],
  [ "exitAnimation", /** prop **/ 1 ],
  [ "id", /** prop **/ 1 ],
  [ "subTitle", /** prop **/ 1 ],
  [ "title", /** prop **/ 1 ]
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
"ION-ACTION-SHEET-CONTROLLER",

/** ion-action-sheet-controller: members **/
[
  [ "create", /** method **/ 6 ]
],

/** ion-action-sheet-controller: host **/
{}

]
)