import { Animation, AnimationController, ComponentDataPair, FrameworkDelegate, Nav, NavOptions, ViewController } from '../../index';
import { DomFrameworkDelegate } from './dom-framework-delegate';
import { insert as insertImpl, insertPages as insertPagesImpl, pop as popImpl, popTo as popToImpl, popToRoot as popToRootImpl, push as pushImpl, remove as removeImpl, removeView as removeViewImpl, setPages as setPagesImpl, setRoot as setRootImpl } from '../../navigation/nav-controller-functions';
let defaultDelegate = null;
export class NavController {
    constructor() {
    }
    push(nav, component, data, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return pushImpl(nav, delegate, animation, component, data, opts);
        });
    }
    pop(nav, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return popImpl(nav, delegate, animation, opts);
        });
    }
    setRoot(nav, component, data, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return setRootImpl(nav, delegate, animation, component, data, opts);
        });
    }
    insert(nav, insertIndex, page, params, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return insertImpl(nav, delegate, animation, insertIndex, page, params, opts);
        });
    }
    insertPages(nav, insertIndex, insertPages, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return insertPagesImpl(nav, delegate, animation, insertIndex, insertPages, opts);
        });
    }
    popToRoot(nav, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return popToRootImpl(nav, delegate, animation, opts);
        });
    }
    popTo(nav, indexOrViewCtrl, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return popToImpl(nav, delegate, animation, indexOrViewCtrl, opts);
        });
    }
    removeIndex(nav, startIndex, removeCount, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return removeImpl(nav, delegate, animation, startIndex, removeCount, opts);
        });
    }
    removeView(nav, viewController, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return removeViewImpl(nav, delegate, animation, viewController, opts);
        });
    }
    setPages(nav, componentDataPairs, opts) {
        return hydrateDelegateAndAnimation(this).then(([delegate, animation]) => {
            return setPagesImpl(nav, delegate, animation, componentDataPairs, opts);
        });
    }
    render() {
        return h("slot", null);
    }
}
export function hydrateDelegateAndAnimation(navController) {
    return Promise.all([hydrateDelegate(navController), hydrateAnimationController(navController.animationCtrl)]);
}
export function hydrateDelegate(navController) {
    if (navController.delegate) {
        return Promise.resolve(navController.delegate);
    }
    // no delegate is set, so fall back to using the DomFrameworkDelegate
    defaultDelegate = new DomFrameworkDelegate();
    return Promise.resolve(defaultDelegate);
}
export function hydrateAnimationController(animationController) {
    return animationController.create();
}
