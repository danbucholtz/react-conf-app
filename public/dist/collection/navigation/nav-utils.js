import { Transition } from './nav-interfaces';
import { Animation, AnimationOptions, Config, Nav, RouterEntry, TransitionBuilder, ViewController } from '..';
import { isDef } from '../utils/helpers';
export const STATE_NEW = 1;
export const STATE_INITIALIZED = 2;
export const STATE_ATTACHED = 3;
export const STATE_DESTROYED = 4;
export const INIT_ZINDEX = 100;
export const PORTAL_Z_INDEX_OFFSET = 0;
export const DIRECTION_BACK = 'back';
export const DIRECTION_FORWARD = 'forward';
export const DIRECTION_SWITCH = 'switch';
export const NAV = 'nav';
export const TABS = 'tabs';
export let NAV_ID_START = 1000;
export let VIEW_ID_START = 2000;
let transitionIds = 0;
let activeTransitions = new Map();
let portalZindex = 9999;
export function isViewController(object) {
    return !!(object && object.didLoad && object.willUnload);
}
export function setZIndex(nav, enteringView, leavingView, direction) {
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
export function updateZIndex(viewController, newZIndex) {
    if (newZIndex !== viewController.zIndex) {
        viewController.zIndex = newZIndex;
        viewController.element.style.zIndex = '' + newZIndex;
    }
}
export function toggleHidden(element, isVisible, shouldBeVisible) {
    if (isVisible !== shouldBeVisible) {
        element.hidden = shouldBeVisible;
    }
}
export function canNavGoBack(nav) {
    if (!nav) {
        return false;
    }
    return !!nav.getPrevious();
}
export function transitionFactory(animation) {
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
export function transitionStartImpl(transition) {
    transition.transitionStartFunction && transition.transitionStartFunction();
    transition.transitionStartFunction = null;
    transition.parent && transition.parent.start();
}
export function transitionDestroyImpl(transition) {
    transition.originalDestroy();
    transition.parent = transition.enteringView = transition.leavingView = transition.transitionStartFunction = null;
}
export function getParentTransitionId(nav) {
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
export function getNextTransitionId() {
    return transitionIds++;
}
export function destroyTransition(transitionId) {
    const transition = activeTransitions.get(transitionId);
    if (transition) {
        transition.destroy();
        activeTransitions.delete(transitionId);
    }
}
export function getHydratedTransition(name, config, transitionId, emptyTransition, enteringView, leavingView, opts, defaultTransitionFactory) {
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
export function canGoBack(nav) {
    return nav.views && nav.views.length > 0;
}
export function canSwipeBack(_nav) {
    return true;
}
export function getFirstView(nav) {
    return nav.views && nav.views.length > 0 ? nav.views[0] : null;
}
export function getActiveChildNavs(nav) {
    return nav.childNavs ? nav.childNavs : [];
}
export function getViews(nav) {
    return nav.views ? nav.views : [];
}
export function getActiveImpl(nav) {
    return nav.views && nav.views.length > 0 ? nav.views[nav.views.length - 1] : null;
}
export function getPreviousImpl(nav, viewController) {
    if (!viewController) {
        viewController = nav.getActive();
    }
    return nav.views[nav.views.indexOf(viewController) - 1];
}
export function getNextNavId() {
    return navControllerIds++;
}
export function resolveRoute(nav, component) {
    return nav.routes.find(r => r.id === component);
}
let navControllerIds = NAV_ID_START;
