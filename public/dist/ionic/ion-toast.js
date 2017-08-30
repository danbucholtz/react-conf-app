/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-toast",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
/**
 * iOS Toast Enter Animation
 */
var iOSEnterAnimation = function (Animation, baseElm, position) {
    var baseAnimation = new Animation();
    var wrapperAnimation = new Animation();
    var wrapperEle = baseElm.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', 10 + "px");
            break;
        case 'middle':
            var topPosition = Math.floor(baseElm.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = topPosition + "px";
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', 0 - 10 + "px");
            break;
    }
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(wrapperAnimation);
};

/**
 * iOS Toast Leave Animation
 */
var iOSLeaveAnimation = function (Animation, baseElm, position) {
    var baseAnimation = new Animation();
    var wrapperAnimation = new Animation();
    var wrapperEle = baseElm.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', 10 + "px", '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', 0 - 10 + "px", '100%');
            break;
    }
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation);
};

var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.prototype.present = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._present(resolve);
        });
    };
    Toast.prototype._present = function (resolve) {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionToastWillPresent.emit({ actionSheet: this });
        // get the user's animation fn if one was provided
        var animationBuilder = this.enterAnimation;
        if (!animationBuilder) {
            // user did not provide a custom animation fn
            // decide from the config which animation to use
            animationBuilder = iOSEnterAnimation;
        }
        // build the animation and kick it off
        this.animationCtrl.create(animationBuilder, this.el, this.position).then(function (animation) {
            _this.animation = animation;
            animation.onFinish(function (a) {
                a.destroy();
                _this.ionViewDidEnter();
                resolve();
            }).play();
        });
    };
    Toast.prototype.dismiss = function () {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        return new Promise(function (resolve) {
            _this.ionToastWillDismiss.emit({ toast: _this });
            // get the user's animation fn if one was provided
            var animationBuilder = _this.exitAnimation;
            if (!animationBuilder) {
                // user did not provide a custom animation fn
                // decide from the config which animation to use
                animationBuilder = iOSLeaveAnimation;
            }
            // build the animation and kick it off
            _this.animationCtrl.create(animationBuilder, _this.el, _this.position).then(function (animation) {
                _this.animation = animation;
                animation.onFinish(function (a) {
                    a.destroy();
                    _this.ionToastDidDismiss.emit({ toast: _this });
                    Context.dom.write(function () {
                        _this.el.parentNode.removeChild(_this.el);
                    });
                    resolve();
                }).play();
            });
        });
    };
    Toast.prototype["componentDidunload"] = function () {
        this.ionToastDidUnload.emit({ toast: this });
    };
    Toast.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    Toast.prototype["componentDidLoad"] = function () {
        this.ionToastDidLoad.emit({ toast: this });
    };
    Toast.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.ionToastDidPresent.emit({ toast: this });
        if (this.duration) {
            setTimeout(function () {
                _this.dismiss();
            }, this.duration);
        }
    };
    Toast.prototype.render = function () {
        var _this = this;
        var userCssClass = 'toast-content';
        if (this.cssClass) {
            userCssClass += ' ' + this.cssClass;
        }
        return (h("div", { "c": this.wrapperClass() },
            h("div", { "c": { "toast-container": true } },
                this.message
                    ? h("div", { "c": { "toast-message": true } }, this.message)
                    : null,
                this.showCloseButton
                    ? h("ion-button", { "c": { "toast-button": true }, "o": { "click": function () { return _this.dismiss(); } }, "a": { "color": "light" }, "p": { "clear": true } }, this.closeButtonText || 'Close')
                    : null)));
    };
    Toast.prototype.wrapperClass = function () {
        var wrapperClass = !this.position
            ? ['toast-wrapper', 'toast-bottom']
            : ["toast-wrapper", "toast-" + this.position];
        return wrapperClass.reduce(function (prevValue, cssClass) {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    };
    return Toast;
}());

var ToastController = /** @class */ (function () {
    function ToastController() {
        this.ids = 0;
        this.toastResolves = {};
        this.toasts = [];
    }
    ToastController.prototype.create = function (opts) {
        var _this = this;
        // create ionic's wrapping ion-toast component
        var toast = document.createElement('ion-toast');
        var id = this.ids++;
        // give this toast a unique id
        toast.id = "toast-" + id;
        toast.style.zIndex = (10000 + id).toString();
        // convert the passed in toast options into props
        // that get passed down into the new toast
        Object.assign(toast, opts);
        // append the toast element to the document body
        var appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(toast);
        // store the resolve function to be called later up when the toast loads
        return new Promise(function (resolve) {
            _this.toastResolves[toast.id] = resolve;
        });
    };
    ToastController.prototype.viewDidLoad = function (ev) {
        var toast = ev.detail.toast;
        var toastResolve = this.toastResolves[toast.id];
        if (toastResolve) {
            toastResolve(toast);
            delete this.toastResolves[toast.id];
        }
    };
    ToastController.prototype.willPresent = function (ev) {
        this.toasts.push(ev.detail.toast);
    };
    ToastController.prototype.willDismiss = function (ev) {
        var index = this.toasts.indexOf(ev.detail.toast);
        if (index > -1) {
            this.toasts.splice(index, 1);
        }
    };
    ToastController.prototype.escapeKeyUp = function () {
        var lastToast = this.toasts[this.toasts.length - 1];
        if (lastToast) {
            lastToast.dismiss();
        }
    };
    return ToastController;
}());

exports['ION-TOAST'] = Toast;
exports['ION-TOAST-CONTROLLER'] = ToastController;
},


/***************** ion-toast *****************/
[
/** ion-toast: tag **/
"ION-TOAST",

/** ion-toast: members **/
[
  [ "animationCtrl", /** prop connect **/ 4, /** type any **/ 0, /** context ***/ "ion-animation-controller" ],
  [ "closeButtonText", /** prop **/ 1 ],
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1 ],
  [ "dismissOnPageChange", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "duration", /** prop **/ 1, /** type number **/ 2 ],
  [ "el", /** element ref **/ 7 ],
  [ "enterAnimation", /** prop **/ 1 ],
  [ "exitAnimation", /** prop **/ 1 ],
  [ "id", /** prop **/ 1 ],
  [ "message", /** prop **/ 1 ],
  [ "position", /** prop **/ 1 ],
  [ "showCloseButton", /** prop **/ 1, /** type boolean **/ 1 ]
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
"ION-TOAST-CONTROLLER",

/** ion-toast-controller: members **/
[
  [ "create", /** method **/ 6 ]
],

/** ion-toast-controller: host **/
{}

]
)