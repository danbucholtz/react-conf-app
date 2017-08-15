import { STATE_DESTROYED } from './nav-utils';
import { assert } from '../utils/helpers';
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
export { ViewControllerImpl };
export function callLifecycle(instance, methodName) {
    instance && instance[methodName] && instance[methodName]();
}
export function dismiss(navCtrl, dismissProxy, data, role, navOptions) {
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
export function destroy(viewController) {
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
