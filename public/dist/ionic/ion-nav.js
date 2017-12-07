/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-nav",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

function isDef(v) { return v !== undefined && v !== null; }




function isString(v) { return typeof v === 'string'; }
function isNumber(v) { return typeof v === 'number'; }



/** @hidden */

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
    return element.componentOnReady();
}

/** @hidden */


function getDocument() {
    return document;
}
function getActiveElement() {
    return getDocument()['activeElement'];
}
function focusOutActiveElement() {
    const activeElement = getActiveElement();
    activeElement && activeElement.blur && activeElement.blur();
}



/**
 * @private
 */

const STATE_NEW = 1;
const STATE_INITIALIZED = 2;
const STATE_ATTACHED = 3;
const STATE_DESTROYED = 4;
const INIT_ZINDEX = 100;

const DIRECTION_BACK = 'back';
const DIRECTION_FORWARD = 'forward';



let NAV_ID_START = 1000;
let VIEW_ID_START = 2000;
let transitionIds = 0;
let activeTransitions = new Map();
let portalZindex = 9999;
function isViewController(object) {
    return !!(object && object.didLoad && object.willUnload);
}
function setZIndex(nav, enteringView, leavingView, direction) {
    if (enteringView) {
        if (nav.isPortal) {
            if (direction === DIRECTION_FORWARD) {
                // TODO - fix typing
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
            // TODO - fix typing
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
    animation.registerTransitionStart = (callback) => {
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
        const transitionId = nav.transitionId;
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
    const transition = activeTransitions.get(transitionId);
    if (transition) {
        transition.destroy();
        activeTransitions.delete(transitionId);
    }
}
function getHydratedTransition(name, config, transitionId, emptyTransition, enteringView, leavingView, opts, defaultTransitionFactory) {
    const transitionFactory = config.get(name) || defaultTransitionFactory;
    const hydratedTransition = transitionFactory(emptyTransition, enteringView, leavingView, opts);
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
function resolveRoute(nav, component) {
    return nav.routes.find(r => r.id === component);
}
let navControllerIds = NAV_ID_START;

/* it is very important to keep this class in sync with ./nav-interface interface */
class Nav {
    constructor() {
        this.init = false;
        this.routes = [];
        this.views = [];
        this.navId = getNextNavId();
    }
    componentWillLoad() {
        this.routes = Array.from(this.element.querySelectorAll('ion-route'))
            .map(child => child.getRoute());
        this.useRouter = this.config.getBoolean('useRouter', false);
    }
    componentDidLoad() {
        if (this.init) {
            return;
        }
        this.init = true;
        if (!this.useRouter) {
            componentDidLoadImpl(this);
        }
    }
    getViews() {
        return getViews(this);
    }
    push(component, data, opts) {
        return pushImpl(this, component, data, opts);
    }
    pop(opts) {
        return popImpl(this, opts);
    }
    setRoot(component, data, opts) {
        return setRootImpl(this, component, data, opts);
    }
    insert(insertIndex, page, params, opts) {
        return insertImpl(this, insertIndex, page, params, opts);
    }
    insertPages(insertIndex, insertPages, opts) {
        return insertPagesImpl(this, insertIndex, insertPages, opts);
    }
    popToRoot(opts) {
        return popToRootImpl(this, opts);
    }
    popTo(indexOrViewCtrl, opts) {
        return popToImpl(this, indexOrViewCtrl, opts);
    }
    removeIndex(startIndex, removeCount, opts) {
        return removeImpl(this, startIndex, removeCount, opts);
    }
    removeView(viewController, opts) {
        return removeViewImpl(this, viewController, opts);
    }
    setPages(componentDataPairs, opts) {
        return setPagesImpl(this, componentDataPairs, opts);
    }
    getActive() {
        return getActiveImpl(this);
    }
    getPrevious(view) {
        return getPreviousImpl(this, view);
    }
    canGoBack() {
        return canGoBackImpl(this);
    }
    canSwipeBack() {
        return true; // TODO, implement this for real
    }
    getFirstView() {
        return getFirstView(this);
    }
    resize() {
        console.log('resize content');
    }
    navInitialized(event) {
        navInitializedImpl(this, event);
    }
    getState() {
        assert(this.useRouter, 'routing is disabled');
        return getState(this);
    }
    setRouteId(id, _ = {}) {
        assert(this.useRouter, 'routing is disabled');
        const active = this.getActive();
        if (active && active.component === id) {
            return Promise.resolve();
        }
        return this.setRoot(id);
    }
    getRoutes() {
        assert(this.useRouter, 'routing is disabled');
        return this.routes;
    }
    render() {
        return h("slot", null);
    }
}
function getState(nav) {
    const active = getActiveImpl(nav);
    if (!active) {
        return null;
    }
    const component = active.component;
    const route = resolveRoute(nav, component);
    if (!route) {
        console.error('cant reverse route by component', component);
        return null;
    }
    return {
        path: route.path,
        focusNode: active.element
    };
}
function componentDidLoadImpl(nav) {
    nav.navInit.emit(nav);
    if (nav.root) {
        nav.setRoot(nav.root);
    }
}
function pushImpl(nav, component, data, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.push(nav, component, data, opts);
    });
}
function popImpl(nav, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.pop(nav, opts);
    });
}
function setRootImpl(nav, component, data, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.setRoot(nav, component, data, opts);
    });
}
function insertImpl(nav, insertIndex, page, params, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.insert(nav, insertIndex, page, params, opts);
    });
}
function insertPagesImpl(nav, insertIndex, insertPages, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.insertPages(nav, insertIndex, insertPages, opts);
    });
}
function popToRootImpl(nav, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.popToRoot(nav, opts);
    });
}
function popToImpl(nav, indexOrViewCtrl, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.popTo(nav, indexOrViewCtrl, opts);
    });
}
function removeImpl(nav, startIndex, removeCount, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.removeIndex(nav, startIndex, removeCount, opts);
    });
}
function removeViewImpl(nav, viewController, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.removeView(nav, viewController, opts);
    });
}
function setPagesImpl(nav, componentDataPairs, opts) {
    return getNavController(nav).then(() => {
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
function canGoBackImpl(nav) {
    return nav.views && nav.views.length > 0;
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

class DomFrameworkDelegate {
    attachViewToDom(parentElement, tagOrElement, propsOrDataObj = {}, classesToAdd = []) {
        return new Promise((resolve) => {
            const usersElement = (isString(tagOrElement) ? document.createElement(tagOrElement) : tagOrElement);
            Object.assign(usersElement, propsOrDataObj);
            if (classesToAdd.length) {
                for (const clazz of classesToAdd) {
                    usersElement.classList.add(clazz);
                }
            }
            parentElement.appendChild(usersElement);
            resolve({
                element: usersElement
            });
        });
    }
    removeViewFromDom(parentElement, childElement) {
        parentElement.removeChild(childElement);
        return Promise.resolve({
            element: null
        });
    }
}

class ViewController {
    constructor(component, data) {
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
    dismiss(data, role, navOptions = {}) {
        this.dismissProxy = {};
        return dismiss(this.nav, this.dismissProxy, data, role, navOptions);
    }
    willLeave(unload) {
        willLeaveImpl(unload, this);
    }
    didLeave() {
        didLeaveImpl(this);
    }
    willEnter() {
        callLifeCycleFunction(this.instance, 'ionViewWillEnter');
    }
    didEnter() {
        didEnterImpl(this);
    }
    willLoad() {
        willLoadImpl(this);
    }
    didLoad() {
        didLoadImpl(this);
    }
    willUnload() {
        willUnloadImpl(this);
    }
    destroy(delegate) {
        return destroy(this, delegate);
    }
    getTransitionName(_direction) {
        // TODO
        return '';
    }
}

function dismiss(navCtrl, dismissProxy, data, role, navOptions = {}) {
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
    const options = Object.assign({}, this._leavingOpts, navOptions);
    return navCtrl.removeView(this, options).then(() => data);
}
function destroy(viewController, delegate) {
    assert(viewController.state !== STATE_DESTROYED, 'view state must be attached');
    return delegate ? delegate.removeViewFromDom(viewController.nav.element, viewController.element) : Promise.resolve().then(() => {
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

const DURATION = 500;
const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
const OPACITY = 'opacity';
const TRANSFORM = 'transform';
const TRANSLATEX = 'translateX';
const CENTER = '0%';
const OFF_OPACITY = 0.8;
const SHOW_BACK_BTN_CSS = 'show-back-button';
function buildIOSTransition(rootTransition, enteringView, leavingView, opts) {
    rootTransition.enteringView = enteringView;
    rootTransition.leavingView = leavingView;
    const isRTL = document.dir === 'rtl';
    const OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
    const OFF_LEFT = isRTL ? '33%' : '-33%';
    rootTransition.duration(isDef(opts.duration) ? opts.duration : DURATION);
    rootTransition.easing(isDef(opts.easing) ? opts.easing : EASING);
    rootTransition.addElement(enteringView.element);
    rootTransition.beforeRemoveClass('hide-page');
    const backDirection = (opts.direction === 'back');
    if (enteringView) {
        const enteringContent = rootTransition.create();
        enteringContent.addElement(enteringView.element.querySelectorAll('ion-header > *:not(ion-navbar),ion-footer > *'));
        rootTransition.add(enteringContent);
        if (backDirection) {
            enteringContent.fromTo(TRANSLATEX, OFF_LEFT, CENTER, true).fromTo(OPACITY, OFF_OPACITY, 1, true);
        }
        else {
            // entering content, forward direction
            enteringContent.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
        }
        const enteringNavbarEle = enteringView.element.querySelector('ion-navbar');
        if (enteringNavbarEle) {
            const enteringNavBar = rootTransition.create();
            enteringNavBar.addElement(enteringNavbarEle);
            rootTransition.add(enteringNavBar);
            const enteringTitle = rootTransition.create();
            enteringTitle.addElement(enteringNavbarEle.querySelector('ion-title'));
            const enteringNavbarItems = rootTransition.create();
            enteringNavbarItems.addElement(enteringNavbarEle.querySelectorAll('ion-buttons,[menuToggle]'));
            const enteringNavbarBg = rootTransition.create();
            enteringNavbarBg.addElement(enteringNavbarEle.querySelector('.toolbar-background'));
            const enteringBackButton = rootTransition.create();
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
                    const enteringBackBtnText = rootTransition.create();
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
        const leavingContent = rootTransition.create();
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
        const leavingNavbarEle = leavingView.element.querySelector('ion-navbar');
        if (leavingNavbarEle) {
            const leavingNavBar = rootTransition.create();
            leavingNavBar.addElement(leavingNavbarEle);
            const leavingTitle = rootTransition.create();
            leavingTitle.addElement(leavingNavbarEle.querySelector('ion-title'));
            const leavingNavbarItems = rootTransition.create();
            leavingNavbarItems.addElement(leavingNavbarEle.querySelectorAll('ion-buttons,[menuToggle]'));
            const leavingNavbarBg = rootTransition.create();
            leavingNavbarBg.addElement(leavingNavbarEle.querySelector('.toolbar-background'));
            const leavingBackButton = rootTransition.create();
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
                const leavingBackBtnText = rootTransition.create();
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

const TRANSLATEY = 'translateY';
const OFF_BOTTOM = '40px';
const CENTER$1 = '0px';
const SHOW_BACK_BTN_CSS$1 = 'show-back-button';
function buildMdTransition(rootTransition, enteringView, leavingView, opts) {
    rootTransition.enteringView = enteringView;
    rootTransition.leavingView = leavingView;
    rootTransition.addElement(enteringView.element);
    rootTransition.beforeRemoveClass('hide-page');
    const backDirection = (opts.direction === 'back');
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
        const enteringNavbarEle = enteringView.element.querySelector('ion-navbar');
        if (enteringNavbarEle) {
            const enteringNavBar = rootTransition.create();
            enteringNavBar.addElement(enteringNavbarEle);
            rootTransition.add(enteringNavBar);
            const enteringBackButton = rootTransition.create();
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
        const leavingPage = rootTransition.create();
        leavingPage.addElement(leavingView.element);
        rootTransition.add(leavingPage.fromTo(TRANSLATEY, CENTER$1, OFF_BOTTOM).fromTo('opacity', 1, 0));
    }
    return rootTransition;
}

const queueMap = new Map();
// public api
function push(nav, delegate, animation, component, data, opts, done) {
    return queueTransaction({
        insertStart: -1,
        insertViews: [{ page: component, params: data }],
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.navId,
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
        id: nav.navId,
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
        id: nav.navId,
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
        id: nav.navId,
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
        id: nav.navId,
        animation: animation
    }, done);
}
function popTo(nav, delegate, animation, indexOrViewCtrl, opts, done) {
    const config = {
        removeStart: -1,
        removeCount: -1,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.navId,
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
function remove(nav, delegate, animation, startIndex, removeCount = 1, opts, done) {
    return queueTransaction({
        removeStart: startIndex,
        removeCount: removeCount,
        opts: opts,
        nav: nav,
        delegate: delegate,
        id: nav.navId,
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
        id: nav.navId,
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
        id: nav.navId,
        animation: animation
    }, done);
}
// private api, exported for testing
function queueTransaction(ti, done) {
    const promise = new Promise((resolve, reject) => {
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
    const topTransaction = getTopTransaction(nav.navId);
    if (!topTransaction) {
        return Promise.resolve();
    }
    let enteringView;
    let leavingView;
    return initializeViewBeforeTransition(nav, topTransaction).then(([_enteringView, _leavingView]) => {
        enteringView = _enteringView;
        leavingView = _leavingView;
        return attachViewToDom(nav, enteringView, topTransaction.delegate);
    }).then(() => {
        return loadViewAndTransition(nav, enteringView, leavingView, topTransaction);
    }).then((result) => {
        nav.ionNavChanged.emit({ isPop: false });
        return successfullyTransitioned(result, topTransaction);
    }).catch((err) => {
        return transitionFailed(err, topTransaction);
    });
}
function successfullyTransitioned(result, ti) {
    const queue = getQueue(ti.id);
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
    const queue = getQueue(ti.nav.navId);
    if (!queue) {
        // TODO, make throw error in the future
        return fireError(new Error('Queue is null, the nav must have been destroyed'), ti);
    }
    ti.nav.transitionId = null;
    resetQueue(ti.nav.navId);
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
    let transition = null;
    const transitionId = getParentTransitionId(nav);
    nav.transitionId = transitionId >= 0 ? transitionId : getNextTransitionId();
    // create the transition options
    const animationOpts = {
        animation: ti.opts.animation,
        direction: ti.opts.direction,
        duration: (ti.opts.animate === false ? 0 : ti.opts.duration),
        easing: ti.opts.easing,
        isRTL: false,
        ev: ti.opts.event,
    };
    const emptyTransition = transitionFactory(ti.animation);
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
    const isFirstPage = !nav.isViewInitialized && nav.views.length === 1;
    const shouldNotAnimate = isFirstPage && !nav.isPortal;
    if (configShouldAnimate || shouldNotAnimate) {
        opts.animate = false;
    }
    if (opts.animate === false) {
        // if it was somehow set to not animation, then make the duration zero
        transition.duration(0);
    }
    transition.beforeAddRead(() => {
        fireViewWillLifecycles(enteringView, leavingView);
    });
    // get the set duration of this transition
    const duration = transition.getDuration();
    // create a callback for when the animation is done
    const transitionCompletePromise = new Promise(resolve => {
        transition.onFinish(resolve);
    });
    if (transition.isRoot()) {
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
    return transitionCompletePromise.then(() => {
        return transitionFinish(nav, transition, delegate, opts);
    });
}
function transitionFinish(nav, transition, delegate, opts) {
    let promise = null;
    if (transition.hasCompleted) {
        transition.enteringView && transition.enteringView.didEnter();
        transition.leavingView && transition.leavingView.didLeave();
        promise = cleanUpView(nav, delegate, transition.enteringView);
    }
    else {
        promise = cleanUpView(nav, delegate, transition.leavingView);
    }
    return promise.then(() => {
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
    const activeIndex = nav.views.indexOf(activeViewController);
    const promises = [];
    for (let i = nav.views.length - 1; i >= 0; i--) {
        const inactiveViewController = nav.views[i];
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
        return delegate.attachViewToDom(nav.element, enteringView.component, enteringView.data, ['ion-page']).then((mountingData) => {
            Object.assign(enteringView, mountingData);
            enteringView.state = STATE_ATTACHED;
        });
    }
    // it's in the wrong state, so don't attach and just return
    return Promise.resolve();
}
function initializeViewBeforeTransition(nav, ti) {
    let leavingView = null;
    let enteringView = null;
    return startTransaction(ti).then(() => {
        const viewControllers = convertComponentToViewController(nav, ti);
        ti.insertViews = viewControllers;
        leavingView = ti.nav.getActive();
        enteringView = getEnteringView(ti, ti.nav, leavingView);
        if (!leavingView && !enteringView) {
            return Promise.reject(new Error('No views in the stack to remove'));
        }
        // mark state as initialized
        // enteringView.state = STATE_INITIALIZED;
        ti.requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
        return testIfViewsCanLeaveAndEnter(enteringView, leavingView, ti);
    }).then(() => {
        return updateNavStacks(enteringView, leavingView, ti);
    }).then(() => {
        return [enteringView, leavingView];
    });
}
// called _postViewInit in old world
function updateNavStacks(enteringView, leavingView, ti) {
    return Promise.resolve().then(() => {
        assert(!!(leavingView || enteringView), 'Both leavingView and enteringView are null');
        assert(!!ti.resolve, 'resolve must be valid');
        assert(!!ti.reject, 'reject must be valid');
        const destroyQueue = [];
        ti.opts = ti.opts || {};
        if (isDef(ti.removeStart)) {
            assert(ti.removeStart >= 0, 'removeStart can not be negative');
            assert(ti.removeStart >= 0, 'removeCount can not be negative');
            for (let i = 0; i < ti.removeCount; i++) {
                const view = ti.nav.views[i + ti.removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            ti.opts.direction = ti.opts.direction || DIRECTION_BACK;
        }
        const finalBalance = ti.nav.views.length + (ti.insertViews ? ti.insertViews.length : 0) - (ti.removeCount ? ti.removeCount : 0);
        assert(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0 && !ti.nav.isPortal) {
            console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`);
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
            for (let i = 0; i < ti.insertViews.length; i++) {
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
            for (let i = 0; i < destroyQueue.length; i++) {
                const view = destroyQueue[i];
                view.willLeave(true);
                view.didLeave();
                view.willUnload();
            }
            const destroyQueuePromises = [];
            for (const viewController of destroyQueue) {
                destroyQueuePromises.push(destroyView(ti.nav, ti.delegate, viewController));
            }
            return Promise.all(destroyQueuePromises);
        }
        return null;
    }).then(() => {
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
    return viewController.destroy(delegate).then(() => {
        return removeViewFromList(nav, viewController);
    });
}
function removeViewFromList(nav, viewController) {
    assert(viewController.state === STATE_ATTACHED || viewController.state === STATE_DESTROYED, 'view state should be loaded or destroyed');
    const index = nav.views.indexOf(viewController);
    assert(index > -1, 'view must be part of the stack');
    if (index >= 0) {
        nav.views.splice(index, 1);
    }
}
function insertViewIntoNav(nav, view, index) {
    const existingIndex = nav.views.indexOf(view);
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
            view.id = `${nav.navId}-${viewIds}`;
        }
        // insert the entering view into the correct index in the stack
        nav.views.splice(index, 0, view);
    }
}
function testIfViewsCanLeaveAndEnter(enteringView, leavingView, ti) {
    if (!ti.requiresTransition) {
        return Promise.resolve();
    }
    const promises = [];
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
    return Promise.all(promises).then((values) => {
        if (values.some(result => result === false)) {
            ti.reject = null;
            throw new Error('canEnter/Leave returned false');
        }
    });
}
function lifeCycleTest(viewController, enterOrLeave) {
    const methodName = `ionViewCan${enterOrLeave}`;
    if (viewController.instance && viewController.instance[methodName]) {
        try {
            const result = viewController.instance[methodName];
            if (result instanceof Promise) {
                return result;
            }
            return Promise.resolve(result !== false);
        }
        catch (e) {
            return Promise.reject(new Error(`Unexpected error when calling ${methodName}: ${e.message}`));
        }
    }
    return Promise.resolve(true);
}
function startTransaction(ti) {
    const viewsLength = ti.nav.views ? ti.nav.views.length : 0;
    if (isDef(ti.removeView)) {
        assert(isDef(ti.removeStart), 'removeView needs removeStart');
        assert(isDef(ti.removeCount), 'removeView needs removeCount');
        const index = ti.nav.views.indexOf(ti.removeView());
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
        for (let i = nav.views.length - 1; i >= 0; i--) {
            if ((i < ti.removeStart || i >= removeEnd) && nav.views[i] !== leavingView) {
                return nav.views[i];
            }
        }
    }
    return null;
}
function convertViewsToViewControllers(views) {
    return views.map(view => {
        if (view) {
            if (isViewController(view)) {
                return view;
            }
            return new ViewController(view.page, view.params);
        }
        return null;
    }).filter(view => !!view);
}
function convertComponentToViewController(nav, ti) {
    if (ti.insertViews) {
        assert(ti.insertViews.length > 0, 'length can not be zero');
        const viewControllers = convertViewsToViewControllers(ti.insertViews);
        assert(ti.insertViews.length === viewControllers.length, 'lengths does not match');
        if (viewControllers.length === 0) {
            throw new Error('No views to insert');
        }
        for (const viewController of viewControllers) {
            if (viewController.nav && viewController.nav.navId !== ti.id) {
                throw new Error('The view has already inserted into a different nav');
            }
            if (viewController.state === STATE_DESTROYED) {
                throw new Error('The view has already been destroyed');
            }
            if (nav.useRouter && !resolveRoute(nav, viewController.component)) {
                throw new Error('Route not specified for ' + viewController.component);
            }
        }
        return viewControllers;
    }
    return [];
}
function addToQueue(ti) {
    const list = queueMap.get(ti.id) || [];
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
    const queue = getQueue(id);
    if (!queue.length) {
        return null;
    }
    const tmp = queue.concat();
    const toReturn = tmp.shift();
    queueMap.set(id, tmp);
    return toReturn;
}
function getDefaultTransition(config) {
    return config.get('mode') === 'md' ? buildMdTransition : buildIOSTransition;
}
let viewIds = VIEW_ID_START;

let defaultDelegate = null;
class NavController {
    constructor() {
    }
    push(nav, component, data, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return push(nav, delegate, animation, component, data, opts);
        });
    }
    pop(nav, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return pop(nav, delegate, animation, opts);
        });
    }
    setRoot(nav, component, data, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return setRoot(nav, delegate, animation, component, data, opts);
        });
    }
    insert(nav, insertIndex, page, params, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return insert(nav, delegate, animation, insertIndex, page, params, opts);
        });
    }
    insertPages(nav, insertIndex, insertPages$$1, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return insertPages(nav, delegate, animation, insertIndex, insertPages$$1, opts);
        });
    }
    popToRoot(nav, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return popToRoot(nav, delegate, animation, opts);
        });
    }
    popTo(nav, indexOrViewCtrl, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return popTo(nav, delegate, animation, indexOrViewCtrl, opts);
        });
    }
    removeIndex(nav, startIndex, removeCount, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return remove(nav, delegate, animation, startIndex, removeCount, opts);
        });
    }
    removeView(nav, viewController, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return removeView(nav, delegate, animation, viewController, opts);
        });
    }
    setPages(nav, componentDataPairs, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return setPages(nav, delegate, animation, componentDataPairs, opts);
        });
    }
    render() {
        return h("slot", null);
    }
}
function hydrateDelegateAndAnimation(navController) {
    return Promise.all([hydrateDelegate(navController), hydrateAnimationController(navController.animationCtrl)]);
}
function hydrateDelegate(navController) {
    if (navController.delegate) {
        return Promise.resolve(navController.delegate);
    }
    // no delegate is set, so fall back to using the DomFrameworkDelegate
    defaultDelegate = new DomFrameworkDelegate();
    return Promise.resolve(defaultDelegate);
}
function hydrateAnimationController(animationController) {
    return animationController.create();
}

exports['ion-nav'] = Nav;
exports['ion-nav-controller'] = NavController;
},


/***************** ion-nav *****************/
[
/** ion-nav: tag **/
"ion-nav",

/** ion-nav: members **/
[
  [ "canGoBack", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "canSwipeBack", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "delegate", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "element", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getActive", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getFirstView", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getPrevious", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getRoutes", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getState", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "insert", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "insertPages", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "pop", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "popTo", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "popToRoot", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "push", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "removeIndex", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "removeView", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "resize", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "root", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "setPages", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "setRoot", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "setRouteId", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-nav: host **/
{},

/** ion-nav: events **/
[
  [
    /*****  ion-nav navInit ***** /
    /* event name ***/ "navInit"
  ],
  [
    /*****  ion-nav ionNavChanged ***** /
    /* event name ***/ "ionNavChanged"
  ]
]

],

/***************** ion-nav-controller *****************/
[
/** ion-nav-controller: tag **/
"ion-nav-controller",

/** ion-nav-controller: members **/
[
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "delegate", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "element", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "insert", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "insertPages", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "pop", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "popTo", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "popToRoot", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "push", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "removeIndex", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "removeView", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "setPages", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "setRoot", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-nav-controller: host **/
{}

]
);