/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-nav",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
function isDef(v) { return v !== undefined && v !== null; }





function isNumber(v) { return typeof v === 'number'; }


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

function isReady(element) {
    return new Promise(function (resolve) {
        element.componentOnReady(function (elm) {
            resolve(elm);
        });
    });
}

/** @hidden */


function getDocument() {
    return document;
}
function getActiveElement() {
    return getDocument()['activeElement'];
}
function focusOutActiveElement() {
    var activeElement = getActiveElement();
    activeElement && activeElement.blur && activeElement.blur();
}

var STATE_NEW = 1;
var STATE_INITIALIZED = 2;
var STATE_ATTACHED = 3;
var STATE_DESTROYED = 4;
var INIT_ZINDEX = 100;

var DIRECTION_BACK = 'back';
var DIRECTION_FORWARD = 'forward';



var NAV_ID_START = 1000;
var VIEW_ID_START = 2000;
var transitionIds = 0;
var activeTransitions = new Map();
var portalZindex = 9999;
function isViewController(object) {
    return !!(object && object.didLoad && object.willUnload);
}
function setZIndex(nav, enteringView, leavingView, direction) {
    if (enteringView) {
        if (nav.isPortal) {
            if (direction === DIRECTION_FORWARD) {
                updateZIndex(enteringView, nav.zIndexOffset + portalZindex);
            }
            portalZindex++;
            return;
        }
        leavingView = leavingView || nav.getPrevious(enteringView);
        if (leavingView && isDef(leavingView.zIndex)) {
            if (direction === DIRECTION_BACK) {
                updateZIndex(enteringView, leavingView.zIndex - 1);
            }
            else {
                updateZIndex(enteringView, leavingView.zIndex + 1);
            }
        }
        else {
            updateZIndex(enteringView, INIT_ZINDEX + nav.zIndexOffset);
        }
    }
}
function updateZIndex(viewController, newZIndex) {
    if (newZIndex !== viewController.zIndex) {
        viewController.zIndex = newZIndex;
        viewController.element.style.zIndex = '' + newZIndex;
    }
}
function toggleHidden(element, isVisible, shouldBeVisible) {
    if (isVisible !== shouldBeVisible) {
        element.hidden = shouldBeVisible;
    }
}
function canNavGoBack(nav) {
    if (!nav) {
        return false;
    }
    return !!nav.getPrevious();
}
function transitionFactory(animation) {
    animation.registerTransitionStart = function (callback) {
        animation.transitionStartFunction = callback;
    };
    animation.start = function () {
        this.transitionStartFunction && this.transitionStartFunction();
        this.transitionStartFunction = null;
        transitionStartImpl(animation);
    };
    animation.originalDestroy = animation.destroy;
    animation.destroy = function () {
        transitionDestroyImpl(animation);
    };
    return animation;
}
function transitionStartImpl(transition) {
    transition.transitionStartFunction && transition.transitionStartFunction();
    transition.transitionStartFunction = null;
    transition.parent && transition.parent.start();
}
function transitionDestroyImpl(transition) {
    transition.originalDestroy();
    transition.parent = transition.enteringView = transition.leavingView = transition.transitionStartFunction = null;
}
function getParentTransitionId(nav) {
    nav = nav.parent;
    while (nav) {
        var transitionId = nav.transitionId;
        if (isDef(transitionId)) {
            return transitionId;
        }
        nav = nav.parent;
    }
    return -1;
}
function getNextTransitionId() {
    return transitionIds++;
}
function destroyTransition(transitionId) {
    var transition = activeTransitions.get(transitionId);
    if (transition) {
        transition.destroy();
        activeTransitions.delete(transitionId);
    }
}
function getHydratedTransition(name, config, transitionId, emptyTransition, enteringView, leavingView, opts, defaultTransitionFactory) {
    var transitionFactory = config.get(name) || defaultTransitionFactory;
    var hydratedTransition = transitionFactory(emptyTransition, enteringView, leavingView, opts);
    hydratedTransition.transitionId = transitionId;
    if (!activeTransitions.has(transitionId)) {
        // sweet, this is the root transition
        activeTransitions.set(transitionId, hydratedTransition);
    }
    else {
        // we've got a parent transition going
        // just append this transition to the existing one
        activeTransitions.get(transitionId).add(hydratedTransition);
    }
    return hydratedTransition;
}


function getFirstView(nav) {
    return nav.views && nav.views.length > 0 ? nav.views[0] : null;
}

function getViews(nav) {
    return nav.views ? nav.views : [];
}
function init(nav) {
    nav.id = getNextNavId();
    nav.views = [];
}
function getActiveImpl(nav) {
    return nav.views && nav.views.length > 0 ? nav.views[nav.views.length - 1] : null;
}
function getPreviousImpl(nav, viewController) {
    if (!viewController) {
        viewController = nav.getActive();
    }
    return nav.views[nav.views.indexOf(viewController) - 1];
}
function getNextNavId() {
    return navControllerIds++;
}
var navControllerIds = NAV_ID_START;

var IonNav = /** @class */ (function () {
    function IonNav() {
        init(this);
    }
    IonNav.prototype.componentDidLoad = function () {
        componentDidLoadImpl(this);
    };
    IonNav.prototype.getViews = function () {
        return getViews(this);
    };
    IonNav.prototype.push = function (component, data, opts) {
        return pushImpl(this, component, data, opts);
    };
    IonNav.prototype.pop = function (opts) {
        return popImpl(this, opts);
    };
    IonNav.prototype.setRoot = function (component, data, opts) {
        return setRootImpl(this, component, data, opts);
    };
    IonNav.prototype.insert = function (insertIndex, page, params, opts) {
        return insertImpl(this, insertIndex, page, params, opts);
    };
    IonNav.prototype.insertPages = function (insertIndex, insertPages, opts) {
        return insertPagesImpl(this, insertIndex, insertPages, opts);
    };
    IonNav.prototype.popToRoot = function (opts) {
        return popToRootImpl(this, opts);
    };
    IonNav.prototype.popTo = function (indexOrViewCtrl, opts) {
        return popToImpl(this, indexOrViewCtrl, opts);
    };
    IonNav.prototype.remove = function (startIndex, removeCount, opts) {
        return removeImpl(this, startIndex, removeCount, opts);
    };
    IonNav.prototype.removeView = function (viewController, opts) {
        return removeViewImpl(this, viewController, opts);
    };
    IonNav.prototype.setPages = function (componentDataPairs, opts) {
        return setPagesImpl(this, componentDataPairs, opts);
    };
    IonNav.prototype.getActive = function () {
        return getActiveImpl(this);
    };
    IonNav.prototype.getPrevious = function (view) {
        return getPreviousImpl(this, view);
    };
    IonNav.prototype.canGoBack = function (nav) {
        return nav.views && nav.views.length > 0;
    };
    IonNav.prototype.canSwipeBack = function () {
        return true; // TODO, implement this for real
    };
    IonNav.prototype.getFirstView = function () {
        return getFirstView(this);
    };
    IonNav.prototype.navInitialized = function (event) {
        navInitializedImpl(this, event);
    };
    IonNav.prototype.render = function () {
        return h(0, 0);
    };
    return IonNav;
}());
function componentDidLoadImpl(nav) {
    nav.navInit.emit(nav);
    if (nav.root) {
        nav.setRoot(nav.root);
    }
}
function pushImpl(nav, component, data, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.push(nav, component, data, opts);
    });
}
function popImpl(nav, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.pop(nav, opts);
    });
}
function setRootImpl(nav, component, data, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.setRoot(nav, component, data, opts);
    });
}
function insertImpl(nav, insertIndex, page, params, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.insert(nav, insertIndex, page, params, opts);
    });
}
function insertPagesImpl(nav, insertIndex, insertPages, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.insertPages(nav, insertIndex, insertPages, opts);
    });
}
function popToRootImpl(nav, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.popToRoot(nav, opts);
    });
}
function popToImpl(nav, indexOrViewCtrl, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.popTo(nav, indexOrViewCtrl, opts);
    });
}
function removeImpl(nav, startIndex, removeCount, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.remove(nav, startIndex, removeCount, opts);
    });
}
function removeViewImpl(nav, viewController, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.removeView(nav, viewController, opts);
    });
}
function setPagesImpl(nav, componentDataPairs, opts) {
    return getNavController(nav).then(function () {
        return nav.navController.setPages(nav, componentDataPairs, opts);
    });
}
function getNavController(nav) {
    if (nav.navController) {
        return Promise.resolve();
    }
    nav.navController = document.querySelector('ion-nav-controller');
    return isReady(nav.navController);
}
function navInitializedImpl(potentialParent, event) {
    if (potentialParent.element !== event.target) {
        // set the parent on the child nav that dispatched the event
        event.detail.parent = potentialParent;
        if (!potentialParent.childNavs) {
            potentialParent.childNavs = [];
        }
        potentialParent.childNavs.push(event.detail);
        // kill the event so it doesn't propagate further
        event.stopPropagation();
    }
}

var ViewControllerImpl = /** @class */ (function () {
    function ViewControllerImpl(component, data) {
        this.component = component;
        initializeNewViewController(this, data);
    }
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
    ViewControllerImpl.prototype.willLeave = function (unload) {
        willLeaveImpl(unload, this);
    };
    ViewControllerImpl.prototype.didLeave = function () {
        didLeaveImpl(this);
    };
    ViewControllerImpl.prototype.willEnter = function () {
        callLifeCycleFunction(this.instance, 'ionViewWillEnter');
    };
    ViewControllerImpl.prototype.didEnter = function () {
        didEnterImpl(this);
    };
    ViewControllerImpl.prototype.willLoad = function () {
        willLoadImpl(this);
    };
    ViewControllerImpl.prototype.didLoad = function () {
        didLoadImpl(this);
    };
    ViewControllerImpl.prototype.willUnload = function () {
        willUnloadImpl(this);
    };
    ViewControllerImpl.prototype.destroy = function (delegate) {
        return destroy(this, delegate);
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
function destroy(viewController, delegate) {
    assert(viewController.state !== STATE_DESTROYED, 'view state must be attached');
    return delegate ? delegate.removeViewFromDom(viewController.nav, viewController) : Promise.resolve().then(function () {
        if (viewController.component) {
            // TODO - consider removing classes and styles as thats what we do in ionic-angular
        }
        viewController.id = viewController.data = viewController.element = viewController.instance = viewController.nav = viewController.dismissProxy = null;
        viewController.state = STATE_DESTROYED;
    });
}
function callLifeCycleFunction(instance, functionName) {
    instance && instance[functionName] && instance[functionName]();
}
function willLeaveImpl(unload, viewController) {
    callLifeCycleFunction(viewController.instance, 'ionViewWillLeave');
    if (unload && viewController.onWillDismiss) {
        viewController.onWillDismiss(this.dismissProxy.data, this.dismissProxy.proxy);
        viewController.onWillDismiss = null;
    }
}
function didLeaveImpl(viewController) {
    callLifeCycleFunction(viewController.instance, 'ionViewDidLeave');
    // TODO, maybe need to do something framework specific here... figure this out later
    // for example, disconnecting from change detection
}

function didEnterImpl(viewController) {
    assert(viewController.state === STATE_ATTACHED, 'view state must be ATTACHED');
    // TODO - navbar didEnter here
    callLifeCycleFunction(viewController.instance, 'ionViewDidEnter');
}
function willLoadImpl(viewController) {
    assert(viewController.state === STATE_INITIALIZED, 'view state must be INITIALIZED');
    callLifeCycleFunction(viewController.instance, 'ionViewWillLoad');
}
function willUnloadImpl(viewController) {
    callLifeCycleFunction(viewController.instance, 'ionViewWillUnLoad');
    viewController.onDidDismiss && viewController.onDidDismiss(viewController.dismissProxy.data, viewController.dismissProxy.role);
    viewController.onDidDismiss = viewController.dismissProxy = null;
}
function didLoadImpl(viewController) {
    assert(viewController.state === STATE_ATTACHED, 'view state must be ATTACHED');
    callLifeCycleFunction(viewController.instance, 'ionViewDidLoad');
}
function initializeNewViewController(viewController, data) {
    viewController.state = STATE_NEW;
    viewController.data = data || {};
}

var DURATION = 500;
var EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
var OPACITY = 'opacity';
var TRANSFORM = 'transform';
var TRANSLATEX = 'translateX';
var CENTER = '0%';
var OFF_OPACITY = 0.8;
var SHOW_BACK_BTN_CSS = 'show-back-button';
function buildIOSTransition(rootTransition, enteringView, leavingView, opts) {
    rootTransition.enteringView = enteringView;
    rootTransition.leavingView = leavingView;
    var isRTL = document.dir === 'rtl';
    var OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
    var OFF_LEFT = isRTL ? '33%' : '-33%';
    rootTransition.duration(isDef(opts.duration) ? opts.duration : DURATION);
    rootTransition.easing(isDef(opts.easing) ? opts.easing : EASING);
    rootTransition.addElement(enteringView.element);
    rootTransition.beforeAddClass('show-page');
    var backDirection = (opts.direction === 'back');
    if (enteringView) {
        var enteringContent = rootTransition.create();
        enteringContent.addElement(enteringView.element.querySelectorAll('ion-header > *:not(ion-navbar),ion-footer > *'));
        rootTransition.add(enteringContent);
        if (backDirection) {
            enteringContent.fromTo(TRANSLATEX, OFF_LEFT, CENTER, true).fromTo(OPACITY, OFF_OPACITY, 1, true);
        }
        else {
            // entering content, forward direction
            enteringContent.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
        }
        var enteringNavbarEle = enteringView.element.querySelector('ion-navbar');
        if (enteringNavbarEle) {
            var enteringNavBar = rootTransition.create();
            enteringNavBar.addElement(enteringNavbarEle);
            rootTransition.add(enteringNavBar);
            var enteringTitle = rootTransition.create();
            enteringTitle.addElement(enteringNavbarEle.querySelector('ion-title'));
            var enteringNavbarItems = rootTransition.create();
            enteringNavbarItems.addElement(enteringNavbarEle.querySelectorAll('ion-buttons,[menuToggle]'));
            var enteringNavbarBg = rootTransition.create();
            enteringNavbarBg.addElement(enteringNavbarEle.querySelector('.toolbar-background'));
            var enteringBackButton = rootTransition.create();
            enteringBackButton.addElement(enteringNavbarEle.querySelector('.back-button'));
            enteringNavBar
                .add(enteringTitle)
                .add(enteringNavbarItems)
                .add(enteringNavbarBg)
                .add(enteringBackButton);
            enteringTitle.fromTo(OPACITY, 0.01, 1, true);
            enteringNavbarItems.fromTo(OPACITY, 0.01, 1, true);
            if (backDirection) {
                enteringTitle.fromTo(TRANSLATEX, OFF_LEFT, CENTER, true);
                if (canNavGoBack(enteringView.nav)) {
                    // back direction, entering page has a back button
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS).fromTo(OPACITY, 0.01, 1, true);
                }
            }
            else {
                // entering navbar, forward direction
                enteringTitle.fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
                enteringNavbarBg.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
                if (canNavGoBack(enteringView.nav)) {
                    // forward direction, entering page has a back button
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS).fromTo(OPACITY, 0.01, 1, true);
                    var enteringBackBtnText = rootTransition.create();
                    enteringBackBtnText.addElement(enteringNavbarEle.querySelector('.back-button-text'));
                    enteringBackBtnText.fromTo(TRANSLATEX, (isRTL ? '-100px' : '100px'), '0px');
                    enteringNavBar.add(enteringBackBtnText);
                }
                else {
                    enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
                }
            }
        }
    }
    // setup leaving view
    if (leavingView) {
        var leavingContent = rootTransition.create();
        leavingContent.addElement(leavingView.element);
        leavingContent.addElement(leavingView.element.querySelectorAll('ion-header > *:not(ion-navbar),ion-footer > *'));
        rootTransition.add(leavingContent);
        if (backDirection) {
            // leaving content, back direction
            leavingContent.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, CENTER, (isRTL ? '-100%' : '100%'));
        }
        else {
            // leaving content, forward direction
            leavingContent
                .fromTo(TRANSLATEX, CENTER, OFF_LEFT)
                .fromTo(OPACITY, 1, OFF_OPACITY)
                .afterClearStyles([TRANSFORM, OPACITY]);
        }
        var leavingNavbarEle = leavingView.element.querySelector('ion-navbar');
        if (leavingNavbarEle) {
            var leavingNavBar = rootTransition.create();
            leavingNavBar.addElement(leavingNavbarEle);
            var leavingTitle = rootTransition.create();
            leavingTitle.addElement(leavingNavbarEle.querySelector('ion-title'));
            var leavingNavbarItems = rootTransition.create();
            leavingNavbarItems.addElement(leavingNavbarEle.querySelectorAll('ion-buttons,[menuToggle]'));
            var leavingNavbarBg = rootTransition.create();
            leavingNavbarBg.addElement(leavingNavbarEle.querySelector('.toolbar-background'));
            var leavingBackButton = rootTransition.create();
            leavingBackButton.addElement(leavingNavbarEle.querySelector('.back-button'));
            leavingNavBar
                .add(leavingTitle)
                .add(leavingNavbarItems)
                .add(leavingBackButton)
                .add(leavingNavbarBg);
            this.add(leavingNavBar);
            // fade out leaving navbar items
            leavingBackButton.fromTo(OPACITY, 0.99, 0);
            leavingTitle.fromTo(OPACITY, 0.99, 0);
            leavingNavbarItems.fromTo(OPACITY, 0.99, 0);
            if (backDirection) {
                // leaving navbar, back direction
                leavingTitle.fromTo(TRANSLATEX, CENTER, (isRTL ? '-100%' : '100%'));
                // leaving navbar, back direction, and there's no entering navbar
                // should just slide out, no fading out
                leavingNavbarBg
                    .beforeClearStyles([OPACITY])
                    .fromTo(TRANSLATEX, CENTER, (isRTL ? '-100%' : '100%'));
                var leavingBackBtnText = rootTransition.create();
                leavingBackBtnText.addElement(leavingNavbarEle.querySelector('.back-button-text'));
                leavingBackBtnText.fromTo(TRANSLATEX, CENTER, (isRTL ? -300 : 300) + 'px');
                leavingNavBar.add(leavingBackBtnText);
            }
            else {
                // leaving navbar, forward direction
                leavingTitle
                    .fromTo(TRANSLATEX, CENTER, OFF_LEFT)
                    .afterClearStyles([TRANSFORM]);
                leavingBackButton.afterClearStyles([OPACITY]);
                leavingTitle.afterClearStyles([OPACITY]);
                leavingNavbarItems.afterClearStyles([OPACITY]);
            }
        }
    }
    return rootTransition;
}

var TRANSLATEY = 'translateY';
var OFF_BOTTOM = '40px';
var CENTER$1 = '0px';
var SHOW_BACK_BTN_CSS$1 = 'show-back-button';
function buildMdTransition(rootTransition, enteringView, leavingView, opts) {
    rootTransition.enteringView = enteringView;
    rootTransition.leavingView = leavingView;
    rootTransition.addElement(enteringView.element);
    rootTransition.beforeAddClass('show-page');
    var backDirection = (opts.direction === 'back');
    if (enteringView) {
        if (backDirection) {
            rootTransition.duration(isDef(opts.duration) ? opts.duration : 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
        }
        else {
            rootTransition.duration(isDef(opts.duration) ? opts.duration : 280).easing('cubic-bezier(0.36,0.66,0.04,1)');
            rootTransition
                .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER$1, true)
                .fromTo('opacity', 0.01, 1, true);
        }
        var enteringNavbarEle = enteringView.element.querySelector('ion-navbar');
        if (enteringNavbarEle) {
            var enteringNavBar = rootTransition.create();
            enteringNavBar.addElement(enteringNavbarEle);
            rootTransition.add(enteringNavBar);
            var enteringBackButton = rootTransition.create();
            enteringBackButton.addElement(enteringNavbarEle.querySelector('.back-button'));
            rootTransition.add(enteringBackButton);
            if (canNavGoBack(enteringView.nav)) {
                enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS$1);
            }
            else {
                enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS$1);
            }
        }
    }
    // setup leaving view
    if (leavingView && backDirection) {
        // leaving content
        rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
        var leavingPage = rootTransition.create();
        leavingPage.addElement(leavingView.element);
        rootTransition.add(leavingPage.fromTo(TRANSLATEY, CENTER$1, OFF_BOTTOM).fromTo('opacity', 1, 0));
    }
    return rootTransition;
}

var queueMap = new Map();
// public api
function push(nav, delegate, animation, component, data, opts, done) {
    return queueTransaction({
        insertStart: -1,
        insertViews: [{ page: component, params: data }],
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    }, done);
}
function insert(nav, delegate, animation, insertIndex, page, params, opts, done) {
    return queueTransaction({
        insertStart: insertIndex,
        insertViews: [{ page: page, params: params }],
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    }, done);
}
function insertPages(nav, delegate, animation, insertIndex, insertPages, opts, done) {
    return queueTransaction({
        insertStart: insertIndex,
        insertViews: insertPages,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    }, done);
}
function pop(nav, delegate, animation, opts, done) {
    return queueTransaction({
        removeStart: -1,
        removeCount: 1,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    }, done);
}
function popToRoot(nav, delegate, animation, opts, done) {
    return queueTransaction({
        removeStart: 1,
        removeCount: -1,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    }, done);
}
function popTo(nav, delegate, animation, indexOrViewCtrl, opts, done) {
    var config = {
        removeStart: -1,
        removeCount: -1,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    };
    if (isViewController(indexOrViewCtrl)) {
        config.removeView = indexOrViewCtrl;
        config.removeStart = 1;
    }
    else if (isNumber(indexOrViewCtrl)) {
        config.removeStart = indexOrViewCtrl + 1;
    }
    return queueTransaction(config, done);
}
function remove(nav, delegate, animation, startIndex, removeCount, opts, done) {
    if (removeCount === void 0) { removeCount = 1; }
    return queueTransaction({
        removeStart: startIndex,
        removeCount: removeCount,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    }, done);
}
function removeView(nav, delegate, animation, viewController, opts, done) {
    return queueTransaction({
        removeView: viewController,
        removeStart: 0,
        removeCount: 1,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.id,
        animation: animation
    }, done);
}
function setRoot(nav, delegate, animation, page, params, opts, done) {
    return setPages(nav, delegate, animation, [{ page: page, params: params }], opts, done);
}
function setPages(nav, delegate, animation, componentDataPars, opts, done) {
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
        id: nav.id,
        animation: animation
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
    var enteringView;
    var leavingView;
    return initializeViewBeforeTransition(topTransaction).then(function (_a) {
        var _enteringView = _a[0], _leavingView = _a[1];
        enteringView = _enteringView;
        leavingView = _leavingView;
        return attachViewToDom(nav, enteringView, topTransaction.delegate);
    }).then(function () {
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
    var transition = null;
    var transitionId = getParentTransitionId(nav);
    nav.transitionId = transitionId >= 0 ? transitionId : getNextTransitionId();
    // create the transition options
    var animationOpts = {
        animation: ti.opts.animation,
        direction: ti.opts.direction,
        duration: (ti.opts.animate === false ? 0 : ti.opts.duration),
        easing: ti.opts.easing,
        isRTL: false,
        ev: ti.opts.event,
    };
    var emptyTransition = transitionFactory(ti.animation);
    transition = getHydratedTransition(animationOpts.animation, nav.config, nav.transitionId, emptyTransition, enteringView, leavingView, animationOpts, getDefaultTransition(nav.config));
    if (nav.swipeToGoBackTransition) {
        nav.swipeToGoBackTransition.destroy();
        nav.swipeToGoBackTransition = null;
    }
    // it's a swipe to go back transition
    if (transition.isRoot() && ti.opts.progressAnimation) {
        nav.swipeToGoBackTransition = transition;
    }
    transition.start();
    return executeAsyncTransition(nav, transition, enteringView, leavingView, ti.delegate, ti.opts, ti.nav.config.getBoolean('animate'));
}
// TODO - transition type
function executeAsyncTransition(nav, transition, enteringView, leavingView, delegate, opts, configShouldAnimate) {
    assert(nav.transitioning, 'must be transitioning');
    nav.transitionId = null;
    setZIndex(nav, enteringView, leavingView, opts.direction);
    // always ensure the entering view is viewable
    // ******** DOM WRITE ****************
    // TODO, figure out where we want to read this data from
    enteringView && toggleHidden(enteringView.element, true, true);
    // always ensure the leaving view is viewable
    // ******** DOM WRITE ****************
    leavingView && toggleHidden(leavingView.element, true, true);
    var isFirstPage = !nav.isViewInitialized && nav.views.length === 1;
    var shouldNotAnimate = isFirstPage && !nav.isPortal;
    if (configShouldAnimate || shouldNotAnimate) {
        opts.animate = false;
    }
    if (opts.animate === false) {
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
        return transitionFinish(nav, transition, delegate, opts);
    });
}
function transitionFinish(nav, transition, delegate, opts) {
    var promise = null;
    if (transition.hasCompleted) {
        transition.enteringView && transition.enteringView.didEnter();
        transition.leavingView && transition.leavingView.didLeave();
        promise = cleanUpView(nav, delegate, transition.enteringView);
    }
    else {
        promise = cleanUpView(nav, delegate, transition.leavingView);
    }
    return promise.then(function () {
        if (transition.isRoot()) {
            destroyTransition(transition.transitionId);
            // TODO - enable app
            nav.transitioning = false;
            // TODO - navChange on the deep linker used to be called here
            if (opts.keyboardClose !== false) {
                focusOutActiveElement();
            }
        }
        return {
            hasCompleted: transition.hasCompleted,
            requiresTransition: true,
            direction: opts.direction
        };
    });
}
function cleanUpView(nav, delegate, activeViewController) {
    if (nav.destroyed) {
        return Promise.resolve();
    }
    var activeIndex = nav.views.indexOf(activeViewController);
    var promises = [];
    for (var i = nav.views.length - 1; i >= 0; i--) {
        var inactiveViewController = nav.views[i];
        if (i > activeIndex) {
            // this view comes after the active view
            inactiveViewController.willUnload();
            promises.push(destroyView(nav, delegate, inactiveViewController));
        }
        else if (i < activeIndex && !nav.isPortal) {
            // this view comes before the active view
            // and it is not a portal then ensure it is hidden
            toggleHidden(inactiveViewController.element, true, false);
        }
        // TODO - review existing z index code!
    }
    return Promise.all(promises);
}
function fireViewWillLifecycles(enteringView, leavingView) {
    leavingView && leavingView.willLeave(!enteringView);
    enteringView && enteringView.willEnter();
}
function attachViewToDom(nav, enteringView, delegate) {
    if (enteringView && enteringView.state === STATE_NEW) {
        return delegate.attachViewToDom(nav, enteringView).then(function () {
            enteringView.state = STATE_ATTACHED;
        });
    }
    // it's in the wrong state, so don't attach and just return
    return Promise.resolve();
}
function initializeViewBeforeTransition(ti) {
    var leavingView = null;
    var enteringView = null;
    return startTransaction(ti).then(function () {
        var viewControllers = convertComponentToViewController(ti);
        ti.insertViews = viewControllers;
        leavingView = ti.nav.getActive();
        enteringView = getEnteringView(ti, ti.nav, leavingView);
        if (!leavingView && !enteringView) {
            return Promise.reject(new Error('No views in the stack to remove'));
        }
        // mark state as initialized
        //enteringView.state = STATE_INITIALIZED;
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
            for (var i = 0; i < destroyQueue.length; i++) {
                var view = destroyQueue[i];
                view.willLeave(true);
                view.didLeave();
                view.willUnload();
            }
            var destroyQueuePromises = [];
            for (var _i = 0, destroyQueue_1 = destroyQueue; _i < destroyQueue_1.length; _i++) {
                var viewController = destroyQueue_1[_i];
                destroyQueuePromises.push(destroyView(ti.nav, ti.delegate, viewController));
            }
            return Promise.all(destroyQueuePromises);
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
function destroyView(nav, delegate, viewController) {
    return viewController.destroy(delegate).then(function () {
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
function getDefaultTransition(config) {
    return config.get('mode') === 'md' ? buildMdTransition : buildIOSTransition;
}
var viewIds = VIEW_ID_START;
var DISABLE_APP_MINIMUM_DURATION = 64;

var defaultDelegate = null;
var NavControllerImpl = /** @class */ (function () {
    function NavControllerImpl() {
    }
    NavControllerImpl.prototype.push = function (nav, component, data, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return push(nav, delegate, animation, component, data, opts);
        });
    };
    NavControllerImpl.prototype.pop = function (nav, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return pop(nav, delegate, animation, opts);
        });
    };
    NavControllerImpl.prototype.setRoot = function (nav, component, data, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return setRoot(nav, delegate, animation, component, data, opts);
        });
    };
    NavControllerImpl.prototype.insert = function (nav, insertIndex, page, params, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return insert(nav, delegate, animation, insertIndex, page, params, opts);
        });
    };
    NavControllerImpl.prototype.insertPages = function (nav, insertIndex, insertPages$$1, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return insertPages(nav, delegate, animation, insertIndex, insertPages$$1, opts);
        });
    };
    NavControllerImpl.prototype.popToRoot = function (nav, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return popToRoot(nav, delegate, animation, opts);
        });
    };
    NavControllerImpl.prototype.popTo = function (nav, indexOrViewCtrl, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return popTo(nav, delegate, animation, indexOrViewCtrl, opts);
        });
    };
    NavControllerImpl.prototype.remove = function (nav, startIndex, removeCount, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return remove(nav, delegate, animation, startIndex, removeCount, opts);
        });
    };
    NavControllerImpl.prototype.removeView = function (nav, viewController, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return removeView(nav, delegate, animation, viewController, opts);
        });
    };
    NavControllerImpl.prototype.setPages = function (nav, componentDataPairs, opts) {
        return hydrateDelegateAndAnimation(this).then(function (_a) {
            var delegate = _a[0], animation = _a[1];
            return setPages(nav, delegate, animation, componentDataPairs, opts);
        });
    };
    NavControllerImpl.prototype.render = function () {
        return h(0, 0);
    };
    return NavControllerImpl;
}());
function hydrateDelegateAndAnimation(navController) {
    return Promise.all([hydrateDelegate(navController), hydrateAnimationController(navController.animationCtrl)]);
}
function hydrateDelegate(navController) {
    if (navController.delegate) {
        return Promise.resolve(navController.delegate);
    }
    // no delegate is set, so fall back to inserting the stencil-ion-nav-delegate
    var element = document.createElement('stencil-ion-nav-delegate');
    document.body.appendChild(element);
    return isReady(element).then(function () {
        defaultDelegate = element;
        return defaultDelegate;
    });
}
function hydrateAnimationController(animationController) {
    return animationController.create();
}

var PageOne = /** @class */ (function () {
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

var PageThree = /** @class */ (function () {
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

var PageTwo = /** @class */ (function () {
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

var StencilNavDelegate = /** @class */ (function () {
    function StencilNavDelegate() {
    }
    StencilNavDelegate.prototype.attachViewToDom = function (nav, enteringView) {
        return new Promise(function (resolve) {
            var usersElement = document.createElement(enteringView.component);
            var ionPage = document.createElement('ion-page');
            enteringView.element = ionPage;
            ionPage.appendChild(usersElement);
            nav.element.appendChild(ionPage);
            ionPage.componentOnReady(function () {
                resolve();
            });
        });
    };
    StencilNavDelegate.prototype.removeViewFromDom = function (nav, leavingView) {
        nav.element.removeChild(leavingView.element);
        return Promise.resolve();
    };
    return StencilNavDelegate;
}());

exports['ION-NAV'] = IonNav;
exports['ION-NAV-CONTROLLER'] = NavControllerImpl;
exports['PAGE-ONE'] = PageOne;
exports['PAGE-THREE'] = PageThree;
exports['PAGE-TWO'] = PageTwo;
exports['STENCIL-ION-NAV-DELEGATE'] = StencilNavDelegate;
},


/***************** ion-nav *****************/
[
/** ion-nav: tag **/
"ION-NAV",

/** ion-nav: members **/
[
  [ "canGoBack", /** method **/ 6 ],
  [ "canSwipeBack", /** method **/ 6 ],
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "delegate", /** prop **/ 1 ],
  [ "element", /** element ref **/ 7 ],
  [ "getActive", /** method **/ 6 ],
  [ "getFirstView", /** method **/ 6 ],
  [ "getPrevious", /** method **/ 6 ],
  [ "insert", /** method **/ 6 ],
  [ "insertPages", /** method **/ 6 ],
  [ "pop", /** method **/ 6 ],
  [ "popTo", /** method **/ 6 ],
  [ "popToRoot", /** method **/ 6 ],
  [ "push", /** method **/ 6 ],
  [ "remove", /** method **/ 6 ],
  [ "removeView", /** method **/ 6 ],
  [ "root", /** prop **/ 1 ],
  [ "setPages", /** method **/ 6 ],
  [ "setRoot", /** method **/ 6 ]
],

/** ion-nav: host **/
{},

/** ion-nav: events **/
[
  [
    /*****  ion-nav navInit ***** /
    /* event name ***/ "navInit"
  ]
]

],

/***************** ion-nav-controller *****************/
[
/** ion-nav-controller: tag **/
"ION-NAV-CONTROLLER",

/** ion-nav-controller: members **/
[
  [ "animationCtrl", /** prop connect **/ 4, /** type any **/ 0, /** context ***/ "ion-animation-controller" ],
  [ "delegate", /** prop **/ 1 ],
  [ "element", /** element ref **/ 7 ],
  [ "insert", /** method **/ 6 ],
  [ "insertPages", /** method **/ 6 ],
  [ "pop", /** method **/ 6 ],
  [ "popTo", /** method **/ 6 ],
  [ "popToRoot", /** method **/ 6 ],
  [ "push", /** method **/ 6 ],
  [ "remove", /** method **/ 6 ],
  [ "removeView", /** method **/ 6 ],
  [ "setPages", /** method **/ 6 ],
  [ "setRoot", /** method **/ 6 ]
],

/** ion-nav-controller: host **/
{}

],

/***************** page-one *****************/
[
/** page-one: tag **/
"PAGE-ONE",

/** page-one: members **/
[
  [ "element", /** element ref **/ 7 ]
],

/** page-one: host **/
{}

],

/***************** page-three *****************/
[
/** page-three: tag **/
"PAGE-THREE",

/** page-three: members **/
[
  [ "element", /** element ref **/ 7 ]
],

/** page-three: host **/
{}

],

/***************** page-two *****************/
[
/** page-two: tag **/
"PAGE-TWO",

/** page-two: members **/
[
  [ "element", /** element ref **/ 7 ]
],

/** page-two: host **/
{}

],

/***************** stencil-ion-nav-delegate *****************/
[
/** stencil-ion-nav-delegate: tag **/
"STENCIL-ION-NAV-DELEGATE",

/** stencil-ion-nav-delegate: members **/
[
  [ "attachViewToDom", /** method **/ 6 ],
  [ "removeViewFromDom", /** method **/ 6 ]
],

/** stencil-ion-nav-delegate: host **/
{}

]
)