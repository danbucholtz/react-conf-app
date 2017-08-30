/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-alert",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
/**
 * iOS Alert Enter Animation
 */
var iOSEnterAnimation = function (Animation, baseElm) {
    var baseAnimation = new Animation();
    var backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.alert-backdrop'));
    var wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.3);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
};

/**
 * iOS Alert Leave Animation
 */
var iOSLeaveAnimation = function (Animation, baseElm) {
    var baseAnimation = new Animation();
    var backdropAnimation = new Animation();
    backdropAnimation.addElement(baseElm.querySelector('.alert-backdrop'));
    var wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.3, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
};

var Alert = /** @class */ (function () {
    function Alert() {
        this.buttons = [];
        this.inputs = [];
        this.enableBackdropDismiss = true;
    }
    Alert.prototype.present = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._present(resolve);
        });
    };
    Alert.prototype._present = function (resolve) {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionAlertWillPresent.emit({ alert: this });
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
    Alert.prototype.dismiss = function () {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        return new Promise(function (resolve) {
            _this.ionAlertWillDismiss.emit({ alert: _this });
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
                    _this.ionAlertDidDismiss.emit({ alert: _this });
                    Context.dom.write(function () {
                        _this.el.parentNode.removeChild(_this.el);
                    });
                    resolve();
                }).play();
            });
        });
    };
    Alert.prototype["componentDidunload"] = function () {
        this.ionAlertDidUnload.emit({ alert: this });
    };
    Alert.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    Alert.prototype["componentDidLoad"] = function () {
        this.ionAlertDidLoad.emit({ alert: this });
    };
    Alert.prototype.ionViewDidEnter = function () {
        this.ionAlertDidPresent.emit({ loading: this });
    };
    Alert.prototype.backdropClick = function () {
        if (this.enableBackdropDismiss) {
            // const opts: NavOptions = {
            //   minClickBlockDuration: 400
            // };
            this.dismiss();
        }
    };
    Alert.prototype.rbClick = function (button) {
        this.inputs.forEach(function (input) {
            input.checked = (button === input);
            return input;
        });
        this.activeId = button.id;
        if (button.handler) {
            button.handler(button);
        }
    };
    Alert.prototype.cbClick = function (button) {
        button.checked = !button.checked;
        if (button.handler) {
            button.handler(button);
        }
    };
    Alert.prototype.btnClick = function (button) {
        console.log('btnClick', button);
        // TODO keep the time of the most recent button click
        // this.lastClick = Date.now();
        var shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            if (button.handler(this.getValues()) === false) {
                // if the return value of the handler is false then do not dismiss
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss();
        }
    };
    Alert.prototype.getValues = function () {
        if (this.inputType === 'radio') {
            // this is an alert with radio buttons (single value select)
            // return the one value which is checked, otherwise undefined
            var checkedInput = this.inputs.find(function (i) { return i.checked; });
            console.debug('returning', checkedInput ? checkedInput.value : undefined);
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === 'checkbox') {
            // this is an alert with checkboxes (multiple value select)
            // return an array of all the checked values
            console.debug('returning', this.inputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; }));
            return this.inputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; });
        }
        if (this.inputs.length === 0) {
            // this is an alert without any options/inputs at all
            console.debug('returning', 'undefined');
            return undefined;
        }
        // this is an alert with text inputs
        // return an object of all the values with the input name as the key
        var values = {};
        this.inputs.forEach(function (i) {
            values[i.name] = i.value;
        });
        console.debug('returning', values);
        return values;
    };
    Alert.prototype.buttonClass = function (button) {
        var buttonClass = !button.cssClass
            ? ['alert-button']
            : ["alert-button", "" + button.cssClass];
        return buttonClass.reduce(function (prevValue, cssClass) {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
    };
    Alert.prototype.renderCheckbox = function (inputs) {
        var _this = this;
        if (inputs.length === 0)
            return null;
        return (h("div", { "c": { "alert-checkbox-group": true } }, inputs.map(function (i) { return (h("button", { "c": { "alert-tappable": true, "alert-checkbox": true, "alert-checkbox-button": true }, "o": { "click": function () { return _this.cbClick(i); } }, "a": { "aria-checked": i.checked, "disabled": i.disabled, "role": "checkbox" }, "p": { "id": i.id } },
            h("div", { "c": { "button-inner": true } },
                h("div", { "c": { "alert-checkbox-icon": true } },
                    h("div", { "c": { "alert-checkbox-inner": true } })),
                h("div", { "c": { "alert-checkbox-label": true } }, i.label)))); })));
    };
    Alert.prototype.renderRadio = function (inputs) {
        var _this = this;
        var hdrId = 'TODO';
        if (inputs.length === 0)
            return null;
        return (h("div", { "c": { "alert-radio-group": true }, "a": { "role": "radiogroup", "aria-labelledby": hdrId, "aria-activedescendant": this.activeId } }, inputs.map(function (i) { return (h("button", { "c": { "alert-radio-button": true, "alert-tappable": true, "alert-radio": true }, "o": { "click": function () { return _this.rbClick(i); } }, "a": { "aria-checked": i.checked, "disabled": i.disabled, "role": "radio" }, "p": { "id": i.id } },
            h("div", { "c": { "button-inner": true } },
                h("div", { "c": { "alert-radio-icon": true } },
                    h("div", { "c": { "alert-radio-inner": true } })),
                h("div", { "c": { "alert-radio-label": true } }, i.label)))); })));
    };
    Alert.prototype.renderInput = function (inputs) {
        if (inputs.length === 0)
            return null;
        return (h("div", { "c": { "alert-input-group": true } }, inputs.map(function (i) { return (h("div", { "c": { "alert-input-wrapper": true } },
            h("input", { "c": { "alert-input": true }, "p": { "placeholder": i.placeholder, "value": i.value, "type": i.type, "min": i.min, "max": i.max, "id": i.id } }))); })));
    };
    Alert.prototype.render = function () {
        var _this = this;
        var hdrId = 'TODO';
        var subHdrId = 'TODO';
        var msgId = 'TODO';
        var alertButtonGroupClass = {
            'alert-button-group': true,
            'alert-button-group-vertical': this.buttons.length > 2
        };
        var buttons = this.buttons
            .map(function (b) {
            if (typeof b === 'string') {
                b = { text: b };
            }
            return b;
        })
            .filter(function (b) { return b !== null; });
        // An alert can be created with several different inputs. Radios,
        // checkboxes and inputs are all accepted, but they cannot be mixed.
        var inputTypes = [];
        this.inputs = this.inputs
            .map(function (i, index) {
            var r = {
                type: i.type || 'text',
                name: i.name ? i.name : index + '',
                placeholder: i.placeholder ? i.placeholder : '',
                value: i.value ? i.value : '',
                label: i.label,
                checked: !!i.checked,
                disabled: !!i.disabled,
                id: i.id ? i.id : "alert-input-" + _this.id + "-" + index,
                handler: i.handler ? i.handler : null,
                min: i.min ? i.min : null,
                max: i.max ? i.max : null
            };
            return r;
        })
            .filter(function (i) { return i !== null; });
        this.inputs.forEach(function (i) {
            if (inputTypes.indexOf(i.type) < 0) {
                inputTypes.push(i.type);
            }
        });
        if (inputTypes.length > 1 && (inputTypes.indexOf('checkbox') > -1 || inputTypes.indexOf('radio') > -1)) {
            console.warn("Alert cannot mix input types: " + (inputTypes.join('/')) + ". Please see alert docs for more info.");
        }
        this.inputType = inputTypes.length ? inputTypes[0] : null;
        return [
            h("ion-backdrop", { "c": { "alert-backdrop": true }, "o": { "click": this.backdropClick.bind(this) } }),
            h("div", { "c": { "alert-wrapper": true } },
                h("div", { "c": { "alert-head": true } },
                    this.title
                        ? h("h2", { "c": { "alert-title": true }, "p": { "id": hdrId } }, this.title)
                        : null,
                    this.subTitle
                        ? h("h2", { "c": { "alert-sub-title": true }, "p": { "id": subHdrId } }, this.subTitle)
                        : null),
                h("div", { "c": { "alert-message": true }, "p": { "id": msgId, "innerHTML": this.message } }),
                (function () {
                    switch (_this.inputType) {
                        case 'checkbox':
                            return _this.renderCheckbox(_this.inputs);
                        case 'radio':
                            return _this.renderRadio(_this.inputs);
                        default:
                            return _this.renderInput(_this.inputs);
                    }
                    
                })(),
                h("div", { "c": alertButtonGroupClass }, buttons.map(function (b) {
                    return h("button", { "c": _this.buttonClass(b), "o": { "click": function () { return _this.btnClick(b); } } },
                        h("span", { "c": { "button-inner": true } }, b.text));
                })))
        ];
    };
    return Alert;
}());

var AlertController = /** @class */ (function () {
    function AlertController() {
        this.ids = 0;
        this.alertResolves = {};
        this.alerts = [];
    }
    AlertController.prototype.create = function (opts) {
        var _this = this;
        // create ionic's wrapping ion-alert component
        var alert = document.createElement('ion-alert');
        var id = this.ids++;
        // give this action sheet a unique id
        alert.id = "alert-" + id;
        alert.style.zIndex = (20000 + id).toString();
        // convert the passed in action sheet options into props
        // that get passed down into the new action sheet
        Object.assign(alert, opts);
        // append the action sheet element to the document body
        var appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(alert);
        // store the resolve function to be called later up when the action sheet loads
        return new Promise(function (resolve) {
            _this.alertResolves[alert.id] = resolve;
        });
    };
    AlertController.prototype.viewDidLoad = function (ev) {
        var alert = ev.detail.alert;
        var alertResolve = this.alertResolves[alert.id];
        if (alertResolve) {
            alertResolve(alert);
            delete this.alertResolves[alert.id];
        }
    };
    AlertController.prototype.willPresent = function (ev) {
        this.alerts.push(ev.detail.alert);
    };
    AlertController.prototype.willDismiss = function (ev) {
        var index = this.alerts.indexOf(ev.detail.alert);
        if (index > -1) {
            this.alerts.splice(index, 1);
        }
    };
    AlertController.prototype.escapeKeyUp = function () {
        var lastAlert = this.alerts[this.alerts.length - 1];
        if (lastAlert) {
            lastAlert.dismiss();
        }
    };
    return AlertController;
}());

exports['ION-ALERT'] = Alert;
exports['ION-ALERT-CONTROLLER'] = AlertController;
},


/***************** ion-alert *****************/
[
/** ion-alert: tag **/
"ION-ALERT",

/** ion-alert: members **/
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
  [ "inputs", /** prop state **/ 2 ],
  [ "message", /** prop **/ 1 ],
  [ "subTitle", /** prop **/ 1 ],
  [ "title", /** prop **/ 1 ]
],

/** ion-alert: host **/
{"theme":"alert"},

/** ion-alert: events **/
[
  [
    /*****  ion-alert ionAlertDidLoad ***** /
    /* event name ***/ "ionAlertDidLoad"
  ],
  [
    /*****  ion-alert ionAlertDidPresent ***** /
    /* event name ***/ "ionAlertDidPresent"
  ],
  [
    /*****  ion-alert ionAlertWillPresent ***** /
    /* event name ***/ "ionAlertWillPresent"
  ],
  [
    /*****  ion-alert ionAlertWillDismiss ***** /
    /* event name ***/ "ionAlertWillDismiss"
  ],
  [
    /*****  ion-alert ionAlertDidDismiss ***** /
    /* event name ***/ "ionAlertDidDismiss"
  ],
  [
    /*****  ion-alert ionAlertDidUnload ***** /
    /* event name ***/ "ionAlertDidUnload"
  ]
]

],

/***************** ion-alert-controller *****************/
[
/** ion-alert-controller: tag **/
"ION-ALERT-CONTROLLER",

/** ion-alert-controller: members **/
[
  [ "create", /** method **/ 6 ]
],

/** ion-alert-controller: host **/
{}

]
)