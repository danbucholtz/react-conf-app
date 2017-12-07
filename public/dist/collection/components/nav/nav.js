import { EventEmitter } from '@stencil/core';
import { ComponentDataPair, Config, FrameworkDelegate, NavController, NavOptions, NavState, PublicNav, PublicViewController, RouterEntries, ViewController } from '../../index';
import { getActiveImpl, getFirstView, getNextNavId, getPreviousImpl, getViews, resolveRoute } from '../../navigation/nav-utils';
import { assert, isReady } from '../../utils/helpers';
/* it is very important to keep this class in sync with ./nav-interface interface */
export class Nav {
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
export function getState(nav) {
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
export function componentDidLoadImpl(nav) {
    nav.navInit.emit(nav);
    if (nav.root) {
        nav.setRoot(nav.root);
    }
}
export function pushImpl(nav, component, data, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.push(nav, component, data, opts);
    });
}
export function popImpl(nav, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.pop(nav, opts);
    });
}
export function setRootImpl(nav, component, data, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.setRoot(nav, component, data, opts);
    });
}
export function insertImpl(nav, insertIndex, page, params, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.insert(nav, insertIndex, page, params, opts);
    });
}
export function insertPagesImpl(nav, insertIndex, insertPages, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.insertPages(nav, insertIndex, insertPages, opts);
    });
}
export function popToRootImpl(nav, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.popToRoot(nav, opts);
    });
}
export function popToImpl(nav, indexOrViewCtrl, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.popTo(nav, indexOrViewCtrl, opts);
    });
}
export function removeImpl(nav, startIndex, removeCount, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.removeIndex(nav, startIndex, removeCount, opts);
    });
}
export function removeViewImpl(nav, viewController, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.removeView(nav, viewController, opts);
    });
}
export function setPagesImpl(nav, componentDataPairs, opts) {
    return getNavController(nav).then(() => {
        return nav.navController.setPages(nav, componentDataPairs, opts);
    });
}
export function getNavController(nav) {
    if (nav.navController) {
        return Promise.resolve();
    }
    nav.navController = document.querySelector('ion-nav-controller');
    return isReady(nav.navController);
}
export function canGoBackImpl(nav) {
    return nav.views && nav.views.length > 0;
}
export function navInitializedImpl(potentialParent, event) {
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
