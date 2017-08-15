/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.defineComponents(

/**** module id (dev mode) ****/
'ion-nav.page-one.page-three.page-two',

/**** component modules ****/
function importComponent(exports, h, t, Core, publicPath) {
var STATE_INITIALIZED = 2;
var STATE_ATTACHED = 3;
var STATE_DESTROYED = 4;

var DIRECTION_BACK = 'back';
var DIRECTION_FORWARD = 'forward';



function isViewController(object) {
    return !!(object && object.didLoad && object.willUnload);
}
function setZIndex(_isPortal, _enteringView, _leavingView, _direction) {
    // TODO
}
function toggleHidden(element, isVisible, shouldBeVisible) {
    if (isVisible !== shouldBeVisible) {
        element.hidden = shouldBeVisible;
    }
}

function isDef(v) { return v !== undefined && v !== null; }








function assert(bool, msg) {
    if (!bool) {
        console.error(msg);
    }
}









/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */

/** @hidden */

var ViewControllerImpl = (function () {
    function ViewControllerImpl(component, data) {
        this.component = component;
        if (!data) {
            this.data = {};
        }
    }
    /**
     * Called when the current viewController has be successfully dismissed
     */
    ViewControllerImpl.prototype.onDidDismiss = function (callback) {
        this.onDidDismissCallback = callback;
    };
    /**
     * Called when the current viewController will be dismissed
     */
    ViewControllerImpl.prototype.onWillDismiss = function (callback) {
        this.onWillDismissCallback = callback;
    };
    /**
     * Dismiss the current viewController
     * @param {any} [data] Data that you want to return when the viewController is dismissed.
     * @param {any} [role ]
     * @param {NavOptions} navOptions Options for the dismiss navigation.
     * @returns {any} data Returns the data passed in, if any.
     */
    ViewControllerImpl.prototype.dismiss = function (data, role, navOptions) {
        if (navOptions === void 0) { navOptions = {}; }
        this.dismissProxy = {};
        return dismiss(this.nav, this.dismissProxy, data, role, navOptions);
    };
    ViewControllerImpl.prototype.willLeave = function (_unload) {
        return Promise.resolve();
        // throw new Error("Method not implemented.");
    };
    ViewControllerImpl.prototype.willEnter = function () {
        // throw new Error("Method not implemented.");
        return Promise.resolve();
    };
    ViewControllerImpl.prototype.didLeave = function () {
        // throw new Error("Method not implemented.");
        return Promise.resolve();
    };
    ViewControllerImpl.prototype.didEnter = function () {
        // throw new Error("Method not implemented.");
        return Promise.resolve();
    };
    ViewControllerImpl.prototype.willUnload = function () {
        // throw new Error("Method not implemented.");
        return Promise.resolve();
    };
    ViewControllerImpl.prototype.destroy = function () {
        return destroy(this);
    };
    ViewControllerImpl.prototype.getTransitionName = function (_direction) {
        // TODO
        return '';
    };
    return ViewControllerImpl;
}());

function dismiss(navCtrl, dismissProxy, data, role, navOptions) {
    if (navOptions === void 0) { navOptions = {}; }
    if (!navCtrl) {
        assert(this._state === STATE_DESTROYED, 'ViewController does not have a valid _nav');
        return Promise.resolve(false);
    }
    if (this.overlay && !navOptions.minClickBlockDuration) {
        // This is a Modal being dismissed so we need
        // to add the minClickBlockDuration option
        // for UIWebView
        navOptions.minClickBlockDuration = 400;
    }
    dismissProxy.data = data;
    dismissProxy.role = role;
    var options = Object.assign({}, this._leavingOpts, navOptions);
    return navCtrl.removeView(this, options).then(function () { return data; });
}
function destroy(viewController) {
    return Promise.resolve().then(function () {
        assert(viewController.state !== STATE_DESTROYED, 'view state must be attached');
        if (viewController.component) {
            // TODO - consider removing classes and styles as thats what we do in ionic-angular
        }
        if (viewController.frameworkDelegate) {
            return viewController.frameworkDelegate.destroy(viewController);
        }
        return null;
    }).then(function () {
        viewController.id = viewController.data = viewController.element = viewController.instance = viewController.nav = viewController.dismissProxy = viewController.frameworkDelegate = null;
        viewController.state = STATE_DESTROYED;
    });
}

var NAV_ID_START = 1000;
var VIEW_ID_START = 2000;

var CSS_PROP = function (docEle) {
    var css = {};
    // transform
    var i;
    var keys = ['webkitTransform', '-webkit-transform', 'webkit-transform', 'transform'];
    for (i = 0; i < keys.length; i++) {
        if (docEle.style[keys[i]] !== undefined) {
            css.transformProp = keys[i];
            break;
        }
    }
    // transition
    keys = ['webkitTransition', 'transition'];
    for (i = 0; i < keys.length; i++) {
        if (docEle.style[keys[i]] !== undefined) {
            css.transitionProp = keys[i];
            break;
        }
    }
    // The only prefix we care about is webkit for transitions.
    var prefix = css.transitionProp.indexOf('webkit') > -1 ? '-webkit-' : '';
    // transition duration
    css.transitionDurationProp = prefix + 'transition-duration';
    // transition timing function
    css.transitionTimingFnProp = prefix + 'transition-timing-function';
    return css;
}(document.documentElement);
var TRANSFORM_PROPS = {
    'translateX': 1,
    'translateY': 1,
    'translateZ': 1,
    'scale': 1,
    'scaleX': 1,
    'scaleY': 1,
    'scaleZ': 1,
    'rotate': 1,
    'rotateX': 1,
    'rotateY': 1,
    'rotateZ': 1,
    'skewX': 1,
    'skewY': 1,
    'perspective': 1
};
var CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
var DURATION_MIN = 32;
var TRANSITION_END_FALLBACK_PADDING_MS = 400;

function transitionEnd(elm, callback) {
    var unRegTrans;
    var unRegWKTrans;
    var opts = { passive: true };
    function unregister() {
        unRegWKTrans && unRegWKTrans();
        unRegWKTrans && unRegTrans();
    }
    function onTransitionEnd(ev) {
        if (elm === ev.target) {
            unregister();
            callback(ev);
        }
    }
    if (elm) {
        elm.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        unRegWKTrans = function () {
            elm.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        };
        elm.addEventListener('transitionend', onTransitionEnd, opts);
        unRegWKTrans = function () {
            elm.removeEventListener('transitionend', onTransitionEnd, opts);
        };
    }
    return unregister;
}

var Animation = (function () {
    function Animation(elm) {
        this._duration = null;
        this._easingName = null;
        this._elements = null;
        this._reversedEasingName = null;
        this._destroyed = false;
        this.hasChildren = false;
        this.isPlaying = false;
        this.hasCompleted = false;
        this.addElement(elm);
    }
    Animation.prototype.addElement = function (elm) {
        if (elm) {
            if (elm.length) {
                for (var i = 0; i < elm.length; i++) {
                    this._addElm(elm[i]);
                }
            }
            else {
                this._addElm(elm);
            }
        }
        return this;
    };
    /**
     * NO DOM
     */
    Animation.prototype._addElm = function (elm) {
        if (elm.nodeType === 1) {
            this._elementTotal = (this._elements = this._elements || []).push(elm);
        }
    };
    /**
     * Add a child animation to this animation.
     */
    Animation.prototype.add = function (childAnimation) {
        childAnimation.parent = this;
        this.hasChildren = true;
        this._childAnimationTotal = (this._childAnimations = this._childAnimations || []).push(childAnimation);
        return this;
    };
    /**
     * Get the duration of this animation. If this animation does
     * not have a duration, then it'll get the duration from its parent.
     */
    Animation.prototype.getDuration = function (opts) {
        if (opts && opts.duration !== null && opts.duration !== undefined) {
            return opts.duration;
        }
        else if (this._duration !== null) {
            return this._duration;
        }
        else if (this.parent) {
            return this.parent.getDuration();
        }
        return 0;
    };
    /**
     * Returns if the animation is a root one.
     */
    Animation.prototype.isRoot = function () {
        return !this.parent;
    };
    /**
     * Set the duration for this animation.
     */
    Animation.prototype.duration = function (milliseconds) {
        this._duration = milliseconds;
        return this;
    };
    /**
     * Get the easing of this animation. If this animation does
     * not have an easing, then it'll get the easing from its parent.
     */
    Animation.prototype.getEasing = function () {
        if (this._isReverse && this._reversedEasingName) {
            return this._reversedEasingName;
        }
        return this._easingName !== null ? this._easingName : (this.parent && this.parent.getEasing()) || null;
    };
    /**
     * Set the easing for this animation.
     */
    Animation.prototype.easing = function (name) {
        this._easingName = name;
        return this;
    };
    /**
     * Set the easing for this reversed animation.
     */
    Animation.prototype.easingReverse = function (name) {
        this._reversedEasingName = name;
        return this;
    };
    /**
     * Add the "from" value for a specific property.
     */
    Animation.prototype.from = function (prop, val) {
        this._addProp('from', prop, val);
        return this;
    };
    /**
     * Add the "to" value for a specific property.
     */
    Animation.prototype.to = function (prop, val, clearProperyAfterTransition) {
        var fx = this._addProp('to', prop, val);
        if (clearProperyAfterTransition) {
            // if this effect is a transform then clear the transform effect
            // otherwise just clear the actual property
            this.afterClearStyles([fx.trans ? CSS_PROP.transformProp : prop]);
        }
        return this;
    };
    /**
     * Shortcut to add both the "from" and "to" for the same property.
     */
    Animation.prototype.fromTo = function (prop, fromVal, toVal, clearProperyAfterTransition) {
        return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
    };
    /**
     * @hidden
     * NO DOM
     */
    Animation.prototype._getProp = function (name) {
        if (this._fxProperties) {
            return this._fxProperties.find(function (prop) { return prop.effectName === name; });
        }
        else {
            this._fxProperties = [];
        }
        return null;
    };
    Animation.prototype._addProp = function (state, prop, val) {
        var fxProp = this._getProp(prop);
        if (!fxProp) {
            // first time we've see this EffectProperty
            var shouldTrans = (TRANSFORM_PROPS[prop] === 1);
            fxProp = {
                effectName: prop,
                trans: shouldTrans,
                // add the will-change property for transforms or opacity
                wc: (shouldTrans ? CSS_PROP.transformProp : prop)
            };
            this._fxProperties.push(fxProp);
        }
        // add from/to EffectState to the EffectProperty
        var fxState = {
            val: val,
            num: null,
            effectUnit: '',
        };
        fxProp[state] = fxState;
        if (typeof val === 'string' && val.indexOf(' ') < 0) {
            var r = val.match(CSS_VALUE_REGEX);
            var num = parseFloat(r[1]);
            if (!isNaN(num)) {
                fxState.num = num;
            }
            fxState.effectUnit = (r[0] !== r[2] ? r[2] : '');
        }
        else if (typeof val === 'number') {
            fxState.num = val;
        }
        return fxProp;
    };
    /**
     * Add CSS class to this animation's elements
     * before the animation begins.
     */
    Animation.prototype.beforeAddClass = function (className) {
        (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
        return this;
    };
    /**
     * Remove CSS class from this animation's elements
     * before the animation begins.
     */
    Animation.prototype.beforeRemoveClass = function (className) {
        (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
        return this;
    };
    /**
     * Set CSS inline styles to this animation's elements
     * before the animation begins.
     */
    Animation.prototype.beforeStyles = function (styles) {
        this._beforeStyles = styles;
        return this;
    };
    /**
     * Clear CSS inline styles from this animation's elements
     * before the animation begins.
     */
    Animation.prototype.beforeClearStyles = function (propertyNames) {
        this._beforeStyles = this._beforeStyles || {};
        for (var i = 0; i < propertyNames.length; i++) {
            this._beforeStyles[propertyNames[i]] = '';
        }
        return this;
    };
    /**
     * Add a function which contains DOM reads, which will run
     * before the animation begins.
     */
    Animation.prototype.beforeAddRead = function (domReadFn) {
        (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
        return this;
    };
    /**
     * Add a function which contains DOM writes, which will run
     * before the animation begins.
     */
    Animation.prototype.beforeAddWrite = function (domWriteFn) {
        (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
        return this;
    };
    /**
     * Add CSS class to this animation's elements
     * after the animation finishes.
     */
    Animation.prototype.afterAddClass = function (className) {
        (this._afterAddClasses = this._afterAddClasses || []).push(className);
        return this;
    };
    /**
     * Remove CSS class from this animation's elements
     * after the animation finishes.
     */
    Animation.prototype.afterRemoveClass = function (className) {
        (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
        return this;
    };
    /**
     * Set CSS inline styles to this animation's elements
     * after the animation finishes.
     */
    Animation.prototype.afterStyles = function (styles) {
        this._afterStyles = styles;
        return this;
    };
    /**
     * Clear CSS inline styles from this animation's elements
     * after the animation finishes.
     */
    Animation.prototype.afterClearStyles = function (propertyNames) {
        this._afterStyles = this._afterStyles || {};
        for (var i = 0; i < propertyNames.length; i++) {
            this._afterStyles[propertyNames[i]] = '';
        }
        return this;
    };
    /**
     * Play the animation.
     */
    Animation.prototype.play = function (opts) {
        var self = this;
        // If the animation was already invalidated (it did finish), do nothing
        if (self._destroyed) {
            return;
        }
        // this is the top level animation and is in full control
        // of when the async play() should actually kick off
        // if there is no duration then it'll set the TO property immediately
        // if there is a duration, then it'll stage all animations at the
        // FROM property and transition duration, wait a few frames, then
        // kick off the animation by setting the TO property for each animation
        self._isAsync = self._hasDuration(opts);
        // ensure all past transition end events have been cleared
        self._clearAsync();
        // recursively kicks off the correct progress step for each child animation
        // ******** DOM WRITE ****************
        self._playInit(opts);
        // doubling up RAFs since this animation was probably triggered
        // from an input event, and just having one RAF would have this code
        // run within the same frame as the triggering input event, and the
        // input event probably already did way too much work for one frame
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                self._playDomInspect(opts);
            });
        });
    };
    Animation.prototype.syncPlay = function () {
        // If the animation was already invalidated (it did finish), do nothing
        if (!this._destroyed) {
            var opts = { duration: 0 };
            this._isAsync = false;
            this._clearAsync();
            this._playInit(opts);
            this._playDomInspect(opts);
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._playInit = function (opts) {
        // always default that an animation does not tween
        // a tween requires that an Animation class has an element
        // and that it has at least one FROM/TO effect
        // and that the FROM/TO effect can tween numeric values
        this._hasTweenEffect = false;
        this.isPlaying = true;
        this.hasCompleted = false;
        this._hasDur = (this.getDuration(opts) > DURATION_MIN);
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM WRITE ****************
            children[i]._playInit(opts);
        }
        if (this._hasDur) {
            // if there is a duration then we want to start at step 0
            // ******** DOM WRITE ****************
            this._progress(0);
            // add the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(true);
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    Animation.prototype._playDomInspect = function (opts) {
        var self = this;
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        // ******** DOM WRITE ****************
        self._beforeAnimation();
        // for the root animation only
        // set the async TRANSITION END event
        // and run onFinishes when the transition ends
        var dur = self.getDuration(opts);
        if (self._isAsync) {
            self._asyncEnd(dur, true);
        }
        // ******** DOM WRITE ****************
        self._playProgress(opts);
        if (self._isAsync && !this._destroyed) {
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            window.requestAnimationFrame(function () {
                self._playToStep(1);
            });
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._playProgress = function (opts) {
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM WRITE ****************
            children[i]._playProgress(opts);
        }
        if (this._hasDur) {
            // set the CSS TRANSITION duration/easing
            // ******** DOM WRITE ****************
            this._setTrans(this.getDuration(opts), false);
        }
        else {
            // this animation does not have a duration, so it should not animate
            // just go straight to the TO properties and call it done
            // ******** DOM WRITE ****************
            this._progress(1);
            // since there was no animation, immediately run the after
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // this animation has no duration, so it has finished
            // other animations could still be running
            this._didFinish(true);
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._playToStep = function (stepValue) {
        if (!this._destroyed) {
            var children = this._childAnimations;
            for (var i = 0; i < this._childAnimationTotal; i++) {
                // ******** DOM WRITE ****************
                children[i]._playToStep(stepValue);
            }
            if (this._hasDur) {
                // browser had some time to render everything in place
                // and the transition duration/easing is set
                // now set the TO properties which will trigger the transition to begin
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    Animation.prototype._asyncEnd = function (dur, shouldComplete) {
        var self = this;
        function onTransitionEnd() {
            // congrats! a successful transition completed!
            // ensure transition end events and timeouts have been cleared
            self._clearAsync();
            // ******** DOM WRITE ****************
            self._playEnd();
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        }
        function onTransitionFallback() {
            console.debug('Animation onTransitionFallback, CSS onTransitionEnd did not fire!');
            // oh noz! the transition end event didn't fire in time!
            // instead the fallback timer when first
            // if all goes well this fallback should never fire
            // clear the other async end events from firing
            self._timerId = undefined;
            self._clearAsync();
            // set the after styles
            // ******** DOM WRITE ****************
            self._playEnd(shouldComplete ? 1 : 0);
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        }
        // set the TRANSITION END event on one of the transition elements
        self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd);
        // set a fallback timeout if the transition end event never fires, or is too slow
        // transition end fallback: (animation duration + XXms)
        self._timerId = setTimeout(onTransitionFallback, (dur + TRANSITION_END_FALLBACK_PADDING_MS));
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._playEnd = function (stepValue) {
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM WRITE ****************
            children[i]._playEnd(stepValue);
        }
        if (this._hasDur) {
            if (stepValue !== null && stepValue !== undefined) {
                // too late to have a smooth animation, just finish it
                // ******** DOM WRITE ****************
                this._setTrans(0, true);
                // ensure the ending progress step gets rendered
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
            // set the after styles
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // remove the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(false);
        }
    };
    /**
     * @hidden
     * NO DOM
     * RECURSION
     */
    Animation.prototype._hasDuration = function (opts) {
        if (this.getDuration(opts) > DURATION_MIN) {
            return true;
        }
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            if (children[i]._hasDuration(opts)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @hidden
     * NO DOM
     * RECURSION
     */
    Animation.prototype._hasDomReads = function () {
        if (this._readCallbacks && this._readCallbacks.length) {
            return true;
        }
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            if (children[i]._hasDomReads()) {
                return true;
            }
        }
        return false;
    };
    /**
     * Immediately stop at the end of the animation.
     */
    Animation.prototype.stop = function (stepValue) {
        if (stepValue === undefined) {
            stepValue = 1;
        }
        // ensure all past transition end events have been cleared
        this._clearAsync();
        this._hasDur = true;
        this._playEnd(stepValue);
    };
    /**
     * @hidden
     * NO DOM
     * NO RECURSION
     */
    Animation.prototype._clearAsync = function () {
        this._unregisterTrnsEnd && this._unregisterTrnsEnd();
        this._timerId && clearTimeout(this._timerId);
        this._timerId = this._unregisterTrnsEnd = undefined;
    };
    /**
     * @hidden
     * DOM WRITE
     * NO RECURSION
     */
    Animation.prototype._progress = function (stepValue) {
        // bread 'n butter
        var val;
        var effects = this._fxProperties;
        var nuElements = this._elementTotal;
        if (!effects || !nuElements || this._destroyed) {
            return;
        }
        // flip the number if we're going in reverse
        if (this._isReverse) {
            stepValue = ((stepValue * -1) + 1);
        }
        var i = 0;
        var j = 0;
        var finalTransform = '';
        var elements = this._elements;
        var fx;
        for (i = 0; i < effects.length; i++) {
            fx = effects[i];
            if (fx.from && fx.to) {
                var fromNum = fx.from.num;
                var toNum = fx.to.num;
                var tweenEffect = (fromNum !== toNum);
                if (tweenEffect) {
                    this._hasTweenEffect = true;
                }
                if (stepValue === 0) {
                    // FROM
                    val = fx.from.val;
                }
                else if (stepValue === 1) {
                    // TO
                    val = fx.to.val;
                }
                else if (tweenEffect) {
                    // EVERYTHING IN BETWEEN
                    var valNum = (((toNum - fromNum) * stepValue) + fromNum);
                    var unit = fx.to.effectUnit;
                    if (unit === 'px') {
                        valNum = Math.round(valNum);
                    }
                    val = valNum + unit;
                }
                if (val !== null) {
                    var prop = fx.effectName;
                    if (fx.trans) {
                        finalTransform += prop + '(' + val + ') ';
                    }
                    else {
                        for (j = 0; j < nuElements; j++) {
                            // ******** DOM WRITE ****************
                            elements[j].style[prop] = val;
                        }
                    }
                }
            }
        }
        // place all transforms on the same property
        if (finalTransform.length) {
            if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
                finalTransform += 'translateZ(0px)';
            }
            for (i = 0; i < elements.length; i++) {
                // ******** DOM WRITE ****************
                elements[i].style[CSS_PROP.transformProp] = finalTransform;
            }
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * NO RECURSION
     */
    Animation.prototype._setTrans = function (dur, forcedLinearEasing) {
        // Transition is not enabled if there are not effects
        if (!this._fxProperties) {
            return;
        }
        // set the TRANSITION properties inline on the element
        var elements = this._elements;
        var easing = (forcedLinearEasing ? 'linear' : this.getEasing());
        var durString = dur + 'ms';
        var cssTransform = CSS_PROP.transitionProp;
        var cssTransitionDuration = CSS_PROP.transitionDurationProp;
        var cssTransitionTimingFn = CSS_PROP.transitionTimingFnProp;
        var eleStyle;
        for (var i = 0; i < this._elementTotal; i++) {
            eleStyle = elements[i].style;
            if (dur > 0) {
                // ******** DOM WRITE ****************
                eleStyle[cssTransform] = '';
                eleStyle[cssTransitionDuration] = durString;
                // each animation can have a different easing
                if (easing) {
                    // ******** DOM WRITE ****************
                    eleStyle[cssTransitionTimingFn] = easing;
                }
            }
            else {
                eleStyle[cssTransform] = 'none';
            }
        }
    };
    /**
     * @hidden
     * DOM READ
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._beforeAnimation = function () {
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        this._fireBeforeReadFunc();
        // ******** DOM READS ABOVE / DOM WRITES BELOW ****************
        // fire off all the "before" function that have DOM WRITES in them
        // ******** DOM WRITE ****************
        this._fireBeforeWriteFunc();
        // stage all of the before css classes and inline styles
        // ******** DOM WRITE ****************
        this._setBeforeStyles();
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._setBeforeStyles = function () {
        var i, j;
        var children = this._childAnimations;
        for (i = 0; i < this._childAnimationTotal; i++) {
            children[i]._setBeforeStyles();
        }
        // before the animations have started
        // only set before styles if animation is not reversed
        if (this._isReverse) {
            return;
        }
        var addClasses = this._beforeAddClasses;
        var removeClasses = this._beforeRemoveClasses;
        var elm;
        var elementClassList;
        var prop;
        for (i = 0; i < this._elementTotal; i++) {
            elm = this._elements[i];
            elementClassList = elm.classList;
            // css classes to add before the animation
            if (addClasses) {
                for (j = 0; j < addClasses.length; j++) {
                    // ******** DOM WRITE ****************
                    elementClassList.add(addClasses[j]);
                }
            }
            // css classes to remove before the animation
            if (removeClasses) {
                for (j = 0; j < removeClasses.length; j++) {
                    // ******** DOM WRITE ****************
                    elementClassList.remove(removeClasses[j]);
                }
            }
            // inline styles to add before the animation
            if (this._beforeStyles) {
                for (prop in this._beforeStyles) {
                    // ******** DOM WRITE ****************
                    elm.style[prop] = this._beforeStyles[prop];
                }
            }
        }
    };
    /**
     * @hidden
     * DOM READ
     * RECURSION
     */
    Animation.prototype._fireBeforeReadFunc = function () {
        var children = this._childAnimations;
        var i = 0;
        for (i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM READ ****************
            children[i]._fireBeforeReadFunc();
        }
        var readFunctions = this._readCallbacks;
        if (readFunctions) {
            for (i = 0; i < readFunctions.length; i++) {
                // ******** DOM READ ****************
                readFunctions[i]();
            }
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._fireBeforeWriteFunc = function () {
        var children = this._childAnimations;
        var i = 0;
        for (i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM WRITE ****************
            children[i]._fireBeforeWriteFunc();
        }
        var writeFunctions = this._writeCallbacks;
        if (this._writeCallbacks) {
            for (i = 0; i < writeFunctions.length; i++) {
                // ******** DOM WRITE ****************
                writeFunctions[i]();
            }
        }
    };
    /**
     * @hidden
     * DOM WRITE
     */
    Animation.prototype._setAfterStyles = function () {
        var i, j;
        var elm;
        var elementClassList;
        var elements = this._elements;
        var prop;
        for (i = 0; i < this._elementTotal; i++) {
            elm = elements[i];
            elementClassList = elm.classList;
            // remove the transition duration/easing
            // ******** DOM WRITE ****************
            elm.style[CSS_PROP.transitionDurationProp] = elm.style[CSS_PROP.transitionTimingFnProp] = '';
            if (this._isReverse) {
                // finished in reverse direction
                // css classes that were added before the animation should be removed
                if (this._beforeAddClasses) {
                    for (j = 0; j < this._beforeAddClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.remove(this._beforeAddClasses[j]);
                    }
                }
                // css classes that were removed before the animation should be added
                if (this._beforeRemoveClasses) {
                    for (j = 0; j < this._beforeRemoveClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.add(this._beforeRemoveClasses[j]);
                    }
                }
                // inline styles that were added before the animation should be removed
                if (this._beforeStyles) {
                    for (prop in this._beforeStyles) {
                        // ******** DOM WRITE ****************
                        elm.style[prop] = '';
                    }
                }
            }
            else {
                // finished in forward direction
                // css classes to add after the animation
                if (this._afterAddClasses) {
                    for (j = 0; j < this._afterAddClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.add(this._afterAddClasses[j]);
                    }
                }
                // css classes to remove after the animation
                if (this._afterRemoveClasses) {
                    for (j = 0; j < this._afterRemoveClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.remove(this._afterRemoveClasses[j]);
                    }
                }
                // inline styles to add after the animation
                if (this._afterStyles) {
                    for (prop in this._afterStyles) {
                        // ******** DOM WRITE ****************
                        elm.style[prop] = this._afterStyles[prop];
                    }
                }
            }
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * NO RECURSION
     */
    Animation.prototype._willChange = function (addWillChange) {
        var i = 0;
        var wc;
        var effects = this._fxProperties;
        var willChange;
        if (addWillChange && effects) {
            wc = [];
            for (i = 0; i < effects.length; i++) {
                var propWC = effects[i].wc;
                if (propWC === 'webkitTransform') {
                    wc.push('transform', '-webkit-transform');
                }
                else {
                    wc.push(propWC);
                }
            }
            willChange = wc.join(',');
        }
        else {
            willChange = '';
        }
        for (i = 0; i < this._elementTotal; i++) {
            // ******** DOM WRITE ****************
            this._elements[i].style.willChange = willChange;
        }
    };
    /**
     * Start the animation with a user controlled progress.
     */
    Animation.prototype.progressStart = function () {
        // ensure all past transition end events have been cleared
        this._clearAsync();
        // ******** DOM READ/WRITE ****************
        this._beforeAnimation();
        // ******** DOM WRITE ****************
        this._progressStart();
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._progressStart = function () {
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM WRITE ****************
            children[i]._progressStart();
        }
        // force no duration, linear easing
        // ******** DOM WRITE ****************
        this._setTrans(0, true);
        // ******** DOM WRITE ****************
        this._willChange(true);
    };
    /**
     * Set the progress step for this animation.
     * progressStep() is not debounced, so it should not be called faster than 60FPS.
     */
    Animation.prototype.progressStep = function (stepValue) {
        // only update if the last update was more than 16ms ago
        stepValue = Math.min(1, Math.max(0, stepValue));
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM WRITE ****************
            children[i].progressStep(stepValue);
        }
        if (this._isReverse) {
            // if the animation is going in reverse then
            // flip the step value: 0 becomes 1, 1 becomes 0
            stepValue = ((stepValue * -1) + 1);
        }
        // ******** DOM WRITE ****************
        this._progress(stepValue);
    };
    /**
     * End the progress animation.
     */
    Animation.prototype.progressEnd = function (shouldComplete, currentStepValue, dur) {
        var self = this;
        if (dur === undefined) {
            dur = -1;
        }
        if (self._isReverse) {
            // if the animation is going in reverse then
            // flip the step value: 0 becomes 1, 1 becomes 0
            currentStepValue = ((currentStepValue * -1) + 1);
        }
        var stepValue = shouldComplete ? 1 : 0;
        var diff = Math.abs(currentStepValue - stepValue);
        if (diff < 0.05) {
            dur = 0;
        }
        else if (dur < 0) {
            dur = self._duration;
        }
        self._isAsync = (dur > 30);
        self._progressEnd(shouldComplete, stepValue, dur, self._isAsync);
        if (self._isAsync) {
            // for the root animation only
            // set the async TRANSITION END event
            // and run onFinishes when the transition ends
            // ******** DOM WRITE ****************
            self._asyncEnd(dur, shouldComplete);
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            if (!self._destroyed) {
                window.requestAnimationFrame(function () {
                    self._playToStep(stepValue);
                });
            }
        }
    };
    /**
     * @hidden
     * DOM WRITE
     * RECURSION
     */
    Animation.prototype._progressEnd = function (shouldComplete, stepValue, dur, isAsync) {
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            // ******** DOM WRITE ****************
            children[i]._progressEnd(shouldComplete, stepValue, dur, isAsync);
        }
        if (!isAsync) {
            // stop immediately
            // set all the animations to their final position
            // ******** DOM WRITE ****************
            this._progress(stepValue);
            this._willChange(false);
            this._setAfterStyles();
            this._didFinish(shouldComplete);
        }
        else {
            // animate it back to it's ending position
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true;
            // ******** DOM WRITE ****************
            this._willChange(true);
            this._setTrans(dur, false);
        }
    };
    /**
     * Add a callback to fire when the animation has finished.
     */
    Animation.prototype.onFinish = function (callback, opts) {
        if (opts && opts.clearExistingCallacks) {
            this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
        }
        if (opts && opts.oneTimeCallback) {
            this._onFinishOneTimeCallbacks = this._onFinishOneTimeCallbacks || [];
            this._onFinishOneTimeCallbacks.push(callback);
        }
        else {
            this._onFinishCallbacks = this._onFinishCallbacks || [];
            this._onFinishCallbacks.push(callback);
        }
        return this;
    };
    /**
     * @hidden
     * NO DOM
     * RECURSION
     */
    Animation.prototype._didFinishAll = function (hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            children[i]._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
        }
        if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
            this._didFinish(hasCompleted);
        }
    };
    /**
     * @hidden
     * NO RECURSION
     */
    Animation.prototype._didFinish = function (hasCompleted) {
        this.isPlaying = false;
        this.hasCompleted = hasCompleted;
        var i = 0;
        if (this._onFinishCallbacks) {
            // run all finish callbacks
            for (i = 0; i < this._onFinishCallbacks.length; i++) {
                this._onFinishCallbacks[i](this);
            }
        }
        if (this._onFinishOneTimeCallbacks) {
            // run all "onetime" finish callbacks
            for (i = 0; i < this._onFinishOneTimeCallbacks.length; i++) {
                this._onFinishOneTimeCallbacks[i](this);
            }
            this._onFinishOneTimeCallbacks.length = 0;
        }
    };
    /**
     * Reverse the animation.
     */
    Animation.prototype.reverse = function (shouldReverse) {
        if (shouldReverse === undefined) {
            shouldReverse = true;
        }
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            children[i].reverse(shouldReverse);
        }
        this._isReverse = shouldReverse;
        return this;
    };
    /**
     * Recursively destroy this animation and all child animations.
     */
    Animation.prototype.destroy = function () {
        this._destroyed = true;
        var children = this._childAnimations;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            children[i].destroy();
        }
        this._clearAsync();
        if (this._elements) {
            this._elements.length = this._elementTotal = 0;
        }
        if (this._readCallbacks) {
            this._readCallbacks.length = 0;
        }
        if (this._writeCallbacks) {
            this._writeCallbacks.length = 0;
        }
        this.parent = null;
        if (this._childAnimations) {
            this._childAnimations.length = this._childAnimationTotal = 0;
        }
        if (this._onFinishCallbacks) {
            this._onFinishCallbacks.length = 0;
        }
        if (this._onFinishOneTimeCallbacks) {
            this._onFinishOneTimeCallbacks.length = 0;
        }
    };
    /**
     * @hidden
     * NO DOM
     */
    Animation.prototype._transEl = function () {
        // get the lowest level element that has an Animation
        var targetEl;
        for (var i = 0; i < this._childAnimationTotal; i++) {
            targetEl = this._childAnimations[i]._transEl();
            if (targetEl) {
                return targetEl;
            }
        }
        return (this._hasTweenEffect && this._hasDur && this._elementTotal ? this._elements[0] : null);
    };
    return Animation;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transition = (function (_super) {
    __extends$1(Transition, _super);
    function Transition(enteringView, leavingView, opts) {
        var _this = _super.call(this) || this;
        _this.enteringView = enteringView;
        _this.leavingView = leavingView;
        _this.opts = opts;
        return _this;
    }
    Transition.prototype.init = function () {
    };
    Transition.prototype.registerStart = function (transitionStart) {
        this.transitionStart = transitionStart;
    };
    Transition.prototype.start = function () {
        this.transitionStart && this.transitionStart();
        this.transitionStart = null;
        // bubble up start
        this.parent && this.parent.start();
    };
    Transition.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.parent = this.transitionStart = null;
    };
    return Transition;
}(Animation));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DanTransition = (function (_super) {
    __extends(DanTransition, _super);
    function DanTransition(enteringView, leavingView, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, enteringView, leavingView, opts) || this;
        _this.enteringView = enteringView;
        _this.leavingView = leavingView;
        return _this;
    }
    DanTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var enteringAnimation = new Animation(this.enteringView.element);
        enteringAnimation.fromTo('display', '', '');
        this.add(enteringAnimation);
        if (this.leavingView) {
            var leavingAnimation = new Animation(this.leavingView.element);
            leavingAnimation.fromTo('display', '', 'none');
            this.add(leavingAnimation);
        }
    };
    return DanTransition;
}(Transition));

function getRootTransitionId(nav) {
    nav = nav.getParent();
    while (nav) {
        var transitionId = nav.transitionId;
        if (isDef(transitionId)) {
            return transitionId;
        }
        nav = nav.getParent();
    }
    return -1;
}
function nextId() {
    return transitionIds++;
}
function destroy$1(transitionId) {
    var transition = transitions.get(transitionId);
    if (transition) {
        transition.destroy();
        transitions.delete(transitionId);
    }
}

var transitionIds = 0;
var transitions = new Map();

var queueMap = new Map();
// public api



function getActiveView(nav) {
    return nav.views && nav.views.length > 0 ? nav.views[nav.views.length - 1] : null;
}

function getViews(nav) {
    return nav.views ? nav.views : [];
}
function push(nav, delegate, component, data, opts, done) {
    return queueTransaction({
        insertStart: -1,
        insertViews: [{ page: component, params: data }],
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id
    }, done);
}


function pop(nav, delegate, opts, done) {
    return queueTransaction({
        removeStart: -1,
        removeCount: 1,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id
    }, done);
}




function setRoot(nav, delegate, page, params, opts, done) {
    return setPages(nav, delegate, [{ page: page, params: params }], opts, done);
}
function setPages(nav, delegate, componentDataPars, opts, done) {
    if (!isDef(opts)) {
        opts = {};
    }
    if (opts.animate !== true) {
        opts.animate = false;
    }
    return queueTransaction({
        insertStart: 0,
        insertViews: componentDataPars,
        removeStart: 0,
        removeCount: -1,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id
    }, done);
}
// private api, exported for testing
function queueTransaction(ti, done) {
    var promise = new Promise(function (resolve, reject) {
        ti.resolve = resolve;
        ti.reject = reject;
    });
    ti.done = done;
    // Normalize empty
    if (ti.insertViews && ti.insertViews.length === 0) {
        ti.insertViews = undefined;
    }
    // Normalize empty
    if (ti.insertViews && ti.insertViews.length === 0) {
        ti.insertViews = undefined;
    }
    // Enqueue transition instruction
    addToQueue(ti);
    // if there isn't a transition already happening
    // then this will kick off this transition
    nextTransaction(ti.nav);
    return promise;
}
function nextTransaction(nav) {
    if (nav.transitioning) {
        return Promise.resolve();
    }
    var topTransaction = getTopTransaction(nav.id);
    if (!topTransaction) {
        return Promise.resolve();
    }
    return initializeViewBeforeTransition(topTransaction).then(function (_a) {
        var enteringView = _a[0], leavingView = _a[1];
        return loadViewAndTransition(nav, enteringView, leavingView, topTransaction);
    }).then(function (result) {
        return successfullyTransitioned(result, topTransaction);
    }).catch(function (err) {
        return transitionFailed(err, topTransaction);
    });
}
function successfullyTransitioned(result, ti) {
    var queue = getQueue(ti.id);
    if (!queue) {
        // TODO, make throw error in the future
        return fireError(new Error('Queue is null, the nav must have been destroyed'), ti);
    }
    ti.nav.isViewInitialized = true;
    ti.nav.transitionId = null;
    ti.nav.transitioning = false;
    // TODO - check if it's a swipe back
    // kick off next transition for this nav I guess
    nextTransaction(ti.nav);
    if (ti.done) {
        ti.done(result.hasCompleted, result.requiresTransition, result.enteringName, result.leavingName, result.direction);
    }
    ti.resolve(result.hasCompleted);
    console.log('success');
}
function transitionFailed(error, ti) {
    var queue = getQueue(ti.nav.id);
    if (!queue) {
        // TODO, make throw error in the future
        return fireError(new Error('Queue is null, the nav must have been destroyed'), ti);
    }
    ti.nav.transitionId = null;
    resetQueue(ti.nav.id);
    ti.nav.transitioning = false;
    // TODO - check if it's a swipe back
    // kick off next transition for this nav I guess
    nextTransaction(ti.nav);
    fireError(error, ti);
    console.log('fail');
}
function fireError(error, ti) {
    if (ti.done) {
        ti.done(false, false, error.message);
    }
    if (ti.reject && !ti.nav.destroyed) {
        ti.reject(error);
    }
    else {
        ti.resolve(false);
    }
}
function loadViewAndTransition(nav, enteringView, leavingView, ti) {
    if (!ti.requiresTransition) {
        // transition is not required, so we are already done!
        // they're inserting/removing the views somewhere in the middle or
        // beginning, so visually nothing needs to animate/transition
        // resolve immediately because there's no animation that's happening
        return Promise.resolve({
            hasCompleted: true,
            requiresTransition: false
        });
    }
    nav.transitionId = getRootTransitionId(nav) || nextId();
    // create the transition options
    var animationOpts = {
        animation: ti.opts.animation,
        direction: ti.opts.direction,
        duration: (ti.opts.animate === false ? 0 : ti.opts.duration),
        easing: ti.opts.easing,
        isRTL: false,
        ev: ti.opts.event,
    };
    var transition = new DanTransition(enteringView, leavingView, animationOpts);
    //const transition = getTransition(stateData.transitionId, enteringView, animationOpts);
    if (nav.swipeToGoBackTransition) {
        nav.swipeToGoBackTransition.destroy();
        nav.swipeToGoBackTransition = null;
    }
    // it's a swipe to go back transition
    if (transition.isRoot() && ti.opts.progressAnimation) {
        nav.swipeToGoBackTransition = transition;
    }
    // use the resolve function of this promise to trigger the
    // beginTransitioning method
    var promiseToReturn = new Promise(function (resolve) {
        transition.registerStart(resolve);
    });
    return attachViewToDom(nav, enteringView, ti.delegate).then(function () {
        if (!transition.hasChildren) {
            // lowest level transition, so kick it off and let it bubble up to start all of them
            transition.start();
        }
        return promiseToReturn;
    }).then(function () {
        return executeAsyncTransition(nav, transition, enteringView, leavingView, ti.opts);
    });
}
function executeAsyncTransition(nav, transition, enteringView, leavingView, opts) {
    assert(nav.transitioning, 'must be transitioning');
    nav.transitionId = null;
    setZIndex(nav.isPortal, enteringView, leavingView, opts.direction);
    // always ensure the entering view is viewable
    // ******** DOM WRITE ****************
    // TODO, figure out where we want to read this data from
    enteringView && toggleHidden(enteringView.element, true, true);
    // always ensure the leaving view is viewable
    // ******** DOM WRITE ****************
    leavingView && toggleHidden(leavingView.element, true, true);
    // initialize the transition
    transition.init();
    var shouldNotAnimate = (!nav.isViewInitialized && nav.views.length === 1) && !nav.isPortal;
    if (Ionic.config.get('animate') === false || shouldNotAnimate) {
        opts.animate = false;
    }
    if (!opts.animate) {
        // if it was somehow set to not animation, then make the duration zero
        transition.duration(0);
    }
    transition.beforeAddRead(function () {
        fireViewWillLifecycles(enteringView, leavingView);
    });
    // get the set duration of this transition
    var duration = transition.getDuration();
    // create a callback for when the animation is done
    var transitionCompletePromise = new Promise(function (resolve) {
        transition.onFinish(resolve);
    });
    if (transition.isRoot()) {
        if (duration > DISABLE_APP_MINIMUM_DURATION && opts.disableApp !== false) {
            // if this transition has a duration and this is the root transition
            // then set that the app is actively disabled
            //this._app.setEnabled(false, duration + ACTIVE_TRANSITION_OFFSET, opts.minClickBlockDuration);
            // TODO - figure out how to disable the app
        }
        if (opts.progressAnimation) {
            // this is a swipe to go back, just get the transition progress ready
            // kick off the swipe animation start
            transition.progressStart();
        }
        else {
            // only the top level transition should actually start "play"
            // kick it off and let it play through
            // ******** DOM WRITE ****************
            transition.play();
        }
    }
    return transitionCompletePromise.then(function () {
        return transitionFinish(nav, transition, opts);
    });
}
function transitionFinish(nav, transition, opts) {
    if (transition.hasCompleted) {
        transition.enteringView && transition.enteringView.didEnter();
        transition.leavingView && transition.leavingView.didLeave();
        cleanUpView(nav, transition.enteringView);
    }
    else {
        cleanUpView(nav, transition.leavingView);
    }
    if (transition.isRoot()) {
        destroy$1(transition.transitionId);
        // TODO - enable app
        nav.transitioning = false;
        // TODO - navChange on the deep linker used to be called here
        if (opts.keyboardClose) {
            // TODO - close the keyboard
        }
    }
    return {
        hasCompleted: transition.hasCompleted,
        requiresTransition: true,
        direction: opts.direction
    };
}
function cleanUpView(nav, activeViewController) {
    if (nav.destroyed) {
        return;
    }
    var activeIndex = nav.views.indexOf(activeViewController);
    for (var i = nav.views.length - 1; i >= 0; i--) {
        var inactiveViewController = nav.views[i];
        if (i > activeIndex) {
            // this view comes after the active view
            inactiveViewController.willUnload();
            destroyView(nav, inactiveViewController);
        }
        else if (i < activeIndex && !nav.isPortal) {
            // this view comes before the active view
            // and it is not a portal then ensure it is hidden
            toggleHidden(inactiveViewController.element, true, false);
        }
        // TODO - review existing z index code!
    }
}
function fireViewWillLifecycles(enteringView, leavingView) {
    leavingView && leavingView.willLeave(!enteringView);
    enteringView && enteringView.willEnter();
}
function attachViewToDom(nav, enteringView, delegate) {
    return delegate.attachViewToDom(nav, enteringView);
}
function initializeViewBeforeTransition(ti) {
    var leavingView = null;
    var enteringView = null;
    return startTransaction(ti).then(function () {
        var viewControllers = convertComponentToViewController(ti);
        ti.insertViews = viewControllers;
        leavingView = getActiveView(ti.nav);
        enteringView = getEnteringView(ti, ti.nav, leavingView);
        if (!leavingView && !enteringView) {
            return Promise.reject(new Error('No views in the stack to remove'));
        }
        // mark state as initialized
        enteringView.state = STATE_INITIALIZED;
        ti.requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
        return testIfViewsCanLeaveAndEnter(enteringView, leavingView, ti);
    }).then(function () {
        return updateNavStacks(enteringView, leavingView, ti);
    }).then(function () {
        return [enteringView, leavingView];
    });
}
// called _postViewInit in old world
function updateNavStacks(enteringView, leavingView, ti) {
    return Promise.resolve().then(function () {
        assert(!!(leavingView || enteringView), 'Both leavingView and enteringView are null');
        assert(!!ti.resolve, 'resolve must be valid');
        assert(!!ti.reject, 'reject must be valid');
        var destroyQueue = [];
        ti.opts = ti.opts || {};
        if (isDef(ti.removeStart)) {
            assert(ti.removeStart >= 0, 'removeStart can not be negative');
            assert(ti.removeStart >= 0, 'removeCount can not be negative');
            for (var i = 0; i < ti.removeCount; i++) {
                var view = ti.nav.views[i + ti.removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            ti.opts.direction = ti.opts.direction || DIRECTION_BACK;
        }
        var finalBalance = ti.nav.views.length + (ti.insertViews ? ti.insertViews.length : 0) - (ti.removeCount ? ti.removeCount : 0);
        assert(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0 && !ti.nav.isPortal) {
            console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.");
            throw new Error('Navigation stack needs at least one root page');
        }
        // At this point the transition can not be rejected, any throw should be an error
        // there are views to insert
        if (ti.insertViews) {
            // manually set the new view's id if an id was passed in the options
            if (isDef(ti.opts.id)) {
                enteringView.id = ti.opts.id;
            }
            // add the views to the stack
            for (var i = 0; i < ti.insertViews.length; i++) {
                insertViewIntoNav(ti.nav, ti.insertViews[i], ti.insertStart + i);
            }
            if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                ti.opts.direction = ti.opts.direction || DIRECTION_FORWARD;
            }
        }
        // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        if (destroyQueue && destroyQueue.length) {
            // TODO, figure out how the zone stuff should work in angular
            var lifeCyclePromises = [];
            for (var i = 0; i < destroyQueue.length; i++) {
                var view = destroyQueue[i];
                lifeCyclePromises.push(view.willLeave(true));
                lifeCyclePromises.push(view.didLeave());
                lifeCyclePromises.push(view.willUnload());
            }
            // once all lifecycle events has been delivered, we can safely detroy the views
            return Promise.all(lifeCyclePromises).then(function () {
                var destroyQueuePromises = [];
                for (var _i = 0, destroyQueue_1 = destroyQueue; _i < destroyQueue_1.length; _i++) {
                    var viewController = destroyQueue_1[_i];
                    destroyQueuePromises.push(destroyView(ti.nav, viewController));
                }
                return Promise.all(destroyQueuePromises);
            });
        }
        return null;
    }).then(function () {
        // set which animation it should use if it wasn't set yet
        if (ti.requiresTransition && !ti.opts.animation) {
            if (isDef(ti.removeStart)) {
                ti.opts.animation = (leavingView || enteringView).getTransitionName(ti.opts.direction);
            }
            else {
                ti.opts.animation = (enteringView || leavingView).getTransitionName(ti.opts.direction);
            }
        }
    });
}
function destroyView(nav, viewController) {
    return viewController.destroy().then(function () {
        return removeViewFromList(nav, viewController);
    });
}
function removeViewFromList(nav, viewController) {
    assert(viewController.state === STATE_ATTACHED || viewController.state === STATE_DESTROYED, 'view state should be loaded or destroyed');
    var index = nav.views.indexOf(viewController);
    assert(index > -1, 'view must be part of the stack');
    if (index >= 0) {
        nav.views.splice(index, 1);
    }
}
function insertViewIntoNav(nav, view, index) {
    var existingIndex = nav.views.indexOf(view);
    if (existingIndex > -1) {
        // this view is already in the stack!!
        // move it to its new location
        assert(view.nav === nav, 'view is not part of the nav');
        nav.views.splice(index, 0, nav.views.splice(existingIndex, 1)[0]);
    }
    else {
        assert(!view.nav || (nav.isPortal && view.nav === nav), 'nav is used');
        // this is a new view to add to the stack
        // create the new entering view
        view.nav = nav;
        // give this inserted view an ID
        viewIds++;
        if (!view.id) {
            view.id = nav.id + "-" + viewIds;
        }
        // insert the entering view into the correct index in the stack
        nav.views.splice(index, 0, view);
    }
}
function testIfViewsCanLeaveAndEnter(enteringView, leavingView, ti) {
    if (!ti.requiresTransition) {
        return Promise.resolve();
    }
    var promises = [];
    if (leavingView) {
        promises.push(lifeCycleTest(leavingView, 'Leave'));
    }
    if (enteringView) {
        promises.push(lifeCycleTest(enteringView, 'Enter'));
    }
    if (promises.length === 0) {
        return Promise.resolve();
    }
    // darn, async promises, gotta wait for them to resolve
    return Promise.all(promises).then(function (values) {
        if (values.some(function (result) { return result === false; })) {
            ti.reject = null;
            throw new Error('canEnter/Leave returned false');
        }
    });
}
function lifeCycleTest(viewController, enterOrLeave) {
    var methodName = "ionViewCan" + enterOrLeave;
    if (viewController.instance && viewController.instance[methodName]) {
        try {
            var result = viewController.instance[methodName];
            if (result instanceof Promise) {
                return result;
            }
            return Promise.resolve(result !== false);
        }
        catch (e) {
            return Promise.reject(new Error("Unexpected error when calling " + methodName + ": " + e.message));
        }
    }
    return Promise.resolve(true);
}
function startTransaction(ti) {
    var viewsLength = ti.nav.views ? ti.nav.views.length : 0;
    if (isDef(ti.removeView)) {
        assert(isDef(ti.removeStart), 'removeView needs removeStart');
        assert(isDef(ti.removeCount), 'removeView needs removeCount');
        var index = ti.nav.views.indexOf(ti.removeView());
        if (index < 0) {
            return Promise.reject(new Error('The removeView was not found'));
        }
        ti.removeStart += index;
    }
    if (isDef(ti.removeStart)) {
        if (ti.removeStart < 0) {
            ti.removeStart = (viewsLength - 1);
        }
        if (ti.removeCount < 0) {
            ti.removeCount = (viewsLength - ti.removeStart);
        }
        ti.leavingRequiresTransition = (ti.removeCount > 0) && ((ti.removeStart + ti.removeCount) === viewsLength);
    }
    if (isDef(ti.insertViews)) {
        // allow -1 to be passed in to auto push it on the end
        // and clean up the index if it's larger then the size of the stack
        if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
            ti.insertStart = viewsLength;
        }
        ti.enteringRequiresTransition = (ti.insertStart === viewsLength);
    }
    ti.nav.transitioning = true;
    return Promise.resolve();
}
function getEnteringView(ti, nav, leavingView) {
    if (ti.insertViews && ti.insertViews.length) {
        // grab the very last view of the views to be inserted
        // and initialize it as the new entering view
        return ti.insertViews[ti.insertViews.length - 1];
    }
    if (isDef(ti.removeStart)) {
        var removeEnd = ti.removeStart + ti.removeCount;
        for (var i = nav.views.length - 1; i >= 0; i--) {
            if ((i < ti.removeStart || i >= removeEnd) && nav.views[i] !== leavingView) {
                return nav.views[i];
            }
        }
    }
    return null;
}
function convertViewsToViewControllers(views) {
    return views.map(function (view) {
        if (view) {
            if (isViewController(view)) {
                return view;
            }
            // TODO - make this clean
            return new ViewControllerImpl(view.page, view.params);
        }
        return null;
    }).filter(function (view) { return !!view; });
}
function convertComponentToViewController(ti) {
    if (ti.insertViews) {
        assert(ti.insertViews.length > 0, 'length can not be zero');
        var viewControllers = convertViewsToViewControllers(ti.insertViews);
        assert(ti.insertViews.length === viewControllers.length, 'lengths does not match');
        if (viewControllers.length === 0) {
            throw new Error('No views to insert');
        }
        for (var _i = 0, viewControllers_1 = viewControllers; _i < viewControllers_1.length; _i++) {
            var viewController = viewControllers_1[_i];
            if (viewController.nav && viewController.nav.id !== ti.id) {
                throw new Error('The view has already inserted into a different nav');
            }
            if (viewController.state === STATE_DESTROYED) {
                throw new Error('The view has already been destroyed');
            }
        }
        return viewControllers;
    }
    return [];
}
function addToQueue(ti) {
    var list = queueMap.get(ti.id) || [];
    list.push(ti);
    queueMap.set(ti.id, list);
}
function getQueue(id) {
    return queueMap.get(id) || [];
}
function resetQueue(id) {
    queueMap.set(id, []);
}
function getTopTransaction(id) {
    var queue = getQueue(id);
    if (!queue.length) {
        return null;
    }
    var tmp = queue.concat();
    var toReturn = tmp.shift();
    queueMap.set(id, tmp);
    return toReturn;
}
function getNextNavId() {
    return navControllerIds++;
}
var navControllerIds = NAV_ID_START;
var viewIds = VIEW_ID_START;
var DISABLE_APP_MINIMUM_DURATION = 64;

function attachViewToDom$1(nav, enteringView) {
    return new Promise(function (resolve) {
        var usersElement = document.createElement(enteringView.component);
        var ionPage = document.createElement('ion-page');
        enteringView.element = ionPage;
        ionPage.appendChild(usersElement);
        ionPage.componentDidLoad = function () {
            resolve();
        };
        nav.element.appendChild(ionPage);
    });
}
function removeViewFromDom(nav, leavingView) {
    nav.element.removeChild(leavingView.element);
    return Promise.resolve();
}
function destroy$2(_viewController) {
    return Promise.resolve();
}
var delegate = {
    attachViewToDom: attachViewToDom$1,
    removeViewFromDom: removeViewFromDom,
    destroy: destroy$2
};

var Nav = (function () {
    function Nav() {
        init(this);
    }
    Nav.prototype["componentDidLoad"] = function () {
        this.setRoot(this.root);
    };
    Nav.prototype.getViews = function () {
        return getViews(this);
    };
    Nav.prototype.getParent = function () {
        return null; // TODO
    };
    Nav.prototype.push = function (component, data, opts) {
        if (opts === void 0) { opts = {}; }
        return push(this, this.delegate || delegate, component, data, opts);
    };
    Nav.prototype.pop = function (opts) {
        if (opts === void 0) { opts = {}; }
        return pop(this, this.delegate || delegate, opts);
    };
    Nav.prototype.setRoot = function (component, data, opts) {
        if (opts === void 0) { opts = {}; }
        return setRoot(this, this.delegate || delegate, component, data, opts);
    };
    Nav.prototype.render = function () {
        return h(0, 0);
    };
    return Nav;
}());
function init(nav) {
    nav.id = getNextNavId();
    nav.views = [];
}

var PageOne = (function () {
    function PageOne() {
    }
    PageOne.prototype.ionViewDidEnter = function () {
        console.log('page one did enter');
    };
    PageOne.prototype.nextPage = function () {
        var nav = this.element.closest('ion-nav');
        nav.push('page-two');
    };
    PageOne.prototype.render = function () {
        var _this = this;
        return [h("ion-header", 0,
                h("ion-navbar", 0,
                    h("ion-title", 0, t("Page One")))),
            h("ion-content", 0, t("Page One Content"),
                h("div", 0,
                    h("ion-button", { "o": { "click": function () { return _this.nextPage(); } } }, t("Go to Page Two"))))
        ];
    };
    return PageOne;
}());

var PageThree = (function () {
    function PageThree() {
    }
    PageThree.prototype.ionViewDidEnter = function () {
        console.log('page three did enter');
    };
    PageThree.prototype.pop = function () {
        var nav = this.element.closest('ion-nav');
        nav.pop();
    };
    PageThree.prototype.render = function () {
        var _this = this;
        return [h("ion-header", 0,
                h("ion-navbar", 0,
                    h("ion-title", 0, t("Page Three")))),
            h("ion-content", 0, t("Page Three Content"),
                h("div", 0,
                    h("ion-button", { "o": { "click": function () { return _this.pop(); } } }, t("Go Back"))))
        ];
    };
    return PageThree;
}());

var PageTwo = (function () {
    function PageTwo() {
    }
    PageTwo.prototype.ionViewDidEnter = function () {
        console.log('page two did enter');
    };
    PageTwo.prototype.nextPage = function () {
        var nav = this.element.closest('ion-nav');
        nav.push('page-three');
    };
    PageTwo.prototype.pop = function () {
        var nav = this.element.closest('ion-nav');
        nav.pop();
    };
    PageTwo.prototype.render = function () {
        var _this = this;
        return [h("ion-header", 0,
                h("ion-navbar", 0,
                    h("ion-title", 0, t("Page Two")))),
            h("ion-content", 0, t("Page Two Content"),
                h("div", 0,
                    h("ion-button", { "o": { "click": function () { return _this.nextPage(); } } }, t("Go to Page Three"))),
                h("div", 0,
                    h("ion-button", { "o": { "click": function () { return _this.pop(); } } }, t("Go Back"))))
        ];
    };
    return PageTwo;
}());

exports['ION-NAV'] = Nav;
exports['PAGE-ONE'] = PageOne;
exports['PAGE-THREE'] = PageThree;
exports['PAGE-TWO'] = PageTwo;
},


/***************** ion-nav *****************/
[
/** ion-nav: [0] tag **/
'ION-NAV',

/** ion-nav: [1] host **/
{},

/** ion-nav: [2] states **/
0 /* no states */,

/** ion-nav: [3] propWillChanges **/
0 /* no prop will change methods */,

/** ion-nav: [4] propDidChanges **/
0 /* no prop did change methods */,

/** ion-nav: [5] events **/
0 /* no events */,

/** ion-nav: [6] methods **/
['pop', 'push'],

/** ion-nav: [7] hostElementMember **/
'element'

],

/***************** page-one *****************/
[
/** page-one: [0] tag **/
'PAGE-ONE',

/** page-one: [1] host **/
{},

/** page-one: [2] states **/
0 /* no states */,

/** page-one: [3] propWillChanges **/
0 /* no prop will change methods */,

/** page-one: [4] propDidChanges **/
0 /* no prop did change methods */,

/** page-one: [5] events **/
0 /* no events */,

/** page-one: [6] methods **/
0 /* no methods */,

/** page-one: [7] hostElementMember **/
'element'

],

/***************** page-three *****************/
[
/** page-three: [0] tag **/
'PAGE-THREE',

/** page-three: [1] host **/
{},

/** page-three: [2] states **/
0 /* no states */,

/** page-three: [3] propWillChanges **/
0 /* no prop will change methods */,

/** page-three: [4] propDidChanges **/
0 /* no prop did change methods */,

/** page-three: [5] events **/
0 /* no events */,

/** page-three: [6] methods **/
0 /* no methods */,

/** page-three: [7] hostElementMember **/
'element'

],

/***************** page-two *****************/
[
/** page-two: [0] tag **/
'PAGE-TWO',

/** page-two: [1] host **/
{},

/** page-two: [2] states **/
0 /* no states */,

/** page-two: [3] propWillChanges **/
0 /* no prop will change methods */,

/** page-two: [4] propDidChanges **/
0 /* no prop did change methods */,

/** page-two: [5] events **/
0 /* no events */,

/** page-two: [6] methods **/
0 /* no methods */,

/** page-two: [7] hostElementMember **/
'element'

]
)